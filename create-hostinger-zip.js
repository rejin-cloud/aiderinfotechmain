const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, 'out');
const zipPath = path.join(__dirname, 'aider-infotech-hostinger.zip');

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log('Zipping out directory using PowerShell...');

// Tar is built-in on Windows 10/11 and PowerShell, creates perfect zip archives maintaining _next directory
try {
  execSync(`tar -a -c -f "${zipPath}" -C "${outDir}" .`, { stdio: 'inherit' });
  console.log('Successfully created zip archive!');
} catch (err) {
  console.error('Tar zip failed:', err);
}
