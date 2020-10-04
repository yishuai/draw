class: middle, center

# Javascript

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- 通过事件处理程序，可以检测和响应网页中发生的事件。
  - addEventListener方法用于注册此类处理程序。
- 每个事件都有一个标识它的类型（“ keydown”，“ focus”等）。
- 大多数事件都是在特定的DOM元素上调用的，然后传播到该元素的祖先，从而使与这些元素相关联的处理程序能够处理它们。
- 调用事件处理程序时，会将事件的附加信息传递给事件对象。
  - 该对象还具有允许我们停止进一步传播（stopPropagation）并阻止浏览器默认处理事件（preventDefault）的方法。
- 按下一个键会触发“ keydown”和“ keyup”事件
- 按下鼠标按钮会触发“鼠标向下mouseup”，“鼠标向上mousedown”和“单击click”事件。移动鼠标会触发“mousemove”事件
- 触摸屏交互将导致“触摸开始touchstart”，“触摸移动touchmove”和“触摸结束touchend”事件。
- 可以通过“滚动scroll”事件检测滚动，而可以通过“focus焦点”和“blur模糊”事件检测焦点变化
- 文档加载完成后，窗口上将触发“加载load”事件
-
???

Computationally speaking, there isn’t much JavaScript can’t do; it’s a robust programming language for web development

We will use JavaScript and associated libraries for interactivity, animation, drawing on the HTML5 canvas, and rendering in 3D

As with any technology, it’s good to consider when to—and not to—use it

---

# 步骤

- 选择脚本要响应的元素
- .red[指定哪个事件将触发响应]
- 运行事件的代码

---

# Events 事件

- 浏览网络时，浏览器会注册不同类型的事件
- 常见事件包括
    - 单击或点击链接
    - 悬停或在元素上滑动
    - 调整浏览器窗口的大小
    - 网页加载
- JavaScript可用于响应DOM中发生的众多事件

???

As you navigate the web, your browser registers different types of events.
Common events include:
-  Clicking or tapping on a link
-  Hovering or swiping over an element -  Resizing the browser window
-  A web page loading
JavaScript can be used to respond to the multitude of events that occur within the DOM.


---

# 事件绑定

- 指定哪个事件将触发响应也称为绑定
- 将事件绑定到元素有三种不同的方法
    - HTML事件处理程序
    - DOM事件处理程序
    - DOM事件监听器

cyanBtn.addEventListener('click', cyanBg);

[Basic](../js/color/colors.js)

???

Specifying which event will trigger the response is also known as binding.
There are three different ways to bind an event to an element.
-  HTML event handlers
-  DOM event handlers
-  DOM event listeners

---

# 鼠标事件

- click
- dblclick
- mousedown
- mouseup
- mousemove
- mouseover
- mouseout

---
# 鼠标上下事件

- mousedown
- mouseup
哪个元素发生的，就会哪个元素是target

---
# 鼠标点击事件
- click
- dblclick
- 在“ mouseup”事件之后，将在同时包含按下和释放按钮的最特定节点上触发“ click”事件。
- 例如，如果在一个段落上按下鼠标按钮，然后将指针移到另一段落并释放按钮，则包含两个段落的元素会发生“ click”事件
- 如果两次单击同时发生，则在第二次单击事件之后也会触发“ dblclick”（双击）事件。

---

# 步骤

- 选择脚本要响应的元素
- 指定哪个事件将触发响应
- .red[运行事件的代码]

---

#

[Basic](../js/color/colors.html)

// 改变背景颜色的函数
function cyanBg() {
  background.style.backgroundColor = "cyan";
}

---
# 阻止默认行为

- 实现快捷键，上下文菜单
- 尽量不这么做，用户会不习惯

link.addEventListener("click", event => {
  console.log("Nope.");
  event.preventDefault();
  });

---
# 鼠标键判断

- 该对象保存有关事件的其他信息
- 按下的是鼠标的哪个键？

<button>Click me any way you want</button>
<script>
  let button = document.querySelector("button");
  button.addEventListener("mousedown",
    event => {
      if (event.button == 0) {
        console.log("左键");
      } else if (event.button == 1)
        { console.log("中键");
      } else if (event.button == 2)
        { console.log("右键"); }
  });
</script>

---
# 鼠标位置

- clientX和clientY属性
  - 包含事件相对于窗口左上角的坐标（以像素为单位）
- pageX和pageY
  - 相对于整个文档的左上角的坐标（当窗口已滚动）

js/position.html

---
# 在鼠标位置处加点

<style>
  body {
    height: 200px;
    background: beige;
  }
.dot {
  height: 8px; width: 8px;
  border-radius: 4px; /* rounds corners */ background: blue;
  position: absolute;
}
</style>
<script>
  window.addEventListener("click",
    event => {
      let dot = document.createElement("div");
      dot.className = "dot";
      dot.style.left = (event.pageX - 4) + "px";
      dot.style.top = (event.pageY - 4) + "px";
      document.body.appendChild(dot);
  });
</script>

