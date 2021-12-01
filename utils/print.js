const pc = require('picocolors');

function randomSmileys(count = 3) {
  const smileys = ['⭐️', '🎄', '🎁', '🌲', '🧧', '🤶', '🎅'];
  const randomIndices = Array(count).fill(() =>
    Math.abs(Math.round(Math.random() * smileys.length - 1))
  );

  return randomIndices.map((i) => smileys[i()]).join('');
}

function printTitle(title) {
  const colorFunctions = [
    pc.green,
    pc.red,
    pc.yellow,
    pc.magenta,
    pc.blue,
    pc.cyan,
  ];

  const letters = title.split('');
  const colorizedTitle = letters.map((letter) =>
    pc.underline(
      colorFunctions[
        Math.abs(Math.round(Math.random() * colorFunctions.length - 1))
      ](letter)
    )
  );

  console.log(
    `\n -= ${randomSmileys(3)} ${colorizedTitle.join('')} ${randomSmileys(
      3
    )} =- \n`
  );
}

function styleResult(result) {
  return pc.underline(pc.green(result));
}

module.exports = {
  printTitle,
  styleResult,
};
