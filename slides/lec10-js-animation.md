class: middle, center

# 定时器

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

---
# 动画API

web动画API可以让我们用JavaScript写动画并且控制动画。

---
# 关键帧对象

首先要做的是创建一个对应于我们的CSS @keyframes块的关键帧对象:

// keyframe object
let movement = [
    { top: '-200px', left: '-200px' },
    { top: '480px', left: '480px' }
];

使用一个包含多个对象的数组。 每个对象代表原始CSS中的一个键。

除非你指定一个键上的偏移量，否则键的默认值是等间隔的
不需要明确地告知每个键出现的动画的百分比。 它将根据您给出的按键数量自动将动画划分为相等的部分。

当我们想要明确地设置一个键与其他键的偏移量时，我们可以直接在对象中指定一个偏移量，并与逗号分隔。

var aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
  { color: '#431236', offset: 0.3},
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

---
# 时间属性

// timing object
let skateTiming = { duration: 3000, iterations: Infinity };

持续时间是毫秒，而不是秒 - 3000不是3秒

是iterations, 不是iteration-count.

是Infinity，不是 “infinity”

{
  fill: 'forwards',
  easing: 'steps(4, end)',
  duration: aliceChange.effect.timing.duration / 2
}

---
# 整合这些特性

// put together with the animate method
let skate = skater.animate(
    movement,
    skateTiming
)

js/animation/api.html

https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

---
# 仅指定持续时间

我们只想指定动画的持续时间，而不是其迭代（默认动画迭代一次），我们可以单独传递毫秒：

let skate = skater.animate(
    movement,
    3000
)

---
# 操纵动画的播放

skate.pause();

skate.play();

Animation.finish() 动画结束

Animation.cancel() 终止动画

Animation.reverse() 设置动画播放速度到负值，所以它向后运行

skate.playbackRate = -1

---

# 例：动画控制

<button type="button" id="play">开始</button>

let playBtn = document.getElementById('play');

playBtn.addEventListener('click', play);

let cube = document.querySelector('.cube');

cube.style.animationPlayState = 'running';

[Cubic控制](../js/animation/cubic.html)

---

# 例：动画事件

cube.addEventListener('animationstart', animationData);

if (event.type == "animationstart") {
                animationStatus.textContent = '动画开始';

[Cubic控制](../js/animation/cubic.html)

---
# 动画

object.style.animation = "name duration timingFunction delay iterationCount direction fillMode playState"

https://www.w3schools.com/jsref/prop_style_animation.asp

---
# 过渡

object.style.transition = "property duration timing-function delay|initial|inherit"

https://www.w3schools.com/jsref/prop_style_transition.asp


---
# 鼠标位置控制旋转变换

squares[i].style.transform = 'rotateX(' + xRotation + 'deg)' + ' ' + 'rotateY(' + yRotation + 'deg)';

网格形状的动态变换
- 映射到光标移动
- 缩放到浏览器窗口

js/animation/dynamic-grid/grid.html

---
#

window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

let animation = requestAnimationFrame(skate);

function skate() {
    animation = requestAnimationFrame(skate);
    skater.style.top = position + 'px'; // CSS top property
    skater.style.left = position + 'px'; // CSS left property

cancelAnimationFrame(animation); // cancel requestAnimationFrame()

js/animation/animation-frame.html

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame

---
# 调用频率

当你准备更新动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数)。

回调函数执行次数通常是每秒60次

但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。

为了提高性能和电池寿命，因此在大多数浏览器里，当requestAnimationFrame() 运行在后台标签页或者隐藏的<iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命。

---
# 取消

取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求.

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/cancelAnimationFrame

---
#

显示椭圆形移动的猫的图片：

图片以页面为中心，相对位置。

反复更新该图片的顶部和左侧样式以将其移动

<p style="text-align: center">
  <img src="img/cat.png" style="position: relative">
</p>
<script>
  let cat = document.querySelector("img");
  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
  }
  requestAnimationFrame(animate);
</script>

---
#

