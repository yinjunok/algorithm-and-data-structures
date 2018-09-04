function quickSort(arr, low, high) {
  if (low < high) {
    const mid = partition(arr, low, high);
    quickSort(arr, low, mid - 1);
    quickSort(arr, mid + 1, arr.length - 1);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[low];

  while (low < high) {
    while (low < high && pivot < arr[high]) high -= 1;
    arr[low] = arr[high];

    while (low < high && pivot > arr[low]) low += 1;
    arr[high] = arr[low];
  }

  arr[low] = pivot;
  return low;
}

const test = [9, 12, 3, 16, 0, 7, 22, 1, 77, 4];
console.log(quickSort(test, 0, test.length - 1));

