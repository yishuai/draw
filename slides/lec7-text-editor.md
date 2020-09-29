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

