#!/usr/bin/env node

import React from 'react';

// Test diagram specifications to check if they render without overlapping

const testDiagrams = {
  'Animal Cell': {
    "width": 12,
    "height": 12,
    "showNotAccurate": true,
    "elements": [
      {"type": "circle", "center": {"x": 6, "y": 6}, "radius": 4.5, "stroke": "#000", "strokeWidth": 2, "fill": "rgba(200,220,255,0.1)"},
      {"type": "circle", "center": {"x": 6, "y": 6}, "radius": 1.8, "stroke": "#000", "strokeWidth": 2, "fill": "rgba(150,150,255,0.3)"},
      {"type": "circle", "center": {"x": 3.5, "y": 4}, "radius": 0.6, "stroke": "#000", "strokeWidth": 1, "fill": "rgba(255,150,150,0.5)"},
      {"type": "circle", "center": {"x": 8.5, "y": 8}, "radius": 0.5, "stroke": "#000", "strokeWidth": 1, "fill": "rgba(150,255,150,0.5)"},
      {"type": "circle", "center": {"x": 4, "y": 8.5}, "radius": 0.4, "stroke": "#000", "strokeWidth": 1, "fill": "rgba(255,200,150,0.5)"},
      {"type": "text", "position": {"x": 6, "y": 6}, "content": "Nucleus", "fontSize": 10},
      {"type": "text", "position": {"x": 3.5, "y": 2.8}, "content": "Mitochondria", "fontSize": 8},
      {"type": "text", "position": {"x": 8.5, "y": 9}, "content": "Ribosome", "fontSize": 8},
      {"type": "text", "position": {"x": 4, "y": 9.5}, "content": "Lysosome", "fontSize": 8},
      {"type": "text", "position": {"x": 9.5, "y": 11}, "content": "Cell membrane", "fontSize": 9}
    ]
  },

  'Plant Cell': {
    "width": 12,
    "height": 12,
    "showNotAccurate": true,
    "elements": [
      {"type": "rectangle", "topLeft": {"x": 1, "y": 1}, "width": 10, "height": 10, "stroke": "#000", "strokeWidth": 3, "fill": "rgba(200,255,200,0.1)"},
      {"type": "rectangle", "topLeft": {"x": 1.3, "y": 1.3}, "width": 9.4, "height": 9.4, "stroke": "#666", "strokeWidth": 1, "fill": "rgba(220,240,255,0.1)"},
      {"type": "circle", "center": {"x": 5.5, "y": 6}, "radius": 1.6, "stroke": "#000", "strokeWidth": 2, "fill": "rgba(150,150,255,0.3)"},
      {"type": "circle", "center": {"x": 3, "y": 4}, "radius": 0.5, "stroke": "#000", "strokeWidth": 1, "fill": "rgba(255,150,150,0.5)"},
      {"type": "rectangle", "topLeft": {"x": 7.5, "y": 3.5}, "width": 1.2, "height": 2, "stroke": "#000", "strokeWidth": 1, "fill": "rgba(100,255,100,0.6)"},
      {"type": "rectangle", "topLeft": {"x": 8, "y": 7}, "width": 1, "height": 1.5, "stroke": "#000", "strokeWidth": 1, "fill": "rgba(100,255,100,0.6)"},
      {"type": "circle", "center": {"x": 6.5, "y": 8.5}, "radius": 0.8, "fill": "rgba(240,240,240,0.8)", "stroke": "#999", "strokeWidth": 1},
      {"type": "text", "position": {"x": 5.5, "y": 6}, "content": "Nucleus", "fontSize": 9},
      {"type": "text", "position": {"x": 3, "y": 3}, "content": "Mitochondria", "fontSize": 7},
      {"type": "text", "position": {"x": 8.1, "y": 4.5}, "content": "Chloroplast", "fontSize": 7},
      {"type": "text", "position": {"x": 6.5, "y": 8.5}, "content": "Vacuole", "fontSize": 7},
      {"type": "text", "position": {"x": 1.5, "y": 0.5}, "content": "Cell wall", "fontSize": 8},
      {"type": "text", "position": {"x": 10.5, "y": 11.5}, "content": "Cell membrane", "fontSize": 7}
    ]
  },

  'History Timeline': {
    "width": 14,
    "height": 6,
    "showNotAccurate": true,
    "elements": [
      {"type": "line", "from": {"x": 2, "y": 3}, "to": {"x": 12, "y": 3}, "strokeWidth": 3},
      {"type": "point", "position": {"x": 3, "y": 3}, "style": "dot", "size": 6},
      {"type": "point", "position": {"x": 6, "y": 3}, "style": "dot", "size": 6},
      {"type": "point", "position": {"x": 9, "y": 3}, "style": "dot", "size": 6},
      {"type": "point", "position": {"x": 11, "y": 3}, "style": "dot", "size": 6},
      {"type": "text", "position": {"x": 3, "y": 1.5}, "content": "1914", "fontSize": 11},
      {"type": "text", "position": {"x": 6, "y": 1.5}, "content": "1916", "fontSize": 11},
      {"type": "text", "position": {"x": 9, "y": 1.5}, "content": "1917", "fontSize": 11},
      {"type": "text", "position": {"x": 11, "y": 1.5}, "content": "1918", "fontSize": 11},
      {"type": "text", "position": {"x": 3, "y": 4.5}, "content": "War begins", "fontSize": 9},
      {"type": "text", "position": {"x": 6, "y": 4.5}, "content": "Battle of Somme", "fontSize": 9},
      {"type": "text", "position": {"x": 9, "y": 4.5}, "content": "USA enters", "fontSize": 9},
      {"type": "text", "position": {"x": 11, "y": 4.5}, "content": "War ends", "fontSize": 9}
    ]
  }
};

