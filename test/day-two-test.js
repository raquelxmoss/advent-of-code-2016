/* globals it, describe */
import assert from 'assert';
import bathroomCode from '../day-two/two';
import complicatedBathroomCode from '../day-two/two-part-two';
import { input } from '../day-two/input';

describe('bathroomCode', () => {
  it('gives us the damn bathroom code', () => {
    const exampleInput = `
      ULL
      RRDDD
      LURDL
      UUUUD
    `;

    assert.equal(bathroomCode(exampleInput), 1985);
    assert.equal(bathroomCode(input), 52981);
  });
});

describe('complicatedBathroomCode', () => {
  it('gives us the damn bathroom code', () => {
    const exampleInput = `
      R
    `;

    assert.equal(complicatedBathroomCode(exampleInput), '6');
    assert.equal(complicatedBathroomCode(input), '74CD2');
  });
});
