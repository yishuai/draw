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

计划在给定的毫秒数后，调用一个函数


- 1000毫秒（也就是1秒）后，调用函数“你好”

setTimeout(你好, 1000);

---
# 定时器

function go() {
  text.textContent = 'Go!';
}

setTimeout(go, 2000);

js/animation/timeout.html

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
# 清除

有时您需要取消预定的功能。这是通过存储setTimeout返回的值并对其调用clearTimeout来完成的。

let bombTimer = setTimeout(()  => {
  console.log("BOOM!"); }, 500);
if (Math.random() < 0.5) {
  // 50% chance
  console.log("Defused.");
  clearTimeout(bombTimer);
}

---
# 重复

setInterval，clearInterval 用来设置应每X毫秒重复一次的计时器。

let ticks = 0;
let clock = setInterval(() => {
  console.log("滴答", ticks++);
    if (ticks == 10) {
      clearInterval(clock);
      console.log("停止.");
  }
}, 200);

---
# setInterval，clearInterval

let animation = setInterval(skate, 4);

function skate() {
  skater.style.top = position + 'px'; // CSS top property
  skater.style.left = position + 'px'; // CSS left property


js/animation/interval.html

js/animation/set-interval.html

---
# 在系列事件完成后再做

- the "mousemove" and "scroll"，“input” events 会一路fire
- 不能在里面做太消耗CPU的事
- 或者延时再做。设置timeout，然后不断取消，直到用户停止

<textarea>Type something here...</textarea> <script>
let textarea = document.querySelector("textarea"); let timeout;
textarea.addEventListener("input", () => {
     clearTimeout(timeout);
timeout = setTimeout(() => console.log("Typed!"), 500); });
</script>

给clearTimeout提供一个未定义的值或在已经触发的超时上调用它无效。因此，我们不必担心何时调用它，我们只需为每个事件都这么做。

---
# 在系列事件发生过程中定时做

- 如果我们希望将响应间隔开，以使响应间隔至少一定的时间，但又希望在一系列事件中（而不是仅在事后触发）触发它们，则可以使用略有不同的模式。
- 例如，我们可能想通过显示鼠标的当前坐标（仅每250毫秒）来响应“ ousemove”事件。

<script>
let scheduled = null;
window.addEventListener("mousemove", event => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent =
        `鼠标在 ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = event; });
</script>

---
# 呼吸动画

quietudes/breath.html

- 练习：修改 breath.js，设置定时器，每隔4秒钟，交替显示文字“呼气”“吸气”
- 提示：可以用 valueOf() 取得当前标签的文字的值

---
# 写作

quietudes/write.html

---
# 写作动画

- write.js

---
# 取用户输入的文本

document.getElementById('input').value

---
# 字数统计

正则表达式

text.match(/\S+/g).length

---
# 显示

document.getElementById("innerBar").style.width = '100%'

---
# 键的响应

- 字数统计

event listener

input.addEventListener('keyup', function(e){
  wordCounter(e.target.value);
});

---
# 时钟

---
# 面向对象

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();

---
# dark模式

var m = "☽";

var moon = document.getElementById("moon");
moon.onclick = function darkMode() {

---

# style

document.documentElement.style.setProperty('--bg-color', '#303030');
document.documentElement.style.setProperty('--text-color', '#e3e3e3');

