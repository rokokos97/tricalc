import {timeCalculate} from './timeCalculate';

describe('timeCalculate', ()=>{
  it('should all argument set correctly', ()=>{
    const distance = 1;
    const pace = ['4', '0', '0'];
    const expectedResult = ['0', '4', '0'];

    const result = timeCalculate(distance, pace);

    expect(result).toEqual(expectedResult);
  });
  it('should all argument set correctly', ()=>{
    const distance = 1;
    const pace = ['4', '0', '0'];
    const expectedResult = ['0', '4', '0'];

    const result = timeCalculate(distance, pace);

    expect(result).toEqual(expectedResult);
  });
});
