import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

// AQA GCSE Mathematics 8300 past papers
// Structure: filestore.aqa.org.uk/sample-papers-and-mark-schemes/{year}/{month}/AQA-{code}-{type}-{session}.PDF

interface PaperConfig {
  year: number;
  session: 'june' | 'november';
  papers: {
    code: string;
    name: string;
  }[];
}

const standardPapers = [
  { code: '83001F', name: 'Paper 1 Foundation' },
  { code: '83001H', name: 'Paper 1 Higher' },
  { code: '83002F', name: 'Paper 2 Foundation' },
  { code: '83002H', name: 'Paper 2 Higher' },
  { code: '83003F', name: 'Paper 3 Foundation' },
  { code: '83003H', name: 'Paper 3 Higher' },
];

const paperConfigs: PaperConfig[] = [
  { year: 2019, session: 'june', papers: standardPapers },
  { year: 2020, session: 'june', papers: standardPapers }, // May not exist due to COVID
  { year: 2021, session: 'june', papers: standardPapers }, // May not exist due to COVID
  { year: 2022, session: 'june', papers: standardPapers },
  { year: 2023, session: 'june', papers: standardPapers },
  { year: 2022, session: 'november', papers: standardPapers },
  { year: 2023, session: 'november', papers: standardPapers },
];

const sessionCodes: Record<string, string> = {
  june: 'JUN',
  november: 'NOV',
};

function getUrls(config: PaperConfig) {
  const { year, session, papers } = config;
  const shortYear = year.toString().slice(-2);
  const sessionCode = sessionCodes[session];
  const monthPath = session;

  const urls: { url: string; filename: string; type: string }[] = [];

  for (const paper of papers) {
    // Question paper
    urls.push({
      url: `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${monthPath}/AQA-${paper.code}-QP-${sessionCode}${shortYear}.PDF`,
      filename: `${year}-${session}-${paper.code}-QP.pdf`,
      type: 'question-paper',
    });

    // Mark scheme
    urls.push({
      url: `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${monthPath}/AQA-${paper.code}-MS-${sessionCode}${shortYear}.PDF`,
      filename: `${year}-${session}-${paper.code}-MS.pdf`,
      type: 'mark-scheme',
    });
  }

  return urls;
}

async function downloadFile(url: string, filepath: string): Promise<boolean> {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    fs.writeFileSync(filepath, response.data);
    console.log(`✓ Downloaded: ${path.basename(filepath)}`);
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`✗ Failed: ${path.basename(filepath)} - ${error.response?.status || error.message}`);
    } else {
      console.log(`✗ Failed: ${path.basename(filepath)} - ${error}`);
    }
    return false;
  }
}

async function main() {
  const dataDir = path.join(__dirname, '..', 'data', 'raw');

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  console.log('Downloading AQA GCSE Mathematics past papers...\n');

  let downloaded = 0;
  let failed = 0;

  for (const config of paperConfigs) {
    console.log(`\n${config.year} ${config.session}:`);
    const urls = getUrls(config);

    for (const { url, filename } of urls) {
      const filepath = path.join(dataDir, filename);

      if (fs.existsSync(filepath)) {
        console.log(`→ Skipped: ${filename} (already exists)`);
        downloaded++;
        continue;
      }

      const success = await downloadFile(url, filepath);
      if (success) downloaded++;
      else failed++;

      // Small delay between downloads
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  console.log(`\n✓ Complete: ${downloaded} downloaded, ${failed} failed`);
  console.log(`Files saved to: ${dataDir}`);
}

main();
