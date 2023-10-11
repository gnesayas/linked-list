(function () {
  class LinkedList {
    constructor() {
      this._size = 0;
      this._head = null;
      this._tail = null;
    }

    append(value) {
      const newNode = new Node();
      newNode.value = value;
      if (this._tail) {
        this._tail.nextNode = newNode;
      }
      if (!this._head) {
        this._head = newNode;
      }
      this._tail = newNode;
      this._size++;
    }

    prepend(value) {
      const newNode = new Node();
      newNode.value = value;
      if (this._head) {
        newNode.nextNode = this._head;
      }
      if (!this._tail) {
        this._tail = newNode;
      }
      this._head = newNode;
      this._size++;
    }

    size() {
      return this._size;
    }

    head() {
      return this._head;
    }

    tail() {
      return this._tail;
    }

    at(index) {
      if (index >= this._size || index < -this._size) {
        console.log("Error: Index out of bounds");
        return null;
      }
      let node = this._head;
      let i = index >= 0 ? index : index + this._size;
      while (i !== 0) {
        node = node.nextNode;
        i--;
      }
      return node;
    }

    pop() {
      if (this._size === 0) {
        console.log("Error: Cannot pop from an empty list");
        return;
      }
      if (this._size === 1) {
        this._head = null;
        this._tail = null;
        this._size = 0;
        return;
      }
      let node = this._head;
      while (node.nextNode !== this._tail) {
        node = node.nextNode;
      }
      node.nextNode = null;
      this._tail = node;
      this._size--;
    }

    contains(value) {
      let node = this._head;
      while (node) {
        if (node.value === value) {
          return true;
        }
        node = node.nextNode;
      }
      return false;
    }

    find(value) {
      let node = this._head;
      let i = 0;
      while (node) {
        if (node.value === value) {
          return i;
        }
        node = node.nextNode;
        i++;
      }
      return null;
    }

    toString() {
      let result = "";
      let node = this._head;
      while (node) {
        result += `( ${node.value} ) -> `;
        node = node.nextNode;
      }
      return result + "null";
    }

    insertAt(value, index) {
      if (index >= this._size + 1 || index < -this._size - 1) {
        console.log("Error: Index to insert at is out of bounds");
        return;
      }
      const newNode = new Node();
      newNode.value = value;
      let node = this._head;
      let i = index >= 0 ? index : index + this._size + 1;
      if (i <= 0) {
        newNode.nextNode = node;
        this._head = newNode;
      } else {
        if (i === this._size) {
          this._tail = newNode;
        }
        while (i !== 1) {
          node = node.nextNode;
          i--;
        }
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
      }
      this._size++;
    }

    removeAt(index) {
      if (index >= this._size || index < -this._size) {
        console.log("Error: Index to remove from is out of bounds");
        return null;
      }
      let node = this._head;
      let i = index >= 0 ? index : index + this._size;
      if (i === 0) {
        this._head = this._head.nextNode;
        if (!this._head) {
          this._tail = null;
        }
      } else {
        while (i !== 1) {
          node = node.nextNode;
          i--;
        }
        node.nextNode = node.nextNode.nextNode;
        if (!node.nextNode) {
          this._tail = node;
        }
      }
      this._size--;
    }
  }

  class Node {
    constructor() {
      this.value = null;
      this.nextNode = null;
    }
  }
})();
