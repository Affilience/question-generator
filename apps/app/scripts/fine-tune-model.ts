import * as fs from 'fs';
import * as path from 'path';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function uploadFile(filepath: string, purpose: 'fine-tune'): Promise<string> {
  console.log(`Uploading ${path.basename(filepath)}...`);

  const file = await openai.files.create({
    file: fs.createReadStream(filepath),
    purpose,
  });

  console.log(`  File ID: ${file.id}`);
  return file.id;
}

async function createFineTuningJob(
  trainingFileId: string,
  validationFileId?: string
): Promise<string> {
  console.log('\nCreating fine-tuning job...');

  const job = await openai.fineTuning.jobs.create({
    training_file: trainingFileId,
    validation_file: validationFileId,
    model: 'gpt-4o-mini-2024-07-18',
    suffix: 'gcse-maths',
    hyperparameters: {
      n_epochs: 3,
    },
  });

  console.log(`  Job ID: ${job.id}`);
  console.log(`  Status: ${job.status}`);

  return job.id;
}

async function checkJobStatus(jobId: string): Promise<void> {
  const job = await openai.fineTuning.jobs.retrieve(jobId);

  console.log(`\nJob Status: ${job.status}`);

  if (job.status === 'succeeded') {
    console.log(`✓ Fine-tuned model: ${job.fine_tuned_model}`);
    console.log('\nUpdate your .env.local with:');
    console.log(`FINE_TUNED_MODEL=${job.fine_tuned_model}`);
  } else if (job.status === 'failed') {
    console.log(`✗ Job failed: ${job.error?.message}`);
  } else {
    console.log('Job still in progress. Run this script again to check status.');
  }
}

async function listJobs(): Promise<void> {
  const jobs = await openai.fineTuning.jobs.list({ limit: 10 });

  console.log('Recent fine-tuning jobs:');
  for (const job of jobs.data) {
    console.log(`  ${job.id}: ${job.status} (${job.model})`);
    if (job.fine_tuned_model) {
      console.log(`    → ${job.fine_tuned_model}`);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'start';

  if (command === 'status') {
    const jobId = args[1];
    if (!jobId) {
      await listJobs();
    } else {
      await checkJobStatus(jobId);
    }
    return;
  }

  if (command === 'list') {
    await listJobs();
    return;
  }

  // Start new fine-tuning job
  const trainingDir = path.join(__dirname, '..', 'data', 'training');
  const trainingPath = path.join(trainingDir, 'training.jsonl');
  const validationPath = path.join(trainingDir, 'validation.jsonl');

  if (!fs.existsSync(trainingPath)) {
    console.error('No training data found. Run create-training-data.ts first.');
    process.exit(1);
  }

  // Check minimum examples
  const trainingLines = fs.readFileSync(trainingPath, 'utf-8').split('\n').filter(Boolean);
  console.log(`Training examples: ${trainingLines.length}`);

  if (trainingLines.length < 10) {
    console.error('Need at least 10 training examples for fine-tuning.');
    process.exit(1);
  }

  // Upload files
  const trainingFileId = await uploadFile(trainingPath, 'fine-tune');

  let validationFileId: string | undefined;
  if (fs.existsSync(validationPath)) {
    const validationLines = fs.readFileSync(validationPath, 'utf-8').split('\n').filter(Boolean);
    if (validationLines.length > 0) {
      validationFileId = await uploadFile(validationPath, 'fine-tune');
    }
  }

  // Create fine-tuning job
  const jobId = await createFineTuningJob(trainingFileId, validationFileId);

  console.log('\n✓ Fine-tuning job started!');
  console.log(`\nCheck status with: npx tsx scripts/fine-tune-model.ts status ${jobId}`);
}

main().catch(console.error);
