export default (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let pos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[pos]) {
                pos = j;
            }
        }
        if (i !== pos) {
            [arr[i], arr[pos]] = [arr[pos], arr[i]];
        }
    }
    return arr;
};