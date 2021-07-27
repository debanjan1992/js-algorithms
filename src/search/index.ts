import binarySearch from "./binary-search";
import naiveStringSearch from "./naive-string-search";

export default () => {
    console.log("---------------------Search----------------------\n");
    console.log(naiveStringSearch("lorie loled", "lol"));
    console.log(binarySearch([10, 22, 26, 34, 46, 48, 52, 55, 57], 55));
    console.log("---------------------Search Ends----------------------\n\n");
};