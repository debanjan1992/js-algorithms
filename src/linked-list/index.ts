import { DoublyLinkedList } from "./doubly-linked-list";
import { SinglyLinkedList } from "./singly-linked-list";

export default () => {
    console.log("----------------------LINKED LIST-----------------------");
    // let list = new SinglyLinkedList<number>();
    let list = new DoublyLinkedList<number>();
    list.push(1).push(2).push(3).push(4).push(5);
    list.print();
    // list.set(2, 100);
    list.insert(3, 100);
    list.print();
    list.remove(3);
    list.print();
    console.log("--------------------LINKED LIST END---------------------\n\n");
};