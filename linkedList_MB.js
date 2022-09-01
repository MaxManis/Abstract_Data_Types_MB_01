// Max Manis (Bovtun) Node and Linked_List Class:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.last = null;
  }

  append(value) {
    const nodeAppend = new Node(value);

    if (this.head.value === undefined) {
      this.head = nodeAppend;
      this.last = nodeAppend;

      return;
    }

    this.last.next = nodeAppend;
    this.last = this.last.next;

    // -- Way without the "this.last" property in constructor
    // --    to iterate to the last obj in LinkedList from the head:
    //
    // let lastNode = this.head;
    // while (lastNode.next !== null) {
    //   lastNode = lastNode.next;
    // }
    //
    // lastNode.next = nodeAppend;
  }

  prepend(value) {
    const nodePrepend = new Node(value);

    if (this.head.value === undefined) {
      this.head.value = nodePrepend.value;

      return;
    }

    nodePrepend.next = this.head;
    this.head = nodePrepend;
  }

  size() {
    let counter = this.head;
    let total = 0;

    if (this.head.value !== undefined) {
      total = 1;
    }

    while (counter.next !== null) {
      total++;
      counter = counter.next;
    }

    return total;
  }

  getLast() {
    // let last = this.head;

    if (this.head.value === undefined) {
      return null;
    }

    // -- Way without the "this.last" property in constructor
    // --    to iterate to the last obj in LinkedList from the head:
    //
    // while (last.next !== null) {
    //   last = last.next;
    // }

    return this.last.value;
  }

  getFirst() {
    if (!this.head.value) {
      return null;
    }

    return this.head.value;
  }

  clear() {
    this.head.value = undefined;
    this.head.next = null;
  }

  delete(value) {
    let previously = this.head;
    let position = previously.next;

    while (position.value !== value) {
      if (position.value === value) {
        break;
      }
      previously = previously.next;
      position = previously.next;
    }

    previously.next = position.next;
  }

  deleteByPosition(position) {
    if (position === 0) {
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head.value = undefined;
        this.head.next = null;
      }

      return;
    }

    let prev = this.head;

    for (let c = 0; prev !== null || c < position; c++) {
      prev = prev.next;
    }

    if (!prev && !prev.next) {
      prev.value = prev.next.value;
      prev.next = prev.next.next;
    }
  }

  serialize() {
    const serial = [];

    let start = this.head;

    if (this.head.value !== undefined) {
      serial.push(start.value);
    }

    while (start.next !== null) {
      start = start.next;
      serial.push(start.value);
    }

    return serial;
  }
}

export {Node, LinkedList}
