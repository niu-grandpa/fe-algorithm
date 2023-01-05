# 前端啃算法

## 1 前端算法入门

通过简单的算法题，初步掌握算法和数据结构的门槛，并且在前端的框架源码中用到的算法和数据结构进行分析，进一步巩固算法思想

前端工程师说到的算法，不涉及到太多数学和推导，主要是工程实现，是一种高级的`脑筋急转弯`，记住套路就可以，就像中学的应用题，有了数列or三角函数公式，去套公式解题

## 目录

```tree

├── array           数组
├── linklist        链表
├── stack           栈
├── tree            树

├── sort            排序
├── binary          二分
├── recursion       递归+回溯
├── dynamic         动态规划
├── greedy          贪心算法
├── interview       大厂面试相关算法 （面试真题）
│   ├── bit.js      位运算
│   ├── heap.js     二叉堆
│   ├── leftpad.js  leftpad
│   ├── limit.js    并发量控制
    └── ...学员面试中遇见的算法题
```

* 前端框架中用到的算法
  * Vue3的Dom diff
    * 300.最长递增子序列
  * Vue3的静态标记  && React中的类型判断
    * [位运算](./interview/bit.js)
  * React 任务调度
    * 二叉堆
  * React Fiber
    * 树 --> 链表的遍历
  * Vue的keep alive组件
    * 146.lru-缓存
  * 虚拟Dom diff
    * 树形结构的遍历  
    * 编辑距离  ‘
  * event-loop 队列
  * ...    

* 解题套路总结
  * 面试技巧 《怎样解题》
  * 1. 确定面试官的限制条件
    * 不让你用额外空间 空间复杂度O1
    * 时间复杂度O1 （哈希表，对象 map)
    * 限制某个函数
  * 先暴力解
    * 缓存，剪枝
    * 动态  or 贪心的思路
    * 预处理，空间换时间  三数之和的预排序
  * 猜题型，猜解法
  * 公式，公式，公式


