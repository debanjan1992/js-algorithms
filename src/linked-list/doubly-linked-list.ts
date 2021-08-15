class Node<T> {
    val: T;
    next: Node<T>;
    prev: Node<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList<T> {
    head: Node<T>;
    tail: Node<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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
        console.log(array.join(" <--> "));
    }

    push(value: T) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        const removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
        }
        this.length = this.length - 1;
        return removed;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const removedEl = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedEl.next;
            this.head.prev = null;
            removedEl.next = null;
        }
        this.length = this.length - 1;
        return removedEl;
    }

    unshift(val: T) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let counter, current;
        if (index >= this.length / 2) {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter = counter - 1;
            }
        } else {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter = counter + 1;
            }
        }
        return current;
    }

    set(index: number, val: T) {
        const foundNode = this.get(index);
        if (foundNode && foundNode instanceof Node) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index: number, val: T) {
        if (index < 0 || index >= this.length) {
            return false;
        } else if (index === 0) {
            return !!this.unshift(val);
        } else if (index === this.length) {
            return !!this.push(val);
        } else {
            const newNode = new Node(val);
            let beforeNode = this.get(index-1);
            let afterNode = beforeNode.next;
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            newNode.next = afterNode;
            afterNode.prev = newNode;
            this.length = this.length + 1;
            return true;
        }
        return false;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            const removedNode = this.get(index);
            let beforeNode = removedNode.prev;
            let afterNode = removedNode.next;
            beforeNode.next = afterNode;
            afterNode.prev = beforeNode;
            removedNode.next = null;
            removedNode.prev = null;
            this.length = this.length - 1;
            return removedNode;
        }
    }
}