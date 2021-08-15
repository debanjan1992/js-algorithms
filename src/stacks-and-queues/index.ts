import { Queue } from "./queue";
import { Stack } from "./stack";

export default () => {
    console.log("-------------STACKS AND QUEUES-------------\n");
    const stack = new Stack();
    stack.push("Hello");
    stack.push("How");
    stack.push("are");
    stack.push("you");
    stack.print();
    stack.pop();
    stack.print();
    const queue = new Queue();
    queue.enqueue("Hello");
    queue.enqueue("How");
    queue.enqueue("Are");
    queue.enqueue("You");
    queue.print();
    queue.dequeue();
    queue.print();
    console.log("-------------END OF STACKS AND QUEUES-------------\n\n");
};