---
# 根据窗口大小，设置背景色

- 设置颜色归一化尺度

hueBrowserRatio = browserWidth / 360;

window.addEventListener('resize', colorScale);

- 获得鼠标位置，设置背景色

window.addEventListener('mousemove', getPosition);

let xPos = event.clientX;

let hue = Math.ceil(xPos / hueBrowserRatio);

[Colorfield](../js/colorfield.html)

---
# 高级鼠标技巧

- 移走事件侦听器
-

---
# 鼠标移动高级示例

- 鼠标down后，加一个move

<p>Drag the bar to change its width:</p>
<div style="background: orange; width: 60px; height: 20px"> </div>
<script>

  let lastX;
  // 跟踪最后观察到的鼠标X位置
  let bar = document.querySelector("div");

  bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // 禁止默认行为选择
  } });

  function moved(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", moved); }
    else {
      let dist = event.clientX - lastX;
      let newWidth = Math.max(10, bar.offsetWidth + dist);
      bar.style.width = newWidth + "px";
      lastX = event.clientX;
    } }
</script>

- 请注意，“ mousemove”处理程序在整个窗口上注册。即使在调整大小期间鼠标移至栏外，只要按住按钮，我们仍然希望更新其大小。

- 释放鼠标按钮时，我们必须停止调整栏的大小。为此，我们可以使用buttons属性（注意复数形式），该属性告诉我们当前按住的按钮。当它为零时，没有按钮按下。按住按钮时，其值为这些按钮的代码之和 - 左按钮的代码为1，右按钮代码为2，中间代码为4
---

# 只响应一次

- 把自己移走

<button>Act-once button</button>
<script>
  let button = document.querySelector("button");
  function once() {
    console.log("Done.");
    button.removeEventListener("click", once);
    }
  button.addEventListener("click", once);
</script>

---

# UI事件

- load
- unload
- error
- resize
- scroll

---
# load

- 页面加载完成后，窗口和文档主体对象上将触发“加载”事件。
- 这通常用于安排需要构建整个文档的初始化操作。
- 请记住，遇到脚本标记时，脚本标记的内容将立即运行。这可能为时过早，例如，当脚本需要对出现在脚本标记之后的文档部分进行某些处理时。

---
# beforeunload

- 当页面关闭或离开页面（例如，通过链接）时，将触发“ beforeunload”事件
- 此事件的主要用途是防止用户因关闭文档而意外丢失工作。
- 如果您阻止此事件的默认行为并将事件对象的returnValue属性设置为字符串，浏览器将向用户显示一个对话框，询问他们是否真的要离开该页面。
- 该对话框可能包含您的字符串，但是由于某些恶意网站试图使用这些对话框来使人们迷惑在他们的页面上看不起眼的减肥广告，因此大多数浏览器不再显示它们。

---

# 例：页面加载时，随机背景色

window.addEventListener('load', randomColor);

const background = document.querySelector('body');
let randomNumber = Math.floor(Math.random() * 360);
background.style.backgroundColor = "hsl(" + randomNumber + ", 100%, 50%)";

[Colorfield](../js/colorfield.html)

---
# 滚动

<style>
  #progress {
    border-bottom: 2px solid blue;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
