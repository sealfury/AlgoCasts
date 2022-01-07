// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    // this.children.push(new Node(data))
    const node = new Node(data)
    this.children.push(node)
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  // Traverse by Breadth ('Breadth-first traversal')
  traverseBreadth(fn) {
    const arr = [this.root]

    while (arr.length) {
      const node = arr.shift()

      arr.push(...node.children)
      fn(node)
    }
  }

  // Traverse by Depth ('Depth-first traversal')
  traverseDepth(fn) {
    const arr = [this.root]

    while (arr.length) {
      const node = arr.shift()

      // reminder - unshift adds element to front of array
      arr.unshift(...node.children)
      fn(node)
    }
  }
}

module.exports = { Tree, Node }
