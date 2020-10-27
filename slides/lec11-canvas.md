class: middle, center

# Canvas 画布

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- HTML5 canvas API
- 画布是封装图片的单个DOM元素
- 它提供一个编程接口，用于在节点占用的空间上绘制形状
- 使用JavaScript在浏览器中绘制光栅图形
- 可用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理
- 默认情况下，canvas 元素是透明的，没有边框，没有内容
- 一个HTML页面可以包含多个画布元素

???

A canvas is a single DOM element that encapsulates a picture. It provides a programming interface for drawing shapes onto the space taken up by the node.

---
# canvas元素

- 画布图形可以绘制到 canvas 元素上
- 可以设定 canvas 元素的width和height属性，以确定其大小（以像素为单位）
- 一个新的画布是空的，这意味着它是完全透明的，因此在文档中显示为空白

---
# 绘图样式

- 当前有两种广泛支持的绘图样式
- Canvas API聚焦于二维图形
- WebGL API聚焦于三维图形
  - 通过OpenGL接口用于三维图形
  - 同样使用 canvas 元素
  - 绘制硬件加速的2D和3D图形
  - 提供了图形硬件的直接接口，允许用JavaScript有效渲染复杂场景

---
# 和SVG区别

- SVG中，保留了形状的原始描述，以便可以随时移动或调整形状
- 画布在绘制形状后立即将其转换为像素（光栅上的彩色点），并且不记得这些像素代表什么
  - 在画布上移动形状的唯一方法是清除画布（或画布中围绕该形状的部分）并在新位置重新绘制形状

???

in SVG the original description of the shapes is preserved so that they can be moved or resized at any time. A canvas, on the other hand, converts the shapes to pixels (colored dots on a raster) as soon as they are drawn and does not remember what these pixels represent. The only way to move a shape on a canvas is to clear the canvas (or the part of the canvas around the shape) and redraw it with the shape in a new position.

本书不会讨论WebGL，我们将坚持两个维度。但是，如果您对三维图形感兴趣，我鼓励您研究WebGL。它

Canvas graphics can be drawn onto a <canvas> element. You can give such an element width and height attributes to determine its size in pixels.
A new canvas is empty, meaning it is entirely transparent and thus shows up as empty space in the document.

The <canvas> tag is intended to allow different styles of drawing. To get access to an actual drawing interface, we first need to create a context, an object whose methods provide the drawing interface.

There are currently two widely supported drawing styles: "2d" for two-dimensional graphics and "webgl" for three-dimensional graphics through the OpenGL interface.

This book won’t discuss WebGL—we’ll stick to two dimensions. But if you are interested in three-dimensional graphics, I do encourage you to look into WebGL. It provides a direct interface to graphics hardware and allows you to render even complicated scenes efficiently, using JavaScript.

---
# 设置

- HTML画布是网页上的矩形区域
- 默认大小为300×150像素（宽×高）
  - 可使用HTML的高度和宽度属性来定义 Canvas 尺寸
  - 为了在 Canvas 上绘制图形，使用一个JavaScript上下文对象（context），它能动态创建图像

```js
canvas.style.height = height + 'px';
let scale = window.devicePixelRatio;
canvas.width = width * scale;
const context = canvas.getContext('2d');
context.scale(scale, scale);    // 标准化坐标系
```

[示例](../canvas/14-setup.html)

---
# 绘制

- 所有绘制到画布上的操作都须使用JavaScript完成
- 首先通过DOM查询引用画布
- 然后使用其getContext（）方法指定二维绘图
  - 画布是笛卡尔网格，其左上角的坐标为（0，0）

```js
const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');
context.moveTo(0, 0);
context.lineTo(canvas.width, canvas.height);
context.stroke();
```

[示例](../canvas/13-basic.html)

---
# 形状

- 填充形状
- 可以给区域指定某种颜色或图案
- 也可以描边：沿着边缘绘制一条线

