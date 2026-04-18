class Node {
  node = null;
  nextNode = null;
  constructor(node, nextnode) {
    this.node = node;
    this.nextNode = nextnode;
  }
}
class LinkedList {
  list = [];
  constructor(list) {
    this.list = list;
  }
  append(value) {
    let node = new Node(value, null);
    this.list.push(node);
    this.tail().nextNode = value;
  }
  prepend(value) {
    let node = new Node(value, this.list.head);
    this.list.unshift(node);
  }
  size() {
    return this.list.length;
  }
  head() {
    return this.list[0].node;
  }
  tail() {
    return this.list.at(this.list.length - 1);
  }
  at(index) {
    return this.list.at(index).node;
  }
  pop() {
    return this.list.shift();
  }
  contains(value) {
    for (elt of this.list) {
      if (elt.node == value) return true;
    }
    return false;
  }
  findIndex(value) {
    for (let elt of this.list) {
      if (elt.node == value) return value;
    }
  }
  toString() {
    let representation = "";
    if (this.list.length == 0) return "";
    else {
      for (let elt of this.list) {
        representation += "( " + elt.node + " ) -> ";
      }
      representation += " null";
      return representation;
    }
  }
}
const list = new LinkedList([]);

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
