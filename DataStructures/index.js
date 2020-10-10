import SinglyLinkedList from "./singlyLinkedList.js";

let list = new SinglyLinkedList();
list.push("Hello");
list.push("David");
list.push("Ayres");
list.unshift("Testing");

while(list.head) {
    console.log(list.pop());
}