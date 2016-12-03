import _ from 'lodash';

const NUMPAD = [
  {x: 0, y: 0},
  {x: 1, y: 0},
  {x: 2, y: 0},
  {x: 0, y: 1},
  {x: 1, y: 1},
  {x: 2, y: 1},
  {x: 0, y: 2},
  {x: 1, y: 2},
  {x: 2, y: 2}
];

function parseInput (input) {
  return input
    .split('\n')
    .map(str => str.trim())
    .map(str => str.split(''))
    .filter(a => a.length !== 0);
}

function outOfBounds (min, max, value) {
  return value < min || value > max;
}

function positionToVector (position) {
  return NUMPAD[position - 1];
}

function directionToVector (direction) {
  return {
    U: {x: 0, y: -1},
    D: {x: 0, y: 1},
    L: {x: -1, y: 0},
    R: {x: 1, y: 0}
  }[direction];
}

function getCode (previousPosition, instruction) {
  const position = positionToVector(previousPosition);
  const change = directionToVector(instruction);

  const newX = change.x + position.x;
  const newY = change.y + position.y;

  const x = outOfBounds(0, 2, newX) ? position.x : newX;
  const y = outOfBounds(0, 2, newY) ? position.y : newY;

  const newPosition = { x, y };

  const result = _.findIndex(NUMPAD, _.find(NUMPAD, newPosition)) + 1;

  return result;
}

export default function bathroomCode (input) {
  const parsedInput = parseInput(input);

  const result = parsedInput.reduce((acc, row) => {
    return row.reduce((previous, instruction, index) => {
      const result = getCode(previous.position, instruction);

      let code;

      if (index === row.length - 1) {
        code = previous.code + result.toString();
      } else {
        code = previous.code.toString();
      }

      return {code, position: result};
    }, acc);
  }, {code: '', position: 5});

  return parseInt(result.code);
}
