function mergeSort(arr) {
  let mid = Number((arr.length / 2).toFixed(0));
  let leftEnd = mid;
  let rightStart = mid;
  if (arr.length == 1) {
    return arr;
  } else {
    let left = arr.slice(0, leftEnd);
    let right = arr.slice(rightStart, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(leftArr, rightArr) {
  let result = [],
    leftI = 0,
    rightI = 0;

  while (leftI < leftArr.length && rightI < rightArr.length) {
    if (leftArr[leftI] < rightArr[rightI]) {
      result.push(leftArr[leftI]);
      leftI++;
    } else {
      result.push(rightArr[rightI]);
      rightI++;
    }
  }
  return result.concat(leftArr.slice(leftI)).concat(rightArr.slice(rightI));
}
