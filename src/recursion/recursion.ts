export class RecursionService {
    static power(base: number, exp: number): number {
        if (exp === 0) {
            return 1;
        }
        if (exp === 1) {
            return base;
        }
        return base * this.power(base, exp - 1);
    }

    static factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }

    static productOfArray(arr: number[]): number {
        if (arr.length === 0) {
            return 1;
        }
        return arr[0] * this.productOfArray(arr.slice(1));
    }

    static recursiveRange(n: number): number { // sum of first n numbers
        if (n === 0) {
            return 0;
        }
        return n + this.recursiveRange(n - 1);
    }

    static fibonacci(n: number): number {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return this.fibonacci(n - 2) + this.fibonacci(n - 1);
    }

    static reverseString(str: string): string {
        if (str.length === 0) {
            return "";
        }
        return this.reverseString(str.substring(1)) + str[0];
    }

    static isPalindrome(str: string): boolean {
        if (str.length === 1) {
            return true;
        }
        if (str.length === 2) {
            return str[0] === str[1];
        }
        if (str[0] === str.slice(-1)) {
            return this.isPalindrome(str.substring(1, str.length - 1));
        } else {
            return false;
        }
    }

    static flattenArray(arr: any[]): any {
        if (arr.length === 0) {
            return [];
        }
        if (Array.isArray(arr[0])) {
            return [].concat(this.flattenArray(arr[0]))
                .concat(this.flattenArray(arr.splice(1)));
        } else {
            return [arr[0]].concat(this.flattenArray(arr.splice(1)));
        }
    }

    static flattenArrayV2(arr: any[]): any[] {
        var newArr: any[] = []
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newArr = newArr.concat(this.flattenArrayV2(arr[i]))
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr;
    }

    static capitalizeFirstLetter(arr: string[]): string[] {
        if (arr.length === 0) {
            return [];
        }
        const str = arr[0];
        const capitalized = str[0].toLocaleUpperCase() + str.substring(1);
        return [capitalized].concat(this.capitalizeFirstLetter(arr.splice(1)));
    }

    static capitalizeWords(arr: string[]): string[] {
        if (arr.length === 0) {
            return [];
        }
        return [arr[0].toLocaleUpperCase()].concat(this.capitalizeWords(arr.splice(1)));
    }

    static nestedEvenSum(obj: any) {
        let sum = 0;
        for (let prop in obj) {
            if (obj[prop] === null || obj[prop] === undefined) {
                continue;
            } else if (typeof obj[prop] === "object") {
                sum = sum + this.nestedEvenSum(obj[prop]);
            } else if (typeof obj[prop] === "number" && obj[prop] % 2 === 0) {
                sum = sum + obj[prop];
            }
        }
        return sum;
    }

    /*
     Write a function called stringifyNumbers which takes in an object
     and finds all of the values which are numbers and converts them 
     to strings.
    */

    static stringifyNumbers(obj: any) {
        const newObj: any = {};
        for (let prop in obj) {
            if (obj[prop] === null || obj[prop] === undefined) {
                continue;
            } else if (!Array.isArray(obj[prop]) && typeof obj[prop] === "object") {
                newObj[prop] = this.stringifyNumbers(obj[prop]);
            } else if (typeof obj[prop] === "number") {
                newObj[prop] = obj[prop].toString();
            } else {
                newObj[prop] = obj[prop];
            }
        }
        return newObj;
    }

    static collectStrings(obj: any) {
        let strArr: string[] = [];
        for (let prop in obj) {
            if (typeof obj[prop] === "string") {
                strArr.push(obj[prop]);
            } else if (typeof obj[prop] === "object") {
                strArr = strArr.concat(this.collectStrings(obj[prop]));
            }
        }
        return strArr;
    }
}