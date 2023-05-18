export function valueArr(a, d=1) {
  const valueArr = [];
  for (let i=0; i<60*a*d; i+=a) {
    valueArr.push({label: `${i}`, value: `${i}`});
  }
  return valueArr;
}
