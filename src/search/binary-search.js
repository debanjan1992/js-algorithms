const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (num < arr[middle]) {
            right = middle - 1;
        } else if (num > arr[middle]) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
};

export default binarySearch;