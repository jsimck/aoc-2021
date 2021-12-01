const fs = require('fs');
const path = require('path');
const child = require('child_process');

const baseDir = path.resolve(__dirname, './aoc-exercises');
const exercises = fs.readdirSync(baseDir);

exercises.forEach((exercise) => {
  child.spawnSync('node', [path.join(baseDir, exercise)], {
    stdio: 'inherit',
  });
});
