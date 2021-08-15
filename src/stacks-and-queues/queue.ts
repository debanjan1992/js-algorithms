class Node<T> {
    value: T;
    next: Node<T>;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class Queue<T> {
    first: Node<T>;
    last: Node<T>;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: T) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size = this.size + 1;
        return this.size;
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        const removed = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size = this.size - 1;
        return removed.value;
    }

    print() {
        if (this.size === 0) {
            console.log("The queue is empty");
            return;
        }
        const arr = [];
        let current = this.first;
        while (current) {
            arr.push(current.value)
            current = current.next;
        }
        console.log("Queue", arr);
    }
}