用requestAnimationFrame安排动画animate函数在浏览器准备重绘屏幕时运行。
animate动画函数本身再次调用requestAnimationFrame安排下一次更新
当浏览器窗口（或选项卡）处于活动状态时，这将导致更新以每秒约60的速度发生，这往往会产生很漂亮的动画。

如果我们只是循环更新DOM，则页面将冻结，并且屏幕上不会显示任何内容。
浏览器不会在JavaScript程序运行时更新其显示，也不允许与页面进行任何交互。
这就是为什么我们需要requestAnimationFrame的原因-它使浏览器知道我们现在已经完成，并且可以继续执行浏览器所要做的事情，例如更新屏幕和响应用户操作。

animate动画函数的参数是当前时间time。
为确保猫每毫秒的运动稳定，它以角度变化的速度为基础，
该时间是当前时间与最后一次运行之间的差值。

如果仅以每步固定的角度移动角度，则例如在同一台计算机上运行的另一项繁重的任务要阻止此功能运行几分之一秒时，该动作将停顿。

---
# 练习

扩展先前定义的猫动画，使猫和他的帽子（<img src =“ img /hat.png”>）沿着椭圆，在相反的方向旋转。

或使帽子绕猫转一圈。或以其他有趣的方式更改动画。

为了使定位多个对象更容易，最好切换到绝对定位。这意味着顶部和左侧是相对于文档的左上角计算的。为避免使用负坐标，这将导致图像移至可见页面之外，可以向位置值添加固定数量的像素。

---
# 起始代码

<style>body { min-height: 200px }</style>
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 230) + "px";

    // Your extensions here.

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>

---
# 提示

Math.cos和Math.sin以弧度测量角度，其中整个圆为2π。对于给定的角度，您可以通过将一半相加得到相反的角度，即Math.PI。这对于将帽子放在轨道的另一侧可能很有用。

---
#

https://caniuse.com/#feat=web-animation

---
#

http://webdesigndecal.github.io/showcase/

---
# 练习

Part 1
Begin with a web page that includes an original CSS transition or animation. You may work with a previous project of yours or develop a new one if you like. Incorporate JavaScript into the page in such a way that the transition or animation is applied without the user directly interacting (via click, hover, tap, etc.) with the element/s it affects. You are encouraged to be thoughtful about the relationship between browser events and the animation they trigger.

Your script should include at least two DOM queries, one function that you define, and one event listener that responds to a user action. Keep things organized by placing all your files in a new directory and linking to your CSS and JavaScript as external documents.

Finally, include a relative link somewhere on this page to the new page you will create for Part 2.

Part 2
For part two of this assignment, you will create a new animation using either JavaScript’s requestAnimationFrame() method or the Web Animations API. Place this animation on a new page—the one you linked to from Part 1. The animation and its content should be of your own design and also related, either thematically or aesthetically, to the web page from Part 1.

To use the requestAnimationFrame() method, call your drawing function recursively and incrementally change some aspect of CSS over time. Alternatively, if you use the Web Animations API, you will need the animate() method to combine keyframe objects with a timing object.

While this animation does not need to respond to a user’s actions, you are free to add interactivity to this page as well. Your script should include at least one DOM query and one requestAnimationFrame() or animate() method. Files should be placed in the same directory you created in Part 1; CSS and JavaScript should be linked to externally.

---
# 要求

Part 1: A CSS transition or animation applied indirectly with JavaScript (2 points)
Part 1: At least two JavaScript DOM queries (1 point)
Part 1: At least one JavaScript function, defined by the student (1 point)
Part 1: At least one JavaScript event listener to respond to a user action (1 point)
Part 1 should link to Part 2 and the animation for Part 2 should be related, either thematically or aesthetically, to the web page from Part 1 (1 point)
Part 2: A new web page with a custom animation using JavaScript’s requestAnimationFrame() method or Web Animation API (2 points)
Part 2: For the requestAnimationFrame() method, the drawing function should be called recursively to change some aspect of CSS over time; for the Web Animations API, the animate() method should be used with keyframe objects and a timing object. (1 point)
Well-formed HTML, CSS, and JavaScript in separate documents (1 point)