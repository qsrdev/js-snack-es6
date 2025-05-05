let arr = [37, 92, 15, 64, 8, 49, 73, 21, 90, 56];
let arrvuoto = [];

numberSort(arr, 5, 50);

function numberSort(array, min, max) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > min && array[i] < max) {
      console.log(array[i]);
      arrvuoto.push(array[i]);
    }
  }
  return arrvuoto;
}

console.log(arrvuoto);
