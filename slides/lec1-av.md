class: middle, center

# HTML音视频

陈一帅

[yschen@bjtu.edu.cn](mailto:yschen@bjtu.edu.cn)

实务学堂

.footnote[Web前端]
---
# 介绍

- HTML音频
- HTML视频

---
# 音频

- HTML audio 元素用于在文档中嵌入音频内容
  - 可包含一个或多个音频资源，这些音频资源用 source 元素和 src 属性描述
  - 浏览器会选择最合适的一个使用

```html
    <audio autoplay="">
      <source src="media/red.ogg" type="audio/ogg">
      <source src="media/red.mp3" type="audio/mpeg">
    </audio>
```

- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)

---
# 音频属性

- 可使用属性来定制音频播放功能
- 自动播放：autoplay
- 显示控制器：controls
- 循环播放：loop
- 静音：muted

---
# 音频属性： autoplay

- 布尔值属性
- 声明该属性，音频会尽快自动播放，不会等待整个音频文件下载完成。
- 可能破坏用户体验，尽可能避免
- 如果你一定要提供自动播放功能，应加入开关（让用户主动打开自动播放）

---
# 音频属性： autoplay

- 新版Chrome浏览器关闭了自动播放功能
- [解决方法](https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome)

---
# 音频属性：controls

- 布尔值属性
- 如果声明了该属性，浏览器将提供一个包含声音，播放进度，播放暂停的控制面板，让用户可以控制音频的播放

---
# 音频属性：loop

- 布尔属性
- 如果声明该属性，将循环播放音频

---
# 音频属性：muted

- 布尔值
- 表示是否静音

---
# 视频播放

- 类似音频，可以播放视频

```html
      <video autoplay="" loop="" muted="" src="flight.mp4" width="800" height="450">
        您的浏览器不支持嵌入式视频.
      </video>
```

- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

---

# 图片混合模式：mix-blend-mode

- 描述了元素的内容与直系父元素内容及元素背景如何混合。

  - multiply: 把每种颜色的值，转换到0-1，相乘
  - difference：差别

- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)

---
# 课堂练习

- 示例代码：<a href="html/1-av/audio-video.html">网页</a>，<a href="html/1-av.zip">下载（5MB）

---
# 练习

Project Portfolio
Begin by creating a new directory on i6 specifically for your work in this class. Call this directory “380” or “drawing”. Then, using HTML and CSS, create a distinctive portfolio page for your class work. This page should serve as a portal for the following assignments.

HTML and CSS
SVG
CSS Animation
Version Control and Collaboration
JavaScript
HTML Canvas
WebGL
Final Project
You should design the page to reflect your own aesthetic preferences including color, typography, graphics, and layout. Your name and the course title, “Drawing on the Web,” should also appear on the page. Over the course of the semester, as each assignment is completed—including the HTML and CSS drawing—you should add a link to it from here.

---
# 练习

HTML and CSS Drawing
The second part of this assignment is an opportunity for you to combine images and media in the browser to create an original, multilayered, HTML and CSS drawing. How you go about this is open to interpretation but here are a few requirements.

Create a new subdirectory of your “380” or “drawing” directory for this project.
Your drawing should take up the full browser window.
There should be multiple, separate layers of imagery on the page (i.e. foreground, background, and in-between).
Your drawing should include time-based media in the form of video or animation.
Your drawing should include background music or sound using the HTML audio element.
While the HTML and CSS code should be your own, feel free to incorporate found images and media into the project. This page is intended to be seen and experienced more than read; as such, you should limit HTML text on the page.

---
# 要求

Studentʼs portfolio page, in a dedicated subdirectory of their i6 account, with their name and navigational elements for this and future assignments (2 points)
The portfolio page should include CSS for font, color, and layout (2 points)
An original HTML and CSS drawing that occupies the full browser window (2 points)
At least two separate layers of imagery on the page (2 points)
Time-based media in the form of video or animation (1 point)
Background music or sound, using the HTML5 audio element (1 point)