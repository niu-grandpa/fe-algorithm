/**
 * 最小堆
 * 子节点总是大于等于父节点
 */
export class MinHeap {
  head: number[];
  getLeftIndex(index: number) {
    return 2 * index + 1;
  }
  getRightIndex(index: number) {
    return this.getLeftIndex(index) + 1;
  }
  getParentIndex(index: number) {
    return ~~((index - 1) / 2);
  }
  insert(value: number) {
    if (value !== undefined) {
      this.head.push(value);
      return true;
    }
    return false;
  }
  /** 将插入值和它的父节点进行交换，直到父节点小于这个插入的值*/
  upHead(index: number) {
    let parent = this.getParentIndex(index);
    while (index && this.head[parent] > this.head[index]) {
      swap(this.head, parent, index);
      parent = this.getParentIndex(index);
    }
  }
  size() {
    return this.head.length;
  }
  isEmpty() {
    return this.head.length === 0;
  }
  findMinimun() {
    return this.isEmpty() ? undefined : this.head[0];
  }
  extract() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.head.shift();
    const value = this.head.shift();
    this.sinkDown(0);
    return value;
  }
  sinkDown(index: number) {
    // todo
  }
}

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