## 大厂面试题中的算法和设计套路
* 字节面试题：
  * 异步任务并发数控制   limit
  * 1472.设计浏览器历史记录.js
  * [二叉树底层的最左元素](https://leetcode.cn/problems/LwUNpT/)
* 滴滴面试题
  * 1797.设计一个验证系统.js
* 阿里面试题
  * 933.最近的请求次数.js 
* 百度面试题
  * 23.合并k个升序链表.js
* 腾讯面试题
  * 148.排序链表
  * 341.扁平化嵌套列表迭代器  数组扁平化
* 网易面试题：洗牌算法
  * 384.打乱数组
* 美团面试题
  * 380.o-1-时间插入、删除和获取随机元素
* 小厂面试题
  * 2.两数相加
  * 217.存在重复元素.js
* 未完待续....
* 如何确定文件的依赖关系  webpack vite和图
* React任务调度和优先级队列
* 区块链和链表
* 浏览器的eventloop和任务队列
## 数据结构

#### 数组

* 1. 两数之和
* 26.删除有序数组中的重复项
* 27.移除元素
* 283.移动零
* 977.有序数组的平方
* 209.长度最小的子数组
* 344.反转字符串 （数组）
* 167.两数之和-ii-输入有序数组
* 125.验证回文串
* 349.两个数组的交集

#### 链表

* 141.环形链表
* 203.移除链表元素
* 206.反转链表
* 146.lru-缓存
* 19.删除链表的倒数第 N 个结点
* 21.合并两个有序链表
* 876.链表的中间结点
* 234.回文链表
* 160.相交链表
* 142.环形链表 II
* 92.反转链表-ii
#### 位运算

* 136.只出现一次的数字


#### 树结构 最需要学习和刷的数据结构

* 104.二叉树的最大深度
* 226.翻转二叉树
* 94.中序遍历
* 144.前序
* 145.后序
* 100.相同的树
* 101.对称二叉树
* 111.二叉树的最小深度
* 114.二叉树展开为链表
* 617.合并二叉树
* 236.二叉树的最近公共祖先
* 543.二叉树的直径
* 572.另一棵树的子树
* 110.平衡二叉树
* 222.完全二叉树的节点个数
* 257.二叉树的所有路径
* 每层对比
  * 102.二叉树的层序遍历
  * 107.二叉树的层序遍历 II
  * 199.二叉树的右视图.js
  * 637.二叉树的层平均值
  * 116.填充每个节点的下一个右侧节点指针
  * 117.填充每个节点的下一个右侧节点指针-ii
  * 429.n-叉树的层序遍历
  * 515.在每个树行中找最大值
  * 112.路径总和
  * 404.左叶子之和
* 98.验证二叉搜索树
* 99.恢复二叉搜索树
* 108.将有序数组转换为二叉搜索树
* 109.有序链表转换二叉搜索树
* 654.最大二叉树
* 230.二叉搜索树中第k小的元素
* 700.二叉搜索树中的搜索
* 701.二叉搜索树中的插入操作

#### 栈

* 20.有效的括号
* 71.简化路径
* 225.用队列实现栈
* 232.用栈实现队列
* 1047.删除字符串中的所有相邻重复项
* 150.逆波兰表达式求值
* 151.点到字符串中的单词


## 算法思想

#### 排序
* 912.排序数组
* 15.三数之和

#### 二分思想

* 快排
* 704.二分查找
* 35.搜索插入位置 // vue3里面的diff  贪心+二分
* 153.寻找旋转排序数组中的最小值
* 69.x 的平方根 
  
#### 回溯和搜索

* 46.全排列
* 79.单词搜索
* 17.电话号码的字母组合
* 39.组合总和
* 51.n-皇后
* 37.解数独
* 77.组合
* 78.子集
* 131.分割回文串
* 93.复原-ip-地址
* 47.全排列-ii

#### 贪心算法（没有什么公式）

* 55.跳跃游戏
* 45.跳跃游戏-ii
* 300.最长递增子序列
* 455.分发饼干
* 860.柠檬水找零
* 452.用最少数量的箭引爆气球
* 435.无重叠区间
* 621.任务调度器
* 649.dota-2-参议院

#### 动态规划（面试常客）最重要的

* 509.斐波那契数
* 70.爬楼梯
* 746.使用最小花费爬楼梯
* 62.不同路径
* 63.不同路径-ii
  * 分硬币 
  * 硬币不限 , 硬币的种类是变量, 硬币的数量有限制, 额度差
* 322.零钱兑换 done
  * 背包  01 完全
  * 打家劫舍 有没有环
* 198.打家劫舍
* 213.打家劫舍-ii
* 337.打家劫舍-iii
  * 股票  只能卖卖一次，两次，多次，冷冻起，手续费
* 121.买卖股票的最佳时机
* 122.买卖股票的最佳时机-ii
* 123.买卖股票的最佳时机-iii
<!-- * 188.买卖股票的最佳时机-iv
* 309.最佳买卖股票时机含冷冻期 -->
* 714.买卖股票的最佳时机含手续费
  * 序列
* 53.最大子序和
* 674.最长连续递增序列
* 518.零钱兑换-ii
* 392.判断子序列
* 1143.最长公共子序列
* 115.不同的子序列
* 583.两个字符串的删除操作
* 72.编辑距离

#### 其他有趣的数据结构、算法思想、题目

* 哈希表
  * 202.快乐数
  * 242.有效的字母异位词
  * 383.赎金信
* 数字游戏
  * 18.四数之和
  * 292.nim
  * 877.石子
  * 326.3-的幂.js


#### 设计题

* 堆  （top k)
  * 215.数组中的第k个最大元素
  * 295.数据流的中位数
  * 347.前-k-个高频元素
  * 502.ipo
* 最小栈 
  * 155.最小栈
* 单调栈 
  * 739.每日温度
  * 496.下一个更大元素-i
  * 503.下一个更大元素-ii
* 设计LFU 
  * 460.lfu-缓存
* 设计Trie树 
  * 208.实现-trie-前缀树
  * 搜索提示原理
* 设计链表 
  * 707.设计链表




* @next
  * 图
  * 其他数据结构和算法思想扩展
    * 并查集
    * 跳表
    * 位图
    * 布隆过滤器
    * ....
