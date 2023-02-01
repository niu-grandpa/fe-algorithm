/**
 * 单链表
 * 本章内容包括：
 * 1.链表数据结构
 * 2.向链表添加元素
 * 3.从链表移除元素
 * 4.使用 LinkedList 类
 */
class LinkedList {
  length: number;
  head?: _Node;
  constructor() {
    this.length = 0;
    this.head = undefined;
  }
  equals(a: _Node, b: _Node) {
    return a === b;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return !this.length;
  }
  add(val: number) {
    const node = new _Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
  }
  // 移除元素
  remove(node: _Node) {
    const index = this.indexOf(node);
    if (index === -1) return;
    this.removeAt(index);
  }
  insert(val: number, index: number) {
    const node = new _Node(val);
    if (index === 0) {
      let cur = this.head;
      node.next = cur;
      this.head = node;
    } else {
      const prev = this.getNodeAt(index - 1);
      const cur = prev?.next;
      node.next = cur;
      prev!.next = node;
    }
  }
  // 返回元素在链表中的索引
  indexOf(node: _Node) {
    let cur = this.head;
    for (let i = 0; i < this.size() && cur?.next; i++) {
      if (this.equals(node, cur)) return i;
      cur = cur.next;
    }
    return -1;
  }
  // 返回链表中特定位置的元素
  getNodeAt(index: number) {
    if (index < 0 || index > this.size()) return undefined;
    let cur = this.head;
    for (let i = 0; i < index && cur?.next; i++) {
      cur = cur.next;
    }
    return cur;
  }
  // 从链表特定位置移除一个元素
  removeAt(index: number) {
    if (index < 0 || index > this.size()) return undefined;
    let cur = this.head;
    if (index === 0) {
      this.head = cur?.next;
    } else {
      let prev: _Node | undefined;
      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur?.next;
      }
      prev!.next = cur?.next;
    }
  }
  toString() {
    let res = '',
      cur = this.head;
    for (let i = 0; i < this.size() && cur?.next; i++) {
      res += cur.val + '->';
      cur = cur.next;
    }
    return res;
  }
}
class _Node {
  val: number;
  next?: _Node;
  constructor(val: number, next?: _Node) {
    this.val = !val ? 0 : val;
    this.next = !next ? undefined : next;
  }
}
const list = new LinkedList();

/**
 * 双链表
 * 6.循环链表
 * 7.排序链表
 * 8.通过链表实现栈
 */
