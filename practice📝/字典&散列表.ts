/*
 * 字典
 * 本章内容包括
 * 字典数据结构
 * 散列表数据结构
 * 处理散列表中的冲突
 */

// !字典 { key: { key:'xx', valeue:'xxx' } }
class Dictionary {
  table: Record<string, DictionaryNode>;
  set(key: any, val: any) {
    if (key === null && val === null) return;
    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new DictionaryNode(key, val);
  }
  get(key: any) {
    if (!this.has(key)) return;
    return this.table[this.toStrFn(key)];
  }
  has(key: any) {
    const tableKey = this.toStrFn(key);
    return this.table[tableKey] !== null;
  }
  remove(key: any) {
    if (!this.has(key)) return;
    delete this.table[this.toStrFn(key)];
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
  forEach(callbackfn: (value: DictionaryNode) => boolean | void) {
    this.keyValues().forEach(callbackfn);
  }
  toStrFn(val: any) {
    if (val === null) {
      return 'NULL';
    } else if (val === undefined) {
      return 'UNDEFINED';
    } else if (typeof val === 'string' || val instanceof String) {
      return val;
    }
    return val.toString();
  }
}

class DictionaryNode {
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

// !散列表
