import { RecursionService } from "./recursion";

// arguments

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

let obj2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

export default () => {
    console.log("---------------------Recursion----------------------\n");
    console.log("Collect Strings", RecursionService.collectStrings(obj2));
    console.log("Stringify Numbers", RecursionService.stringifyNumbers(obj1));
    console.log("Capitalize Words", RecursionService.capitalizeWords(['car', 'taco', 'banana']));
    console.log("Nested Even Sum", RecursionService.nestedEvenSum({ a: 2, b: { c: 4, d: 7, e: 6, f: { g: 3, h: { i: 8 } } } }));
    console.log("Capitalize First Letter", RecursionService.capitalizeFirstLetter(['car', 'taco', 'banana']));
    console.log("Flatten Array", RecursionService.flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
    console.log("Is Palindrome?", RecursionService.isPalindrome("tacocat"));
    console.log("Reverse String", RecursionService.reverseString("debanjan saha"));
    console.log("Fibonacci", RecursionService.fibonacci(35));
    console.log("Recursive Range", RecursionService.recursiveRange(10));
    console.log("Product of Array", RecursionService.productOfArray([1, 2, 3]));
    console.log("Factorial", RecursionService.factorial(5));
    console.log("Power", RecursionService.power(5, 4));
    console.log("---------------------Recursion Ends----------------------\n\n");
};