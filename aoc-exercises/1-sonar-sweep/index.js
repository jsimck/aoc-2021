const fs = require('fs');
const path = require('path');
const { printTitle, styleResult } = require('../../utils/print');

printTitle('Day 1: Sonar Sweep');

function prepareInput(input) {
  return input.split('\n').map((v) => parseInt(v));
}

function depthMeasurements(input) {
  const lines = prepareInput(input);
  let depthIncreaseCount = 0;

  for (let i = 1; i < lines.length; i++) {
    depthIncreaseCount += lines[i - 1] < lines[i] ? 1 : 0;
  }

  return depthIncreaseCount;
}

const firstInputData = fs.readFileSync(
  path.resolve(__dirname, './input-1.txt'),
  'utf-8'
);

console.log(
  `The depth has increased ${styleResult(
    depthMeasurements(firstInputData)
  )} times.`
);

function slidingWindowMeasurements(input) {
  const lines = prepareInput(input);
  const measurementTriples = [];

  for (let i = 2; i < lines.length; i++) {
    const first = lines[i - 2];
    const second = lines[i - 1];
    const third = lines[i];

    if (!first || !second || !third) {
      break;
    }

    measurementTriples.push([first, second, third]);
  }

  let depthIncreaseCount = 0;

  for (let i = 1; i < measurementTriples.length; i++) {
    const m1 = measurementTriples[i - 1].reduce((acc, cur) => (acc += cur), 0);
    const m2 = measurementTriples[i].reduce((acc, cur) => (acc += cur), 0);

    depthIncreaseCount += m1 < m2 ? 1 : 0;
  }

  return depthIncreaseCount;
}

const secondInputData = fs.readFileSync(
  path.resolve(__dirname, './input-2.txt'),
  'utf-8'
);

console.log(
  `Measurements after noise reduction: ${styleResult(
    slidingWindowMeasurements(secondInputData)
  )} times.`
);