function checkDiagramForOverlaps(diagramName, spec) {
  console.log(`\n=== Checking ${diagramName} ===`);
  
  const elements = spec.elements;
  const overlaps = [];
  
  // Check for overlapping circles and text
  for (let i = 0; i < elements.length; i++) {
    const el1 = elements[i];
    for (let j = i + 1; j < elements.length; j++) {
      const el2 = elements[j];
      
      // Check circle overlaps (but ignore concentric circles which are intentional)
      if (el1.type === 'circle' && el2.type === 'circle') {
        const dist = Math.sqrt(
          Math.pow(el1.center.x - el2.center.x, 2) + 
          Math.pow(el1.center.y - el2.center.y, 2)
        );
        const minDist = el1.radius + el2.radius;
        
        // Skip concentric circles (same center point) as they're intentional for cell diagrams
        const isConcentric = (dist < 0.1);
        
        if (dist < minDist && !isConcentric) {
          overlaps.push(`Circles at (${el1.center.x},${el1.center.y}) and (${el2.center.x},${el2.center.y}) overlap by ${(minDist - dist).toFixed(2)} units`);
        } else if (isConcentric) {
          console.log(`  ✓ Concentric circles detected (intentional for cell membrane/nucleus)`);
        }
      }
      
      // Check text overlaps (approximate)
      if (el1.type === 'text' && el2.type === 'text') {
        const dist = Math.sqrt(
          Math.pow(el1.position.x - el2.position.x, 2) + 
          Math.pow(el1.position.y - el2.position.y, 2)
        );
        if (dist < 1.5) { // Minimum distance for readable text
          overlaps.push(`Text "${el1.content}" at (${el1.position.x},${el1.position.y}) and "${el2.content}" at (${el2.position.x},${el2.position.y}) may overlap`);
        }
      }
      
      // Check text inside circles (should be intentional for labels)
      if ((el1.type === 'circle' && el2.type === 'text') || (el1.type === 'text' && el2.type === 'circle')) {
        const circle = el1.type === 'circle' ? el1 : el2;
        const text = el1.type === 'text' ? el1 : el2;
        const dist = Math.sqrt(
          Math.pow(circle.center.x - text.position.x, 2) + 
          Math.pow(circle.center.y - text.position.y, 2)
        );
        if (dist < circle.radius && !text.content.includes('Nucleus')) {
          console.log(`  ✓ Text "${text.content}" positioned inside circle (intentional labeling)`);
        }
      }
    }
  }
  
  if (overlaps.length === 0) {
    console.log(`  ✅ No problematic overlaps found`);
  } else {
    console.log(`  ❌ Found ${overlaps.length} potential overlap(s):`);
    overlaps.forEach(overlap => console.log(`     ${overlap}`));
  }
  
  // Check bounds
  const maxX = Math.max(...elements.map(el => {
    if (el.type === 'circle') return el.center.x + el.radius;
    if (el.type === 'text') return el.position.x;
    if (el.type === 'rectangle') return el.topLeft.x + el.width;
    if (el.type === 'line') return Math.max(el.from.x, el.to.x);
    if (el.type === 'point') return el.position.x;
    return 0;
  }));
  
  const maxY = Math.max(...elements.map(el => {
    if (el.type === 'circle') return el.center.y + el.radius;
    if (el.type === 'text') return el.position.y;
    if (el.type === 'rectangle') return el.topLeft.y + el.height;
    if (el.type === 'line') return Math.max(el.from.y, el.to.y);
    if (el.type === 'point') return el.position.y;
    return 0;
  }));
  
  if (maxX > spec.width || maxY > spec.height) {
    console.log(`  ⚠️  Elements may extend beyond diagram bounds (${maxX.toFixed(1)} > ${spec.width} or ${maxY.toFixed(1)} > ${spec.height})`);
  } else {
    console.log(`  ✅ All elements within diagram bounds`);
  }
}

// Run tests
console.log('🔍 Testing diagram specifications for overlaps...');

Object.entries(testDiagrams).forEach(([name, spec]) => {
  checkDiagramForOverlaps(name, spec);
});

console.log('\n✨ Diagram testing complete!');