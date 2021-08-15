import { SinglyLinkedList } from "./singly-linked-list";

export default () => {
    console.log("----------------------LINKED LIST-----------------------");
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3).push(4).push(5);
    list.print();
    // list.pop();
    // list.shift();
    // list.unshift(99);
    // list.print();
    // console.log(list.get(0));
    // console.log(list.get(1));
    // console.log(list.get(2));
    // console.log(list.get(3));
    // list.set(3, 100);
    list.insert(5, 100);
    list.print();
    list.remove(3);
    list.print();
    list.reverse();
    list.print();
    console.log("--------------------LINKED LIST END---------------------\n\n");
};