class: middle, center

# 定时器

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- 本节我们学习如何通过用JS设置定时器，实现各种动画

---
# 作品

- 先请大家欣赏一副作品
- [JS个人主页](https://quietudes.github.io)
- [Github代码下载](https://github.com/quietudes/quietudes.github.io)

---
# 主页TypeIt动画效果JS实现

- 每次出现一个字

---
# 字符串数组

- 字符串是一个数组

var txt = "(安静的房间)";

- 取i位置的字符

txt.charAt(i);

- 获得字符串的长度

txt.length

---
# 循环打印出字符串中的每一个字

var i = 0;
if (i < txt.length){
  console.log(txt.charAt(i))
}

---
# 循环打印，每次多打印一个字

- 利用 += 操作符，叠加

var i = 0;
var x;
if (i < txt.length){
  console.log(x += txt.charAt(i))
}

---
# getElementById

- 获得ID为"title"的HTML元素

getElementById("title")

- 类似JQuery的 $("#title")

---
# 取元素的HTML内容

- 获得元素后，可以像JQuery一样，取它的各种属性

var t = document.getElementById("title");

t.innerText
t.innerHTML

- 也可以连着写，写为

document.getElementById("title").innerHTML

---
# 设置元素HTML内容

- 也可以设置它的各种属性

- innerHTML：HTML内容

t.innerHTML = "<h1>Hello</h1>";

- 也可以连着写，写为

document.getElementById("title").innerHTML = "<h1>Hello</h1>"

- 设置文本

t.innerText = "<h1>Hello</h1>";

---
# 函数

function 你好(){
  console.log("Hello！");
}

---
# 定时器

- 1000毫秒（也就是1秒）后，调用函数“你好”

setTimeout(你好, 1000);

---
# 说完再说

- 在函数“你好”里，说完“Hello”后，再设定时器，1秒后再调自己，再说“Hello”
- 就永远说下去了

function 你好() {
    console.log("Hello！");
    setTimeout(你好, 1000);
}

你好();

---
# 只说3遍

var i = 0
function 你好() {
  if (i<3){
    console.log("Hello！");
    setTimeout(你好, 1000);
    i++;
    }
}

你好();

---
# TypeIt动画实现

- [TypeIt动画实现](https://quietudes.github.io)

---
# 呼吸动画

- 练习：修改 breath.js，设置定时器，每隔4秒钟，交替显示文字“呼气”“吸气”
- 提示：可以用 valueOf() 取得当前标签的文字的值
