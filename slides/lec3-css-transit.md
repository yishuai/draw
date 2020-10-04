class: middle, center

# CSS过渡

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- CSS3过渡使元素从一种样式逐渐变为另一种样式
  - 比如，将一个元素的颜色从白色改为黑色
  - 使用过渡后，该元素的颜色将逐渐从白色变为黑色
  - 可以设定过渡的速率

[例：对旋转变换运用过渡](../css-transition/transform-transite.html)

---
# 过渡的控制

- 可以指定
  - 哪些变化运用过渡（property 属性）
  - 持续多久 (duration 时长)
  - 过渡速度 (timing function，比如匀速，先快后慢)。
  - 何时开始 (delay 延时）

```css
transition-property: transform, background-color;
transition-duration: 500ms;
transition-timing-function: cubic-bezier(.1, .9, .9, .5);
transition-delay: 250ms;
```

---
# 例： 对变换运用过渡

```css
.compass {
  padding: 5px;
  transition-property: transform;
  transition-duration: 500ms;
}

.c1:hover {
  transform: rotate(90deg);
}
```

[例：对旋转运用过渡](../css-transition/transform-transite.html)

[例：对缩放运用过渡](../css-transition/scale.html)

---
# 例：对透明度运用过渡

```css
img {
  opacity: 0.4;
  transition: opacity 0.5s;
}

img:hover {
  opacity: 1;
}
```

[对透明度运用过渡](../css-transition/opacity.html)

---
# 例：对背景色和变换都运用过渡

```css

.shape {
  transition-property: background-color transform;
}

.shape:hover {
  background-color: black;
  transform: translateX(25px);
}

```

[例：同时多个变化过渡](../css-transition/transition.html)

---
# 例：过渡属性简写

- all：对所有变化都运行过渡

```css
.shape {
  transition: all 500ms ease 0s;*/
}
```

- 对所有（all）可设置动画的属性，运用过渡
- 过渡时间：500毫秒
- 采用默认的缓动（ease）效果
- 无延迟

[例：同时多个变化过渡](../css-transition/transition.html)

---
# 例：同时多个转换（简写）

```css
.shape {
  transition: background-color 2s ease-in, transform 2s ease-out 100ms;
}
```

[例：同时多个变化过渡](../css-transition/transition.html)

---
# 参考

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

[W3school CSS Transition](http://www.w3schools.com.cn/css3/css3_transitions.asp)

[CSS Tricks CSS Transition](https://css-tricks.com/almanac/properties/t/transition/)

---
# 练习

- 在上次莲花的作业中，加入以下两个过渡效果
  - 当鼠标移到莲花上时，莲花会逆时针旋转360度，过渡时间5秒
  - 当鼠标移到莲花上时，莲花会朝你飞过来，过渡时间5秒
