// Max Manis (Bovtun) Stack Class:
import {LinkedList} from "./linkedList_MB.js";

class Stack {
  constructor() {
    this.data = new LinkedList();
  }

  push(value) {
    this.data.prepend(value);
  }

  size() {
    return this.data.size();
  }

  peek() {
    if (this.data.head.value) {
      return this.data.head.value;
    } else {
      return null;
    }
  }

  pop() {
    if (this.data.head.value) {
      const value = this.data.head.value;

      this.data.deleteByPosition(0);

      return value;
    } else if (!this.data.head.value) {
      return null;
    }
  }

  clear() {
    this.data.head = null;
  }

  serialize() {
    return this.data.serialize();
  }
}

export {Stack};