???
a shape can be filled, meaning its area is given a certain color or pattern, or it can be stroked, which means a line is drawn along its edge.

---
# 方法

- 绘制线条，圆弧，文本，颜色和图像
- 基本形状
  - 画布仅支持两种基本形状：矩形和椭圆形
- 路径
  - 所有其他形状必须通过组合一个或多个路径来创建
  - canvas API中有多种路径方法，可以用来组合形状

---
# 线条 Line

- lineTo(x, y)
- 绘制一条从当前位置到指定x以及y位置的直线。

```js
context.lineTo(canvas.width, canvas.height);
context.stroke(); // 画线
```

[示例](../canvas/13-basic.html)

---
# 矩形 Rect

- 三种方法
  - fillRect(x, y, width, height) 绘制一个填充的矩形
  - strokeRect(x, y, width, height) 绘制一个矩形的边框
  - clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。
- 参数
  - x与y指定制矩形的左上角（相对于原点）坐标
  - width和height设置矩形尺寸

---
# 矩形 Rect

- 说明
  - fillRect() 绘制一个填充的矩形
  - clearRect() 从正方形中心开始擦除了一个正方形
  - strokeRect() 生成一个正方形边框
- 绘制之后会马上显现在canvas上，即时生效

```js
context.fillRect(100, 25, 200, 200);
context.clearRect(125, 50, 200, 200);
context.strokeStyle = 'rgb(255, 200, 0)';
context.strokeRect(150, 75, 200, 200);
```

[示例](../canvas/13-rect.html)

---
# Path

- 图形的基本元素是路径
  - 路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合
  - 一个路径，甚至一个子路径，都是闭合的
- 步骤
  - 使用路径绘制图形需要一些额外的步骤
  - 首先创建路径起始点，然后画出路径，之后把路径封闭
  - 通过描边或填充路径区域来渲染图形

---
# Path2D

```js
let path = new Path2D("
    M 20 40
    L 100 20
    L 175 125
    L 120 180 z");
```

[示例](../canvas/14-path2d.html)

---
# Path

- beginPath()
  - 新建一条路径，图形绘制命令被指向到路径上生成路径
- closePath()
  - 闭合路径，绘制一条从当前点到开始点的直线来闭合图形
  - 之后图形绘制命令又重新指向到上下文中

```js
context.beginPath();
context.moveTo(225, 50);
context.lineTo(350, 250);
context.closePath();
```

[示例](../canvas/13-path.html)

---
# Path

- stroke()
  - 通过线条来绘制图形轮廓
- fill()
  - 通过填充路径的内容区域生成实心的图形

```js
context.fillStyle = gradient;
context.beginPath();
context.moveTo(225, 50);
context.lineTo(350, 250);
context.closePath();
context.stroke();
context.fill();
```

[示例](../canvas/13-path.html)

---
# Path fill

- 必须先关闭路径，使起点和终点就在同一位置，然后才能填充它
- 如果尚未关闭路径，则从其末端到其起点添加一条线，并填充完成路径所包围的形状

```js
context.fillStyle = gradient;
context.beginPath();
context.moveTo(225, 50);
context.lineTo(350, 250);
context.closePath();
context.stroke();
context.fill();
```

[示例](../canvas/13-path.html)

???
path needs to be closed (meaning its start and end are in the same position) before it can be filled. If the path is not already closed, a line is added from its end to its start, and the shape enclosed by the completed path is filled.

---
# Arc

- arc(x, y, radius, startAngle, endAngle, anticlockwise)
  - 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆）
  - 从 startAngle 开始到 endAngle 结束
  - 按照 anticlockwise 给定的方向（默认为顺时针）来生成

```js
context.arc(canvas.width/2,
            canvas.height/2, 125, 0, 4);
```

---
# 椭圆

- ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
  - 椭圆圆心在（x,y）位置
  - 半径分别是radiusX 和 radiusY
  - 从 startAngle  开始绘制，到 endAngle 结束
  - 按照anticlockwise（默认顺时针）指定的方向

