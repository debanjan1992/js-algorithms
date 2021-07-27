export const bubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

// this bubble sort doesnt continue sorting if the array is almost sorted
export const enhancedBubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let hasSwapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                hasSwapped = true;
            }
        }
        if (!hasSwapped) {
            break;
        }
    }
    return arr;
};