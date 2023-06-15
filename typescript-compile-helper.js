const copy = require('copy');

// Copy CSS files from 'src' to 'dist'
copy('src/**/*.scss', 'dist', (error, files) => {
  if (error) {
    console.error('Error copying CSS files:', error);
    process.exit(1);
  }

  console.log('CSS files copied successfully.');
});