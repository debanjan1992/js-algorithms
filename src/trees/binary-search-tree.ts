class Node<T> {
    value: T;
    left: Node<T>;
    right: Node<T>;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: Node<number>;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return;
                }
            }
        }
    }

    find(value: number) {
        if (!this.root) {
            return false;
        } else {
            let current = this.root;
            let found = false;
            while (current && !found) {
                if (value < current.value) {
                    current = current.left;
                } else if (value > current.value) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            return found;
        }
    }

    print() {
        console.log(JSON.stringify(this, null, 4));
    }

    bfs() {
        if (!this.root) {
            return [];
        }
        let node = this.root;
        const data = [];
        const queue = [];
        queue.push(node);
        while (queue.length !== 0) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    dfsPreOrder() {
        const data: number[] = [];
        function traverse(node: Node<number>) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }

    dfsPostOrder() {
        const data: number[] = [];
        function traverse(node: Node<number>) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    dfsInOrder() {
        const data: number[] = [];
        function traverse(node: Node<number>) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }
}