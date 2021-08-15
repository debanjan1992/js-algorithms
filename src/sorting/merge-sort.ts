const merge2Arrays = (arr1: number[], arr2: number[]) => {
    let i = 0, j = 0;
    const results = [];
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i = i + 1;
        } else {
            results.push(arr2[j]);
            j = j + 1;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i = i + 1;
    }

    while(j < arr1.length) {
        results.push(arr2[j]);
        j = j + 1;
    }
    return results;
};

const mergeSort = (arr: number[]): number[] => {
    if (arr.length === 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge2Arrays(left, right);
};

export default mergeSort;