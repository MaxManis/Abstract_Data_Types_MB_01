// Max Manis (Bovtun) Queue Class:
import {LinkedList} from "./linkedList_MB.js";

class Queue {
  constructor() {
    this.data = new LinkedList();
  }

  enqueue(value) {
    this.data.append(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const first = this.peek();

    this.data.deleteByPosition(0);

    return first;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.head.value;
  }

  isEmpty() {
    return this.data.head.value === undefined;
  }

  size() {
    return this.data.size();
  }

  serialize() {
    return this.data.serialize();
  }

  clear() {
    this.data.clear();
  }
}

export {Queue};
