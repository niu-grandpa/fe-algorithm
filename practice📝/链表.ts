/*
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
    this.length++;
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
    this.length++;
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
    if (index < 0 || index > this.size() - 1) return undefined;
    let cur = this.head;
    for (let i = 0; i < index && cur?.next; i++) {
      cur = cur.next;
    }
    return cur;
  }
  // 从链表特定位置移除一个元素
  removeAt(index: number) {
    if (index < 0 || index > this.size() - 1) return undefined;
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
    this.length--;
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

/*
 * 双链表
 * 6.循环链表
 * 7.排序链表
 * 8.通过链表实现栈
 */
class DbNode extends _Node {
  prev?: _Node;
  constructor(val: number, next?: _Node, prev?: _Node) {
    super(val, next);
    this.prev = prev;
  }
}
//双链表
class DbLinkedList extends LinkedList {
  head?: DbNode;
  tail?: DbNode;
  constructor() {
    super();
    this.tail = undefined;
  }
  insert(val: number, index: number) {
    if (index < 0 || index > this.size() - 1) return false;
    const node = new DbNode(val);
    let cur: DbNode | undefined;
    // 插入头部
    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        cur = this.head as DbNode;
        node.next = this.head;
        cur.prev = node;
        this.head = node;
      }
    } else if (index === this.size() - 1) {
      // 插入尾部
      cur = this.tail;
      cur!.next = node;
      node.prev = cur;
      this.tail = node;
    } else {
      // 插入任意位置
      // 获取目标节点的前一个节点和当前节点
      const prev = this.getNodeAt(index - 1);
      cur = prev!.next;
      // 新节点next指向当前节点，当前节点prev指向新节点
      node.next = cur;
      cur!.prev = node;
      // 前一个节点指向新节点
      prev!.next = node;
      // 新节点prev指向前一个节点
      node.prev = prev;
    }
    this.length++;
    return true;
  }
  removeAt(index: number) {
    if (index < 0 || index > this.size() - 1) return undefined;
    let cur: DbNode | undefined;
    if (index === 0) {
      cur = this.head;
      this.head = cur?.next;
      // 如果删除后只剩下一项，更新tail
      if (this.size() === 1) {
        this.tail = undefined;
      } else {
        this.head!.prev = undefined;
      }
    } else if (index === this.size() - 1) {
      cur = this.tail;
      this.tail = cur?.prev;
      this.tail!.next = undefined;
    } else {
      cur = this.getNodeAt(index);
      const prev = cur!.prev;
      prev!.next = cur?.next;
      (cur?.next as DbNode).prev = prev;
    }
  }
}

// 用链表实现栈
