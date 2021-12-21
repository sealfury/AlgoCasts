// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

/*
 * NB - insertAt, removeAt, and getAt
 * can do the same work as insertFirst, removeFirst, getFirst
 * by slightly adjusting the arguments the former receive.
 * Mentioning this is a pretty good look.
 */
class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    // this.insertAt(data, 0) -> simplification refactor
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    // can also do if check for !this.head
    // then init this variable
    let node = this.head

    if (!node) {
      return null
    }

    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }

    // return this.getAt(this.size() - 1) -> simplification refactor
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next

    while (node.next) {
      previous = node
      node = node.next
    }

    previous.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if (last) {
      // there are existing nodes in the chain
      last.next = new Node(data)
    } else {
      // the chain is empty
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0
    let node = this.head

    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }

    return null
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    // handle index out of bounds
    if (!previous || !previous.next) {
      return
    }
    // 'leapfrog' node in between two nodes
    previous.next = previous.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }
}

module.exports = { Node, LinkedList }
