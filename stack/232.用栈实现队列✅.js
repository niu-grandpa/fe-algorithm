/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
// push   pop()

// push shift
class MyQueue {
    constructor() {
        this.stack = [];
        this.outStack = [];
    }

    push(x) {
        this.stack.push(x);
    }

    pop() {
        if (this.outStack.length) {
            return this.outStack.pop();
        }
        while (this.stack.length) {
            this.outStack.push(this.stack.pop());
        }
        return this.outStack.pop();
    }

    peek() {
        const x = this.pop();
        this.outStack.push(x);
        return x;
    }

    empty() {
        return !this.stack.length && !this.outStack.length;
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