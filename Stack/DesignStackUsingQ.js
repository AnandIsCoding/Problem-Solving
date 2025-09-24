var MyStack = function() {
  this.q = []  
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for(let i=0;i<this.q.length-1;i++){
        this.q.push(this.q.shift())
    }
    return this.q.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q[this.q.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0
};

let stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());   // 2
console.log(stack.pop());   // 2
console.log(stack.empty()); // false