```js
context.ellipse(canvas.width/2,
        canvas.height/2, 100, 100, 0, 0,
        2 * Math.PI, false);
```

---
# 贝塞尔曲线

- quadraticCurveTo(cp1x, cp1y, x, y)
  - 绘制二次贝塞尔曲线
  - cp1x,cp1y为一个控制点
  - x,y为结束点

- bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  - 绘制三次贝塞尔曲线
  - cp1x,cp1y为控制点一
  - cp2x,cp2y为控制点二
  - x,y为结束点

---
# 循环绘画

- 利用编程的强大能力，自动绘画

[示例](../canvas/13-loops.html)

---
# 放大和缩小

- window.devicePixelRatio 存在放大倍数

```
canvas.style.width = referenceWidth + 'px';

let scale = window.devicePixelRatio;
canvas.width = referenceWidth * scale;

context.scale(scale, scale);
```

[示例](../canvas/13-scale.html)

---
# 图片

- 使用drawImage方法将像素从图像或其他画布移到我们的画布上
- 默认绘制整个源图像
- 提供更多参数，可以复制图像的特定区域
- 游戏编程
  - 从包含各种姿势的图像中复制游戏角色的各种图像，来获得游戏的动态效果

```js
context.drawImage(image, 0, 0, 450, 300);
```


[示例](../canvas/14-image.html)

???
Moving pixels from an image or another canvas onto our canvas is done with the drawImage method. By default, this method draws the whole source image, but by giving it more parameters, you can copy a specific area of the image. We used this for our game by copying individual poses of the game character out of an image that contained many such poses.

---
# 图像处理

- 颜色转换

```js
let imageData = context.getImageData
        (0, 0, canvas.width, canvas.height);
let data = imageData.data;
for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
}
context.putImageData(imageData, 0, 0);
```

[示例](../canvas/15-image-proc.html)

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)

---
# 图像处理

- 逐渐增加绿色和蓝色

```js
for (let y = 0; y < canvas.height; y++) {
  for (let x = 0; x < canvas.width; x++) {
    let index = (x + y * canvas.width) * 4;
    pixelData[index + 0] = 255; // red
    pixelData[index + 1]
      = (x / canvas.width) * 255; // green
    pixelData[index + 2]
      = (y / canvas.height) * 255; // blue
    pixelData[index + 3] = 255; // alpha
    }
}
```
[示例](../canvas/15-pixel-gradient.html)

---
# 图像处理

- 随机像素

[示例](../canvas/15-random-pixels.html)

---
# 文字

- 指定文字字体等性质

```js
context.font = '44px Helvetica';
context.textBaseline = 'middle';
context.textAlign = 'center';
context.strokeStyle = 'black';
context.strokeText('科蚪加油！', width/2, height/2);
```

[示例](../canvas/14-text.html)

---

# 文字

- 窗口大小变化时，重画
  - 重新取窗口大小

```js
window.addEventListener('resize',
    function() {
        setup();
        draw();
});

```

[示例](../canvas/15-full-text.html)

---
# 变换

```js
context.scale(1.5, 1.5);
context.translate(50, 0);
```

Transformations allow you to draw a shape in multiple orientations. A 2D drawing context has a current transformation that can be changed with the translate, scale, and rotate methods. These will affect all subsequent drawing operations. A transformation state can be saved with the save method and restored with the restore method.

[示例](../canvas/canvas/5-canvas/14-compose.html)

---
# 组合

在之前的例子里面，我们总是将一个图形画在另一个之上，对于其他更多的情况，仅仅这样是远远不够的。比如，对合成的图形来说，绘制顺序会有限制。不过，我们可以利用 globalCompositeOperation 属性来改变这种状况。此外, clip属性允许我们隐藏不想看到的部分图形。

globalCompositeOperation = type
这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识12种遮盖方式的字符串。

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing

