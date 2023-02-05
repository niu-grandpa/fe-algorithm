/*
 * 字典
 * 本章内容包括
 * 字典数据结构
 * 散列表数据结构
 * 处理散列表中的冲突 (分离链接和线性探查)
 */

import LinkedList from './链表';

// !字典 { key: { key:'xx', valeue:'xxx' } }
class Dictionary {
  table: Record<string, ValuePair>;
  set(key: any, val: any) {
    if (key === null && val === null) return;
    const tableKey = toStrFn(key);
    this.table[tableKey] = new ValuePair(key, val);
  }
  get(key: any) {
    if (!this.has(key)) return;
    return this.table[toStrFn(key)];
  }
  has(key: any) {
    const tableKey = toStrFn(key);
    return this.table[tableKey] !== null;
  }
  remove(key: any) {
    if (!this.has(key)) return;
    delete this.table[toStrFn(key)];
  }
  clear() {
    this.table = {};
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return !this.size();
  }
  keys() {
    return this.keyValues().map(({ key }) => key);
  }
  values() {
    return this.keyValues().map(({ val }) => val);
  }
  keyValues() {
    return Object.values(this.table);
  }
  forEach(callbackfn: (value: ValuePair) => boolean | void) {
    this.keyValues().forEach(callbackfn);
  }
}

class ValuePair {
  key: string;
  val: any;
  constructor(key: string, val: any) {
    this.key = key;
    this.val = val;
  }
  toString() {
    return `[#${this.key}: ${this.val}]`;
  }
}

// !散列表 { hashCode: LinkedList }
class HashTable {
  table: Record<number, LinkedList>;
  BASE_HASH: number;
  constructor() {
    this.BASE_HASH = 1013;
  }
  get(key: any) {
    const list = this.table[this.hashCode[key]];
    if (!list || list.isEmpty()) return;
    let cur = list.getHead();
    while (cur) {
      const res = cur.val as unknown as ValuePair;
      if (res.key === key) {
        return res.val;
      }
      cur = cur.next;
    }
    return undefined;
  }
  put(key: any, val: any) {
    if (key === null || val === null) return false;
    const position = this.hashCode(key);
    // 这个位置开辟一条链表存数据
    if (this.table[position] === null) {
      this.table[position] = new LinkedList();
    }
    this.table[position].add(new ValuePair(key, val));
    return true;
  }
  remove(key: any) {
    const position = this.hashCode(key);
    const list = this.table[position];
    if (!list || list.isEmpty()) return false;
    let cur = list.getHead();
    while (cur) {
      const res = cur.val as unknown as ValuePair;
      if (res.key === key) {
        list.remove(res);
        if (list.isEmpty()) delete this.table[position];
      }
      cur = cur.next;
    }
    return true;
  }
  hashCode(key: any) {
    return loseloseHashCode(key, this.BASE_HASH);
  }
}
// !散列集合
class HashSet {
  array: any[];
}

// 散列值生成函数
function loseloseHashCode(key: any, base = 1013) {
  if (typeof key === 'number') return key;
  const tableKey = toStrFn(key);
  let hash = 5381;
  // 取每个字符的ASCII码相加再模1013
  for (let i = 0; i < tableKey.length; i++) {
    hash = hash * 33 + tableKey[i].charCodeAt(i);
  }
  return hash % base;
}

function toStrFn(val: any) {
  if (val === null) {
    return 'NULL';
  } else if (val === undefined) {
    return 'UNDEFINED';
  } else if (typeof val === 'string' || val instanceof String) {
    return val;
  }
  return val.toString();
}
