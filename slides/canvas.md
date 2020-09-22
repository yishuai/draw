

HTML5 canvas API用于使用JavaScript在浏览器中绘制光栅图形

---
# 设置

HTML画布是网页上的矩形区域，由<canvas>元素指定
通常，指定一个id以及width和height属性来定义画布的大小
默认情况下，<canvas>元素是透明的，没有边框，没有内容
一个HTML页面可以包含多个画布元素

---
# 绘制

所有绘制到画布上的操作都必须使用JavaScript完成
首先通过DOM查询引用画布
然后，使用其getContext（）方法指定二维绘图
画布是笛卡尔网格，其左上角的坐标为（0，0）

---
# 方法

Canvas only supports two primitive shapes: rectangle and ellipse
All other shapes must be created by combining one or more paths
There are a variety of path methods in the canvas API which make it possible to compose shapes
These include methods for drawing line, arc, text, color, and image

---
# 动画

Since JavaScript is used to control the canvas, its straightforward to use it for animation as well
The basic steps are as follows: 1. Clear the canvas
2. Save the canvas state
3. Draw animated shapes
4. Restore the canvas state
The requestAnimationFrame() method is well suited for canvas animation


---
# 注意

The canvas API opens up all sorts of possibilities for raster graphics in the web browser
Note, however, that pixel data drawn to the canvas are not DOM elements
That means regions of the canvas cannot be interacted with in the same way regions of an SVG image can
Keep in mind how these technologies intersect as well as how they diverge
