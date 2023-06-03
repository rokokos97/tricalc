import {paceCalculator} from './paceCalculator';

describe('paceCalculator', () => {
  it('should calculate pace correctly', () => {
    const distance = 10;
    const time = ['0', '36', '0'];
    const expectedPace = ['3', '36', '0'];

    const result = paceCalculator(distance, time);

    expect(result).toEqual(expectedPace);
  });

  it('should handle zero distance', () => {
    const distance = 0;
    const time = ['1', '0', '0'];
    const expectedPace = [0, 0, 0];

    const result = paceCalculator(distance, time);

    expect(result).toEqual(expectedPace);
  });

  it('should handle zero time', () => {
    const distance = 5;
    const time = ['0', '0', '0'];
    const expectedPace = ['0', '0', '0'];

    const result = paceCalculator(distance, time);

    expect(result).toEqual(expectedPace);
  });
  it('should is no distance value', () => {
    const time = ['1', '10', '30'];
    const expectedPace = ['0', '0', '0'];

    const result = paceCalculator(time);

    expect(result).toEqual(expectedPace);
  });

  // Add more test cases as needed
});
