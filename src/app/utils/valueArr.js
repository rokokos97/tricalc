export function valueArr(a, label='', d=1) {
  const valueArr = [];
  for (let i=0; i<60*a*d; i+=a) {
    valueArr.push({label: `${i}${label}`, value: `${i}`});
  }
  return valueArr;
}
