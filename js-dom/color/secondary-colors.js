/*
Secondary Colors
*/

// 访问按钮
let buttons = document.querySelectorAll('svg.btn');
// console.log(buttons);
let cyanBtn = buttons[0];
let magentaBtn = buttons[1];
let yellowBtn = buttons[2];

// 访问网页背景
let background = document.querySelector('body');

// 改变背景颜色的函数
function cyanBg() {
  background.style.backgroundColor = "cyan";
}

function magentaBg() {
  background.style.backgroundColor = "magenta";
}

function yellowBg() {
  background.style.backgroundColor = "yellow";
}

// 事件监听器
cyanBtn.addEventListener('click', cyanBg);
magentaBtn.addEventListener('click', magentaBg);
yellowBtn.addEventListener('click', yellowBg);