<div id="progress"></div>
<script>
  document.body.appendChild(
    document.createTextNode(
      "supercalifragilisticexpialidocious ".repeat(1000)));
  let bar = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`; });
</script>

position: fixed; 让它不动

全局变量innerHeight由系统提供，提供了窗口的高度，我们必须从总可滚动高度中减去该高度，得到最大的可滚动的数字

窗口宽度也有一个innerWidth的全局变量。

通过将pageYOffset（当前滚动位置）除以最大滚动位置并乘以100，我们可以得到进度条的百分比。

在滚动事件上调用preventDefault不会阻止滚动的发生。实际上，仅在滚动发生之后才调用事件处理程序。

---

# 键盘事件

- keydown
- keyup
- keypress

---
# 键盘事件

- keydown：注意：如果按住不放，每出现一个字母，就会fire一次

window.addEventListener("keydown",
  event => {
    if (event.key == "v") {
      document.body.style.background = "violet"; }
});
window.addEventListener("keyup",
  event => {
    if (event.key == "v") {
      document.body.style.background = "";}
});

---
# 键盘事件

- 回车键："Enter"
- 特殊键

if (event.key == " " && event.ctrlKey) {
  console.log("Continuing!"); }

---
# 键盘快捷键（暗模式）

function whichKey(event) {
  let key = event.code;
  if (key == 'KeyD') {
    darkMode();
}

js/morse/index.html

---
# 输入事件

对 input，textarea 标签，
每当用户更改其内容时，都会触发“input”事件。


---

# 表单事件

- input
- change
- submit
- reset
- cut
- copy
- paste
- select

---

# 焦点事件

- focus
- blur

---
#
当元素获得焦点时，浏览器将在其上触发“focus”事件。当失去焦点时，该元素将发生“blur”事件。

与前面讨论的事件不同，这两个事件不会传播。当子元素获得焦点或失去焦点时，不会通知父元素的处理程序。

当用户从显示文档的浏览器选项卡或窗口中移入或移出时，该窗口对象将接收“焦点”和“模糊”事件。

<p>姓名: <input type="text" data-help="你的全名"></p>
<p>年龄: <input type="text" data-help="您的年龄"></p>
<p id="help"></p>
<script>
  let help = document.querySelector("#help");
  let fields = document.querySelectorAll("input");
  for (let field of Array.from(fields)) {
    field.addEventListener("focus",
      event => {
        let text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    field.addEventListener("blur",
      event => {
        help.textContent = "";
    });
}
</script>

---

# Mutation事件

- DOMSubtreeModified
- DOMNodeInserted
- DOMNodeRemoved
- DOMNodeInsertedIntoDocument
- DOMNodeRemovedFromDocument

---

# 触摸事件

- touchstart
- touchmove
- touchend
- touchcancel

---
# 触摸点

- 由于许多触摸屏可以同时检测到多个手指，因此这些事件没有与之关联的一组坐标。而是，它们的事件对象具有touches属性，该属性包含点的类似数组的对象，每个点都有自己的clientX，clientY，pageX和pageY属性。


---

# 事件传播

- 会沿着DOM Tree向上传播
- 可以停止

button.addEventListener("mousedown",
  event => { console.log("Handler for button.");
  if (event.button == 2)
    event.stopPropagation();
});

---
# 目标属性

- 执行产生事件的元素

可以在父元素用 event.target.nodeName 判断是哪种元素发生了事件

<button>A</button>
 <button>B</button>
 <button>C</button>
 <script>
document.body.addEventListener("click",
  event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
});
</script>

---
# Worker

- 对于确实要在后台执行一些耗时的操作而不冻结页面的情况，浏览器提供了称为Web Worker的功能。
- 工作程序是一个JavaScript进程，它在其自己的时间轴上与主脚本一起运行。
- 为避免多个线程接触同一数据的问题，worker不与主脚本的环境共享全局范围或任何其他数据。必须通过来回发送消息来与他们进行通信。
- 只能将可以表示为JSON的值作为消息发送

let squareWorker = new Worker("code/squareworker.js");
squareWorker.addEventListener("message",
  event => { console.log("The worker responded:", event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);

---

#

[MDN JS 练习](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)


---

# 练习1

编写一个显示气球🎈 的页面（使用气球表情符号）。当您按下向上箭头时，它应该使（膨胀）10％，当您按下向下箭头时，它应该使（缩小）10％。

您可以通过在其父元素上设置font-size CSS属性（style.fontSize）来控制文本（表情符号为文本）的大小。请记住，在值中包括一个单位，例如，像素（10px）。

箭头键的键名是“ ArrowUp”和“ ArrowDown”。确保按键仅更改气球，而不滚动页面。

当该方法起作用时，添加一个功能，如果气球超过一定大小，它将爆炸（💥 ）。在这种情况下，爆炸意味着将其替换为表情符号，并且事件处理程序也将被删除（这样就无法对爆炸进行充气或放气）。

---
# 起始代码

<p>🎈</p>

<script>
  // Your code here
</script>

---

# 提示

您需要为“keydown”事件注册一个处理程序，然后查看event.key以确定是否按下了向上或向下箭头键。

可以将气球的当前大小保留在变量中，以便您可以在其上使用新大小。

可以定义一个更新气球大小的函数，这样您可以从事件处理程序中调用它，也可以在启动时调用一次以设置初始大小。

可以通过将文本节点替换为另一个文本节点（使用replaceChild）或将其父节点的textContent属性设置为新字符串来将气球🎈 更改为爆炸 💥 。

---

# 练习2 鼠标跟踪

创建一堆固定大小和背景颜色的绝对定位的<div>元素，在鼠标移动时，在鼠标指针之后显示它们。

一种简单的解决方案是准备固定数量的元素，每次发生“ mouseemove”事件时，将下一个元素移动到鼠标的当前位置。

---
# 起始代码

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // Your code here.
</script>

---
# 提示

最好通过循环来创建元素。将它们附加到文档中以使其显示。为了以后可以访问它们以更改位置，您需要将元素存储在数组中。

可以通过保留计数器变量并在每次“ ousemoveve”事件触发时对其加1来完成它们之间的循环。然后，可以使用余数运算符（％elements.length）获取有效的数组索引，以选择要在给定事件中放置的元素。

通过对简单的物理系统进行建模，可以达到另一个有趣的效果。仅使用“ mousemove”事件来更新一对跟踪鼠标位置的绑定。然后使用requestAnimationFrame模拟被吸引到鼠标指针位置的尾随元素。在每个动画步骤中，根据它们相对于指针的位置（以及可选地，为每个元素存储的速度）更新其位置。找出执行此操作的好方法取决于您。


---
# 参考

[eloquentjavascript](https://eloquentjavascript.net/15_event.html)

[W3school Events](https://www.w3school.com.cn/js/js_htmldom_events.asp)
