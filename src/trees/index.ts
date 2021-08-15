import { BinarySearchTree } from "./binary-search-tree";

export default () => {
    console.log("-----------------TREES-----------------\n");
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(25);
    tree.insert(20);
    tree.insert(1);
    tree.insert(2);
    tree.insert(7);
    // console.log(tree.find(1));
    tree.print();
    console.log(tree.bfs());
    console.log(tree.dfsPreOrder());
    console.log(tree.dfsInOrder());
    console.log("-----------------END OF TREES-----------------\n\n");
};