# Fine-Tuning on Real Past Papers (FREE extraction)

Train the AI on actual exam questions. **Extraction is FREE** - only the final fine-tuning step costs ~$5.

## Quick Start

```bash
# 1. Download papers (FREE)
npx tsx scripts/download-papers.ts

# 2. Extract questions (FREE - no API calls)
npx tsx scripts/fine-tuning/extract-free.ts data/raw

# 3. Create training data (FREE)
npx tsx scripts/fine-tuning/create-training-data.ts data/extracted/raw-extracted.json --output=maths-gcse-aqa --subject=maths

# 4. Fine-tune (~$5, takes 15-60 min)
npx tsx scripts/fine-tuning/train.ts data/training/maths-gcse-aqa-training.jsonl --suffix=maths-gcse-aqa

# 5. Add model to .env.local when complete
```

## Cost Breakdown

| Step | Cost |
|------|------|
| Download papers | FREE |
| Extract questions (regex parsing) | FREE |
| Create training data | FREE |
| **Fine-tune model** | **~$5** |

## Step 1: Download Papers

The download script gets AQA GCSE Maths papers from their public website:

```bash
npx tsx scripts/download-papers.ts
```

Papers are saved to `data/raw/`.

## Step 2: Extract Questions (FREE)

Uses regex to parse PDFs - no AI API calls:

```bash
npx tsx scripts/fine-tuning/extract-free.ts data/raw
```

Output saved to `data/extracted/`.

## Step 3: Create Training Data

Converts extracted questions to fine-tuning format:

```bash
npx tsx scripts/fine-tuning/create-training-data.ts data/extracted/raw-extracted.json \
  --output=maths-gcse-aqa \
  --subject=maths
```

## Step 4: Fine-Tune

This is the only step that costs money (~$5):

```bash
npx tsx scripts/fine-tuning/train.ts data/training/maths-gcse-aqa-training.jsonl \
  --suffix=maths-gcse-aqa
```

Check status:
```bash
npx tsx scripts/fine-tuning/train.ts --status
```

## Step 5: Use the Model

Add to `.env.local`:
```
FINE_TUNED_MODEL_MATHS_GCSE_AQA=ft:gpt-4o-mini-2024-07-18:personal::xxxxx
```

The app auto-uses it for AQA GCSE Maths questions.

## Adding Other Subjects/Boards

1. Get past papers (download or manual)
2. Put them in a folder like `data/papers/physics-gcse-aqa/`
3. Name files with `-qp.pdf` and `-ms.pdf` suffixes
4. Run the same extraction pipeline

## File Naming Convention

```
{anything}-qp.pdf    → Question paper
{anything}-ms.pdf    → Mark scheme
```

The script matches them by the part before `-qp`/`-ms`.
