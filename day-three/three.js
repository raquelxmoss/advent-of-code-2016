function parseSides (input) {
  return input
    .split(' ')
    .filter(c => c !== '')
    .map(side => side.trim())
    .map(len => parseInt(len))
    .sort((a, b) => a - b);
}

function validTriangle (sides) {
  const lengths = parseSides(sides);

  return lengths[0] + lengths[1] > lengths[2];
}

export default function validTriangleCount (input) {
  return input
    .split('\n')
    .map(triangle => validTriangle(triangle))
    .filter(result => result === true)
    .length;
}
