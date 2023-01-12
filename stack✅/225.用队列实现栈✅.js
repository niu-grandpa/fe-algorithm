/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    constructor() {
        this.queue = [];
    }

    push(x) {
        const n = this.queue.length;
        this.queue.push(x);
        // 末尾元素出栈再进栈，骚操作？？
        for (let i = 0; i < n; i++) {
            this.queue.push(this.queue.pop());
        }
    }

    pop() {
        return this.queue.pop();
    }

    peek() {
        return this.queue[this.queue.length - 1];
    }

    empty() {
        return !this.queue.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end