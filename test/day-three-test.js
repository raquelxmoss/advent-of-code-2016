/* globals it, describe */
import assert from 'assert';
import validTriangleCount from '../day-three/three';
import { input } from '../day-three/input';

describe('validTriangleCount', () => {
  it('tells us how many valid triangles there are', () => {
    const exampleInput = `
      3 0 0
      3 0 3
      3 0 0
    `;

    const exampleInput2 = `
      810  679    9
      783  255  616
      545  626  626
    `;

    assert.equal(validTriangleCount(exampleInput), 1);
    assert.equal(validTriangleCount(exampleInput2), 2);
    assert.equal(validTriangleCount(input), 1544);
  });
});
