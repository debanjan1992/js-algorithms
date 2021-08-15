import { bubbleSort, enhancedBubbleSort } from "./bubble-sort";
import selectionSort from "./selection-sort";
import insertionSort from "./insertion-sort";
import mergeSort from "./merge-sort";

const arr = [2, 1, 9, 76, 4];
const randomArray = Array.from({length: 10000}, () => Math.floor(Math.random() * 100000));
export default () => {
    console.log("----------------------SORTING-----------------------");
    console.log("Merge Sort", mergeSort(randomArray));
    console.log("JS Sort", randomArray.sort());
    console.log("Bubble Sort", bubbleSort(randomArray));
    console.log("Enhanced Bubble Sort", enhancedBubbleSort(randomArray));
    console.log("Selection Sort", selectionSort(randomArray));
    console.log("Insertion Sort", insertionSort(randomArray));
    console.log("--------------------SORTING END---------------------\n\n");
};