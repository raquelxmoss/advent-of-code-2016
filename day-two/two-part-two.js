import _ from 'lodash';

const NUMPAD = {
  1: {x: 2, y: 0},
  2: {x: 1, y: 1},
  3: {x: 2, y: 1},
  4: {x: 3, y: 1},
  5: {x: 0, y: 2},
  6: {x: 1, y: 2},
  7: {x: 2, y: 2},
  8: {x: 3, y: 2},
  9: {x: 4, y: 2},
  A: {x: 1, y: 3},
  B: {x: 2, y: 3},
  C: {x: 3, y: 3},
  D: {x: 2, y: 4}
};

const validPositions = [
  {x: 2, y: 0},
  {x: 1, y: 1},
  {x: 2, y: 1},
  {x: 3, y: 1},
  {x: 0, y: 2},
  {x: 1, y: 2},
  {x: 2, y: 2},
  {x: 3, y: 2},
  {x: 4, y: 2},
  {x: 1, y: 3},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 2, y: 4}
];

function parseInput (input) {
  return input
    .split('\n')
    .map(str => str.trim())
    .map(str => str.split(''))
    .filter(a => a.length !== 0);
}

function positionToVector (position) {
  return NUMPAD[position];
}

function directionToVector (direction) {
  return {
    U: {x: 0, y: -1},
    D: {x: 0, y: 1},
    L: {x: -1, y: 0},
    R: {x: 1, y: 0}
  }[direction];
}

function getCode (previousPosition, instruction, rowIndex, columnIndex) {
  const position = positionToVector(previousPosition);
  const change = directionToVector(instruction);

  const newX = change.x + position.x;
  const newY = change.y + position.y;

  const positionIsValid = _.find(validPositions, {x: newX, y: newY}) !== undefined;

  const x = positionIsValid ? newX : position.x;
  const y = positionIsValid ? newY : position.y;

  const newPosition = { x, y };

  const result = _.findKey(NUMPAD, newPosition);

  return result;
}

export default function bathroomCode (input) {
  const parsedInput = parseInput(input);

  const result = parsedInput.reduce((acc, row, rowIndex) => {
    return row.reduce((previous, instruction, index, columnIndex) => {
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

  return result.code;
}
