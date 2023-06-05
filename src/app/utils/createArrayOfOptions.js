export function createArrayOfOptions(label='', step=1, start=0, end=60) {
  const valueArr = [];
  for (let i=start; i<end*step; i+=step) {
    valueArr.push({label: `${i}${label}`, value: `${i}`});
  }
  return valueArr;
}
