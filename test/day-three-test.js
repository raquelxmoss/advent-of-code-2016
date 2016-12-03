/* globals it, describe */
import assert from 'assert';
import validTriangleCount from '../day-three/three';
import { input } from '../day-three/input';

describe('validTriangleCount', () => {
  it('tells us how many valid triangles there are', () => {
    const exampleInput = `3, 3, 3`;
    const exampleInput2 = `2, 2, 8`

    assert.equal(validTriangleCount(exampleInput), 1);
    assert.equal(validTriangleCount(exampleInput2), 0);
    assert.equal(validTriangleCount(input), 869);
  });
});
