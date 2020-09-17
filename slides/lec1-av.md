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