[示例](../canvas/canvas/5-canvas/14-compose.html)

---
# 裁切

clip()
将当前正在构建的路径转换为当前的裁剪路径。
我们使用 clip()方法来创建一个新的裁切路径。

---
# 保存恢复

[示例](../canvas/15-save-restore.html)

---
# 动画

在 canvas 上绘制内容是用 canvas 提供的或者自定义的方法，而通常，我们仅仅在脚本执行结束后才能看见结果，比如说，在 for 循环里面做完成动画是不太可能的。

因此， 为了实现动画，我们需要一些可以定时执行重绘的方法。有两种方法可以实现这样的动画操控。首先可以通过 setInterval 和 setTimeout 方法来控制在设定的时间点上执行重绘。

你可以通过以下的步骤来画出一帧:

清空 canvas
除非接下来要画的内容会完全充满 canvas （例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
保存 canvas 状态
如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
绘制动画图形（animated shapes）
这一步才是重绘动画帧。
恢复 canvas 状态
如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

由于使用JavaScript来控制画布，因此也很容易将其用于动画
基本步骤如下：
1.清除画布
2.保存画布状态
3.绘制动画形状
4.恢复画布状态

requestAnimationFrame（）方法非常适合画布动画

采用 window.requestAnimationFrame()实现动画效果。这个方法提供了更加平缓并更加有效率的方式来执行动画，当系统准备好了重绘条件的时候，才调用绘制动画帧。一般每秒钟回调函数执行60次，也有可能会被降低。想要了解更多关于动画循环的信息，尤其是游戏，可以在Game development zone 参考这篇文章 Anatomy of a video game。

最大的限制就是图像一旦绘制出来，它就是一直保持那样了。如果需要移动它，我们不得不对所有东西（包括之前的）进行重绘。重绘是相当费时的，而且性能很依赖于电脑的速度。

When showing an animation on a canvas, the clearRect method can be used to clear part of the canvas before redrawing it.

requestAnimationFrame(draw);

[示例](../canvas/14-animation.html)

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations

[示例](../canvas/16-animation-transform.html)

---
# 视频处理

```js
context.drawImage(video, 0, 0, 533, 300);
requestAnimationFrame(draw);
```

[示例](../canvas/15-video.html)
[示例](../canvas/16-video.html)
---
# 视频处理（特性）

[示例](../canvas/15-video-effect.html)
[示例](../canvas/16-video-effect.html)

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas

---
# 视频和SVG

[示例](../canvas/16-video-svg.html)

---
# 注意

canvas API为Web浏览器中的栅格图形打开了各种可能性
但是请注意，绘制到画布上的像素数据不是DOM元素
这意味着画布的区域不能以与SVG图像的区域可以相同的方式进行交互
请记住这些技术如何相交以及它们如何相异

---
# 参考

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial

---
# 练习

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations

上的动画

- 太阳系的动画
- 动画时钟
- 循环全景照片
- Snake Game

---
# 练习

https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations

- 弹球

---
# 练习

Using this template, create a series of three HTML canvas drawings that relate to each other, either thematically or aesthetically. Each canvas is 600 × 400 (CSS) pixels. Use the window object’s devicePixelRatio property to scale the resolution for the different pixel densities of different screens.

At least one drawing should include a custom shape drawn with path methods of the canvas API. At least one drawing should include a photographic image or video whose pixel data is manipulated with the ImageData object. Each of the canvas drawings should be visibly animated with the window object’s requestAnimationFrame() method.

Write your JavaScript externally, linked to the HTML page. Update the title of the page and the background color of the canvas elements.

---
# 要求

Three unique canvas drawings coded into the template provided (3 points)
Drawing resolution should be scaled appropriately with the devicePixelRatio property (1 point)
At least one custom shape drawn with path methods (1 point)
At least one photographic image or video with pixel manipulation (2 points)
Each drawing should be animated with the requestAnimationFrame() method (3 points)