import { timingSafeEqual } from "crypto";

class Node<T> {
    val: any;
    next: Node<T>;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList<T> {
    head: Node<T>;
    tail: Node<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length = this.length - 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const current = this.head;
        this.head = this.head.next;
        this.length = this.length - 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val: T) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    print() {
        if (this.length === 0) {
            console.log("The list is empty");
            return;
        }
        let start = this.head;
        const array = [];
        while (start) {
            array.push(start.val);
            start = start.next;
        }
        console.log(array.join(" -> "));
    }

    get(index: number) {
        if (index >= this.length || index < 0) {
            return;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter = counter + 1;
        }
        return current;
    }

    set(index: number, val: T) {
        const node = this.get(index);
        if (!node) {
            return false;
        }
        node.val = val;
        return true;
    }

    insert(index: number, val: T) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            return !!this.unshift(val);
        } else if (index === this.length) {
            return !!this.push(val);
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(index - 1);
            if (prevNode) {
                newNode.next = prevNode.next;
                prevNode.next = newNode;
            }
            this.length = this.length + 1;
            return true;
        }
        return false;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let prevNode = this.get(index - 1);
            let removed = prevNode.next;
            prevNode.next = removed.next;
            this.length = this.length - 1;
            return removed;
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}