function calculateVector (dir, {x, y}, blocks) {
  return {
    0: {x, y: y + blocks},
    1: {x: x + blocks, y},
    2: {x, y: y - blocks},
    3: {x: x - blocks, y}
  }[dir];
}

function distanceAsVector (instructions) {
  return instructions.reduce((acc, curr) => {
    let dir = (curr[0] === 'L' ? -1 : 1) + acc.dir;

    if (dir < 0) { dir += 4; }
    dir %= 4;

    const blocks = parseInt((curr.slice(1, curr.length)), 10);

    const newVector = calculateVector(dir, {x: acc.x, y: acc.y}, blocks);

    return Object.assign(newVector, {dir});
  }, { x: 0, y: 0, dir: 0 });
}

export function howFarTo (input) {
  const instructions = distanceAsVector(input.split(', '));

  return Math.abs(instructions.x + instructions.y);
}
