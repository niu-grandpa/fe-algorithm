/*
 * 集合
 * 本质上是利用对象的键不可重复性，模拟一个数组
 * 1.创建一个Set类
 * 2.用Set来进行数学运算
 * 3.ES原生Set
 */

// 创建Set类
class ArraySet {
  items: Map<any, any>;
  constructor() {
    this.items = new Map();
  }
  add(val: any) {
    this.items.set(val, val);
    return true;
  }
  delete(val: any) {
    if (!this.items.has(val)) return;
    this.items.delete(val);
  }
  has(val: any) {
    return this.items.has(val);
  }
  size() {
    return this.items.size;
  }
  values() {
    return [...this.items.values()];
  }
  // 并集
  union<T>(set: Set<T>) {
    const res = new ArraySet();
    let current = this.values();
    for (let i = 0; i < current.length; i++) {
      res.add(current[i]);
    }
    current = [...set.values()];
    for (let j = 0; j < current.length; j++) {
      res.add(current[j]);
    }
    return res;
  }
  // 并集
  intersection<T>(set: Set<T>) {
    const res = new ArraySet();
    const current = this.values();
    for (let i = 0; i < current.length; i++) {
      if (set.has(current[i])) {
        res.add(current[i]);
      }
    }
    return res;
  }
  // 差集 （互相不重复的子元素）
  different<T>(set: Set<T>) {
    const res = new ArraySet();
    const current = this.values();
    for (let i = 0; i < current.length; i++) {
      if (!set.has(current[i])) {
        res.add(current[i]);
      }
    }
    return res;
  }
  // 子集（一个集合是否包含在另一个集合中）
  isSubsetOf<T>(parentSet: Set<T>) {
    if (this.size() > parentSet.size) return false;
    return this.values().every(item => parentSet.has(item));
  }
}
