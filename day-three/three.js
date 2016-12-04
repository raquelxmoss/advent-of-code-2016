import { transpose } from 'mathjs';
import _ from 'lodash';

function parseInput (input) {
  const parsed = input
    .split('\n')
    .map(str => str.trim())
    .filter(row => row !== '')
    .map(row => row.split(' '))
    .map(row => row.filter(c => c !== ''))
    .map(row => row.map(i => parseInt(i)));

  const transposed = transpose(parsed);
  const chunked = transposed.map(row => _.chunk(row, 3));

  const result = _.flatten(chunked);

  return result;
}

function sortSides (input) {
  return input.sort((a, b) => a - b);
}

function validTriangle (sides) {
  const sortedSides = sortSides(sides);

  return sortedSides[0] + sortedSides[1] > sortedSides[2];
}

export default function validTriangleCount (input) {
  return parseInput(input)
    .map(triangle => validTriangle(triangle))
    .filter(result => result === true)
    .length;
}
