

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
The basic steps are as follows:  1. Clear the canvas 
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

---
# SVG

Scalable Vector Graphics

SVG is a language for describing two- dimensional graphics in XML
SVG allows for three types of graphic objects: vector graphic shapes, images, and text
SVG drawings can be interactive, dynamic, and animated

---
# 可扩展


To be scalable means to increase or decrease uniformly
In terms of graphics, means not being limited to a single, fixed, pixel size
On the Web, scalable means that a particular technology can grow
SVG is scalable in both senses of the word



---
# 向量

Vector graphics contain geometric objects such as lines and curves
This gives greater flexibility compared to raster-only formats
Since all modern displays are raster- oriented, the difference between raster-only and vector graphics comes down to where they are rasterized
Vector graphics are rasterized client side; raster graphics are, by nature, already rasterized on the server



---
# 图形


Most existing XML grammars represent either textual information or raw data
They typically provide only rudimentary graphical capabilities
SVG provides a rich, structured description of vector and mixed vector/ raster graphics



---
# 优点

SVG images can be created and edited with any text editor
SVG images can be searched, indexed, scripted, and compressed
SVG images are scalable, can be printed at any resolution, and are zoomable without degradation
SVG is an open standard
SVG files are pure XML


---
# XML

XML stands for Extensible Markup Language
XML is a markup language much like HTML
XML was designed to carry data, not to display data
XML tags are not predefined. You must define your own tags
XML is designed to be self-descriptive
SVG is written in XML


---
# 设置风格

The advantages of style sheets are now generally accepted, certainly for use with text
SVG extends this control to the realm of graphics
It allows for script-based manipulation of the document tree and the style sheet

---
# 动画

SVG supports the ability to change vector graphics over time
Using SVG’s animation elements, you can define motion paths, fade-in or fade-out effects, and objects that grow, shrink, spin or change color
SVG has been designed to allow SMIL to use animated or static SVG content as media components
Support for SMIL animation may be waning in favor of CSS animation



---
# 嵌入网页

There are a variety of ways in which SVG content can be included within a Web page
• A stand-alone SVG Web page
• Embedding by reference, using the HTML ‘img’ element
• Embedding inline
• External link, using the HTML ‘a’ element
• Referenced from a CSS property

---
# Path 元素

The <path> element is foundational to drawing with SVG; it allows you to
create all kinds of shapes.
The shape of a <path> element is
defined by one attribute: d
The d attribute contains a series of commands and parameters used by those commands.
All of the commands also come in two variants: an uppercase letter specifies absolute coordinates; a lowercase letter specifies relative coordinates.

---
# Path 命令

M moveto
L lineto
H horizontal lineto
V vertical lineto
C curveto
S smooth curveto
Q quadratic Bézier curve
T smooth quadratic Bézier curveto A elliptical arc
Z closepath

www.w3.org/TR/SVG/paths.html

---
# WebGL



---
# 3D图形

We experience the world in three dimensions and, increasingly, screen- based media is rendered in 3D
3D graphics have been around since the 1960s but required advanced computers with special software
Today, 3D processing hardware is integrated with virtually every new computer and mobile device
Moreover, software for rendering 3D   is now ubiquitous: the web browser


---
# 坐标系统 （Coordinate）

3D graphic data is represented in a Cartesian coordinate system
In addition to “x” and “y” values, an additional “z” value describes depth
The primary difference between 2D Canvas (and CSS) coordinates and WebGL is that “y” starts at the bottom of the window, increasing to the top
This distinction stems from historical convention of WebGL being y-up and HTML being y-down


---
# 网格（Mesh）

The most common way to draw 3D graphics is with a mesh
A mesh is composed of one or more polygon shapes, constructed of vertices (x, y, z), defining coordinate positions in space
The polygons most often used in meshes are triangles and rectangles
3D meshes are often referred to as “models”


---
#

wikipedia.org/wiki/File:Dolphin_triangle_mesh.png

---
# 材料

Material is generally used to describe the surface attributes of a mesh
This can be as simple as a solid color or more complex, such as a a shiny, reflective surface
Surface information can also be applied using bitmap images to create textures


---
# 光

Light defines how a surface is illuminated
Without a light source, it is difficult to perceive 3D attributes such as depth
3D graphics can have one or more light sources in a given scene


---
# 相机

3D scenes require a point of view from which to experience them
The “camera” defines where, relative to the scene, a viewer is positioned
Additional camera properties include field of view, which defines perspective
The final 3D image is rendered into a 2D “viewport”—the window or canvas


---
# Shader

Your computer’s graphics hardware understands vertices and textures, but that’s about it
Other aspects of a 3D scene— material, light, cameras—need to be interpreted
A “shader” is the part of your program that gets the pixels for a mesh onto the screen
Shaders are very powerful but we will rely on a JavaScript library for this part

---
# WebGL

WebGL is the standard 3D graphics API for the Web, initiated by Mozilla engineer, Vladimir Vukićević, in 2006
It allows developers to utilize the power of a computer’s 3D rendering hardware from within the browser, using JavaScript
WebGL is supported in all current, major, desktop browsers; increasingly, WebGL is also supported in mobile browsers
WebGL is a low-level drawing API


---
# Three.js

Three.js is a JavaScript toolkit for WebGL that provides higher-level access to the API
It was initially released via GitHub in 2010 by Ricardo Cabello, also known as “Mr.doob” and is actively maintained with additional three.js authors
Three.js is governed with an MIT free software license for use and reuse within diverse types of projects
threejs.org

---
#


-
.center[.width-100[![](./figures/all/image_ml.jpg)]]