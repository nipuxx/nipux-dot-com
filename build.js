#!/usr/bin/env node

// Check if we're in a recursive call from OpenNext
if (process.env.OPENNEXT_BUILD === 'true') {
  // If called by OpenNext, just run Next.js build
  const { execSync } = require('child_process');
  execSync('npx next build', { stdio: 'inherit' });
} else {
  // If called directly, run both Next.js and OpenNext builds
  const { execSync } = require('child_process');
  
  // Set environment variable to prevent recursion
  process.env.OPENNEXT_BUILD = 'true';
  
  // Run Next.js build first
  execSync('npx next build', { stdio: 'inherit' });
  
  // Then run OpenNext build
  execSync('npx opennextjs-cloudflare build', { stdio: 'inherit' });
} 