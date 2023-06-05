import {calculateTriRaceTime} from './calculateTriRaceTime';

describe('calculateTriRaceTime', ()=>{
  it('should all argument set correctly', ()=>{
    const distance = 'olympic';
    const swimPace = ['1', '20'];
    const t1 = ['1', '0'];
    const bikeSpeed = ['35'];
    const t2 = ['1', '0'];
    const runPace = ['4', '10'];
    const expectedResult = ['2', '12', '14'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });

  it('should omit first argument', ()=>{
    const distance = undefined;
    const swimPace = ['1', '20'];
    const t1 = ['1', '0'];
    const bikeSpeed = ['35'];
    const t2 = ['1', '0'];
    const runPace = ['4', '10'];
    const expectedResult = ['1', '7', '7'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });

  it('should omit second argument', ()=>{
    const distance = 'sprint';
    const swimPace = undefined;
    const t1 = ['1', '0'];
    const bikeSpeed = ['35'];
    const t2 = ['1', '0'];
    const runPace = ['4', '10'];
    const expectedResult = ['0', '57', '7'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });

  it('should omit third argument', ()=>{
    const distance = 'sprint';
    const swimPace = ['1', '20'];
    const t1 = undefined;
    const bikeSpeed = ['35'];
    const t2 = ['1', '0'];
    const runPace = ['4', '10'];
    const expectedResult = ['1', '6', '7'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });

  it('should omit fourth argument', ()=>{
    const distance = 'sprint';
    const swimPace = ['1', '20'];
    const t1 = ['1', '0'];
    const bikeSpeed = undefined;
    const t2 = ['1', '0'];
    const runPace = ['4', '10'];
    const expectedResult = ['20', '32', '50'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });

  it('should omit fifth argument', ()=>{
    const distance = 'sprint';
    const swimPace = ['1', '20'];
    const t1 = ['1', '0'];
    const bikeSpeed = ['35'];
    const t2 = undefined;
    const runPace = ['4', '10'];
    const expectedResult = ['1', '6', '7'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });

  it('should omit sixth argument', ()=>{
    const distance = 'sprint';
    const swimPace = ['1', '20'];
    const t1 = ['1', '0'];
    const bikeSpeed = ['35'];
    const t2 = ['1', '0'];
    const runPace = undefined;
    const expectedResult = ['0', '46', '17'];

    const result = calculateTriRaceTime(
        distance,
        swimPace,
        t1,
        bikeSpeed,
        t2,
        runPace,
    );

    expect(result).toEqual(expectedResult);
  });
});
