class: middle, center

# Javascript 基础

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

---
# 基础

[Basic](../js/js-basic.js)
---
# 函数

- 减少重复
- 彼此隔离

---
# 定义

- 关键字：function
- x：函数参数，可以有多个，也可以没有
- 函数体，可以有 return 返回值，也可以没有返回值
- 调用

```js
const square = function(x) {
    return x * x;
};
console.log(square(12));
```

---
# 函数声明

```js
console.log("The future says:", square(2));

function square(x) {
   return x * x;
}
```

---
# 箭头函数


```js
const square1 = (x) => { return x * x; };
const square1 = x => x * x;
```

---
# 多余的输入变量会被忽略


```js

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
```


---
# 可以检查参数是否被提供


```js
function minus(a, b) {
    if (b === undefined)
        return -a;
    else
        return a - b;
}
console.log(minus(10)); // → -10
console.log(minus(10, 5)); // → 5
```

---
# 默认参数

```js
function minus(a, b=0) {
    return a - b;
}
console.log(minus(10)); // → -10
console.log(minus(10, 5)); // → 5
```

---
# 创造特定参数的函数

```js
function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
```

---
# 递归

```js
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));
```

---
# 练习

- 写一个函数，返回两个数中的最小值

---
#

```js


```
