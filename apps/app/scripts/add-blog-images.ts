import fs from 'fs';
import path from 'path';

// Educational Unsplash image URLs for different categories
const imagesByCategory = {
  'GCSE Maths': [
    'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=800&h=600&fit=crop', // Math equations
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop', // Calculator and math
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop', // Math formulas
    'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop', // Study materials
    'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=800&h=600&fit=crop', // Mathematics concept
  ],
  'A-Level Maths': [
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop', // Advanced math
    'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop', // Complex equations
    'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop', // Calculus
    'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=800&h=600&fit=crop', // Math board
  ],
  'GCSE Physics': [
    'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop', // Physics experiment
    'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&h=600&fit=crop', // Laboratory equipment
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Scientific instruments
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop', // Physics formulas
  ],
  'A-Level Physics': [
    'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop', // Advanced physics
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Lab equipment
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop', // Complex physics
    'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&h=600&fit=crop', // Research lab
  ],
  'GCSE Chemistry': [
    'https://images.unsplash.com/photo-1596813422814-e0c4f9043e1e?w=800&h=600&fit=crop', // Chemistry lab
    'https://images.unsplash.com/photo-1564324443899-5eeb4befd556?w=800&h=600&fit=crop', // Test tubes
    'https://images.unsplash.com/photo-1632053002885-9e04ad3ee8d3?w=800&h=600&fit=crop', // Chemical formulas
    'https://images.unsplash.com/photo-1554475901-e2ce1a3e9914?w=800&h=600&fit=crop', // Lab equipment
  ],
  'A-Level Chemistry': [
    'https://images.unsplash.com/photo-1596813422814-e0c4f9043e1e?w=800&h=600&fit=crop', // Advanced chemistry
    'https://images.unsplash.com/photo-1554475901-e2ce1a3e9914?w=800&h=600&fit=crop', // Research lab
    'https://images.unsplash.com/photo-1632053002885-9e04ad3ee8d3?w=800&h=600&fit=crop', // Complex molecules
    'https://images.unsplash.com/photo-1564324443899-5eeb4befd556?w=800&h=600&fit=crop', // Lab work
  ],
  'GCSE Biology': [
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop', // Biology microscope
    'https://images.unsplash.com/photo-1617611539418-5ad5ad60a48a?w=800&h=600&fit=crop', // DNA structure
    'https://images.unsplash.com/photo-1604063347990-7e3e0c4bfcb2?w=800&h=600&fit=crop', // Cell biology
    'https://images.unsplash.com/photo-1623944889288-cd147dbb517c?w=800&h=600&fit=crop', // Biology study
  ],
  'A-Level Biology': [
    'https://images.unsplash.com/photo-1617611539418-5ad5ad60a48a?w=800&h=600&fit=crop', // Advanced biology
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop', // Research
    'https://images.unsplash.com/photo-1604063347990-7e3e0c4bfcb2?w=800&h=600&fit=crop', // Molecular biology
    'https://images.unsplash.com/photo-1623944889288-cd147dbb517c?w=800&h=600&fit=crop', // Scientific study
  ],
  'GCSE History': [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop', // Historical books
    'https://images.unsplash.com/photo-1471984524491-8906c55ab5ba?w=800&h=600&fit=crop', // Ancient texts
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Historical documents
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop', // History study
  ],
  'A-Level History': [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop', // Advanced history
    'https://images.unsplash.com/photo-1471984524491-8906c55ab5ba?w=800&h=600&fit=crop', // Historical research
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Archives
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop', // Historical analysis
  ],
  'GCSE English Literature': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Literature books
    'https://images.unsplash.com/photo-1471984524491-8906c55ab5ba?w=800&h=600&fit=crop', // Classic literature
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop', // Poetry books
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop', // Reading study
  ],
  'A-Level English Literature': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Advanced literature
    'https://images.unsplash.com/photo-1471984524491-8906c55ab5ba?w=800&h=600&fit=crop', // Literary analysis
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop', // Critical study
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop', // Literary research
  ],
  'GCSE Computer Science': [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop', // Programming
    'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&h=600&fit=crop', // Code on screen
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop', // Computer science
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop', // Technology
  ],
  'A-Level Computer Science': [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop', // Advanced programming
    'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&h=600&fit=crop', // Software development
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop', // Computer algorithms
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop', // Tech innovation
  ],
  'default': [
    'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop', // Study materials
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop', // Education
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop', // Learning
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', // Academic study
  ]
};

function getRandomImageForCategory(category: string): string {
  const images = imagesByCategory[category as keyof typeof imagesByCategory] || imagesByCategory.default;
  return images[Math.floor(Math.random() * images.length)];
}

async function addImagesToBlogs() {
  const blogFilePath = path.join(process.cwd(), 'src/lib/blog.ts');
  let blogContent = fs.readFileSync(blogFilePath, 'utf-8');

  // Pattern to match blog post objects without images
  const blogPostPattern = /(\{\s*id:\s*'[^']+',[\s\S]*?category:\s*'([^']+)',)(\s*content:)/g;
  
  let match;
  let updatedContent = blogContent;
  
  while ((match = blogPostPattern.exec(blogContent)) !== null) {
    const fullMatch = match[0];
    const beforeCategory = match[1];
    const category = match[2];
    const afterCategory = match[3];
    
    // Check if this blog post already has an image
    if (!fullMatch.includes('image:')) {
      const imageUrl = getRandomImageForCategory(category);
      const replacement = `${beforeCategory}\n    image: '${imageUrl}',${afterCategory}`;
      updatedContent = updatedContent.replace(fullMatch, replacement);
    }
  }
  
  fs.writeFileSync(blogFilePath, updatedContent);
  console.log('✅ Successfully added images to all blog posts!');
}

addImagesToBlogs().catch(console.error);