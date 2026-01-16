/**
 * Fine-tune a model on extracted questions
 *
 * Usage:
 *   npx tsx scripts/fine-tuning/train.ts <training-file> [--validation=<file>] [--suffix=<name>]
 *   npx tsx scripts/fine-tuning/train.ts --status [job-id]
 *   npx tsx scripts/fine-tuning/train.ts --list
 *
 * Example:
 *   npx tsx scripts/fine-tuning/train.ts data/training/maths-gcse-aqa-training.jsonl --suffix=maths-gcse-aqa
 */

import * as fs from 'fs';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function uploadFile(filepath: string): Promise<string> {
  console.log(`Uploading: ${filepath}`);

  const file = await openai.files.create({
    file: fs.createReadStream(filepath),
    purpose: 'fine-tune',
  });

  console.log(`  File ID: ${file.id}`);
  return file.id;
}

async function startFineTuning(
  trainingFileId: string,
  validationFileId: string | undefined,
  suffix: string
): Promise<string> {
  console.log('\nStarting fine-tuning job...');

  const params: OpenAI.FineTuning.Jobs.JobCreateParams = {
    training_file: trainingFileId,
    model: 'gpt-4o-mini-2024-07-18',
    suffix: suffix,
    hyperparameters: {
      n_epochs: 3,
    },
  };

  if (validationFileId) {
    params.validation_file = validationFileId;
  }

  const job = await openai.fineTuning.jobs.create(params);

  console.log(`  Job ID: ${job.id}`);
  console.log(`  Status: ${job.status}`);
  console.log(`  Model: ${job.model}`);

  return job.id;
}

async function checkStatus(jobId?: string): Promise<void> {
  if (jobId) {
    const job = await openai.fineTuning.jobs.retrieve(jobId);

    console.log(`\nJob: ${job.id}`);
    console.log(`Status: ${job.status}`);
    console.log(`Model: ${job.model}`);

    if (job.status === 'succeeded' && job.fine_tuned_model) {
      console.log(`\n✓ Fine-tuned model ready: ${job.fine_tuned_model}`);
      console.log(`\nAdd to .env.local:`);
      console.log(`FINE_TUNED_MODEL_MATHS_GCSE_AQA=${job.fine_tuned_model}`);
    } else if (job.status === 'failed') {
      console.log(`\n✗ Job failed: ${job.error?.message || 'Unknown error'}`);
    } else {
      console.log(`\nJob is ${job.status}. Check again later.`);

      // Show events
      const events = await openai.fineTuning.jobs.listEvents(job.id, { limit: 5 });
      if (events.data.length > 0) {
        console.log('\nRecent events:');
        for (const event of events.data.reverse()) {
          console.log(`  ${event.created_at}: ${event.message}`);
        }
      }
    }
  } else {
    await listJobs();
  }
}

async function listJobs(): Promise<void> {
  const jobs = await openai.fineTuning.jobs.list({ limit: 10 });

  console.log('\nRecent fine-tuning jobs:\n');

  for (const job of jobs.data) {
    const status = job.status === 'succeeded' ? '✓' : job.status === 'failed' ? '✗' : '○';
    console.log(`${status} ${job.id}`);
    console.log(`  Status: ${job.status}`);
    console.log(`  Model: ${job.model}`);
    if (job.fine_tuned_model) {
      console.log(`  Result: ${job.fine_tuned_model}`);
    }
    console.log('');
  }
}

async function main() {
  const args = process.argv.slice(2);

  // Check for --status or --list flags
  if (args.includes('--status')) {
    const jobId = args.find(a => !a.startsWith('--'));
    await checkStatus(jobId);
    return;
  }

  if (args.includes('--list')) {
    await listJobs();
    return;
  }

  // Start new fine-tuning job
  if (args.length === 0) {
    console.log('Usage:');
    console.log('  npx tsx scripts/fine-tuning/train.ts <training-file> [--validation=<file>] [--suffix=<name>]');
    console.log('  npx tsx scripts/fine-tuning/train.ts --status [job-id]');
    console.log('  npx tsx scripts/fine-tuning/train.ts --list');
    console.log('\nExample:');
    console.log('  npx tsx scripts/fine-tuning/train.ts data/training/maths-gcse-aqa-training.jsonl --suffix=maths-gcse-aqa');
    process.exit(1);
  }

  const trainingFile = args[0];
  const validationArg = args.find(a => a.startsWith('--validation='));
  const suffixArg = args.find(a => a.startsWith('--suffix='));

  const validationFile = validationArg ? validationArg.split('=')[1] : undefined;
  const suffix = suffixArg ? suffixArg.split('=')[1] : 'question-gen';

  if (!fs.existsSync(trainingFile)) {
    console.error(`File not found: ${trainingFile}`);
    process.exit(1);
  }

  // Check minimum examples
  const lines = fs.readFileSync(trainingFile, 'utf-8').split('\n').filter(Boolean);
  console.log(`Training examples: ${lines.length}`);

  if (lines.length < 10) {
    console.error('\n✗ Need at least 10 training examples for fine-tuning.');
    console.error('Add more past papers to get more examples.');
    process.exit(1);
  }

  // Upload files
  const trainingFileId = await uploadFile(trainingFile);

  let validationFileId: string | undefined;
  if (validationFile && fs.existsSync(validationFile)) {
    validationFileId = await uploadFile(validationFile);
  }

  // Start fine-tuning
  const jobId = await startFineTuning(trainingFileId, validationFileId, suffix);

  console.log('\n✓ Fine-tuning started!');
  console.log(`\nCheck status with:`);
  console.log(`  npx tsx scripts/fine-tuning/train.ts --status ${jobId}`);
}

main().catch(console.error);
