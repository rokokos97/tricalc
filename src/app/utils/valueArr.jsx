export function valueArr() {
  const valueArr = [];
  for (let i=0; i<60; i+=1) {
    valueArr.push({label: `${i}`, value: `${i}`});
  }
  return valueArr;
}
