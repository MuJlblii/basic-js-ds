const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let node = l;
  // console.debug('\n---------->>>> start function with node\n',node);
  // console.debug('________________________________________________________________')
  let index = 0;
  let prevNode = null;
  while (node) {
    // console.debug('             node.', index,'-->',node);
    if (node.value === k) {
      if (index!=0) {
        prevNode.next = node.next;
        return removeKFromList(l,k);
      } else if (index === 0) {
        return removeKFromList(node.next,k);
      }
    }
    prevNode = node;
    node = node.next;
    index++;
  }
  return l;
}

module.exports = {
  removeKFromList
};
