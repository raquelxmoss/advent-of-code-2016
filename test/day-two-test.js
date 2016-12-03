/* globals it, describe */
import assert from 'assert';
import bathroomCode from '../day-two/two';
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
