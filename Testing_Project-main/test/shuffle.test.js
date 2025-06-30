import { expect } from 'chai';
import { shuffle } from '../starter/src/shuffle.js';

describe('shuffle function', () => {
  it('should return a new array with the same length', () => {
    const cards = [1, 2, 3, 4, 5];
    const result = shuffle(cards);
    expect(result).to.have.lengthOf(cards.length);
  });

  it('should return a new array with the same elements but different order', () => {
    const cards = ['a', 'b', 'c', 'd'];
    const result = shuffle(cards);
    expect(result).to.have.members(cards);
    expect(result).to.not.deep.equal(cards);
  });

  it('should not modify the original array', () => {
    const cards = [1, 2, 3, 4, 5];
    const copy = [...cards];
    shuffle(cards);
    expect(cards).to.deep.equal(copy);
  });
});
