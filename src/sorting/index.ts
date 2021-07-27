import { bubbleSort, enhancedBubbleSort } from "./bubble-sort";
import selectionSort from "./selection-sort";
import insertionSort from "./insertion-sort";

const arr = [2, 1, 9, 76, 4];
export default () => {
    console.log("----------------------SORTING-----------------------");
    console.log("Bubble Sort", bubbleSort(arr));
    console.log("Enhanced Bubble Sort", enhancedBubbleSort(arr));
    console.log("Selection Sort", selectionSort(arr));
    console.log("Insertion Sort", insertionSort(arr));
    console.log("--------------------SORTING END---------------------\n\n");
};