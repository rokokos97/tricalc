import {paceCalculator} from './paceCalculator';

describe('paceCalculator', () => {
  it('should calculate pace correctly', () => {
    const distance = 10;
    const time = ['0', '36', '0'];
    const expectedPace = ['0', '3', '36', '0'];

    const result = paceCalculator(distance, time);

    expect(result).toEqual(expectedPace);
  });

  it('should omit first argument', () => {
    const distance = undefined;
    const time = ['1', '0', '0'];
    const expectedPace = ['1', '0', '0', '0'];

    const result = paceCalculator(distance, time);

    expect(result).toEqual(expectedPace);
  });

  it('should omit all arguments', () => {
    const distance = undefined;
    const time = undefined;
    const expectedPace = ['0', '0', '0', '0'];

    const result = paceCalculator(distance, time);

    expect(result).toEqual(expectedPace);
  });
});
