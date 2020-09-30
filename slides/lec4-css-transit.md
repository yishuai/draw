class: middle, center

# CSS过渡和动画

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- CSS3过渡是一种使元素逐渐从一种样式变为另一种样式的效果
- 比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS transitions 后该元素的颜色将逐渐从白色变为黑色，按照一定的曲线速率变化

[对 Transform 运用过渡](../css-transition/transform-transite.html)

---
# Transition属性

- 要应用过渡，您必须指定
  - 哪些属性发生动画效果 (明确地列出这些属性)
  - 何时开始 (设置 delay）
  - 持续多久 (设置 duration)
  - 如何动画 (定义timing function，比如匀速地或先快后慢)。

```css
transition-property: transform;
transition-duration: 500ms;
transition-timing-function: cubic-bezier(.1, .9, .9, .5);
transition-delay: 250ms;
```

---
# 示例

[过渡](../css-transition/transition.html)

[对缩放运用过渡](../css-transition/scale.html)

[对透明度运用过渡](../css-transition/opacity.html)

---
# Transition 参考

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

[W3school CSS Transition](http://www.w3schools.com.cn/css3/css3_transitions.asp)

[CSS Tricks CSS Transition](https://css-tricks.com/almanac/properties/t/transition/)

---

# 动画

@keyframes规则是创建动画的位置

在@keyframes规则中指定CSS样式，动画将逐渐从当前样式更改为新样式


---

# 动画属性

@keyframes
animation
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state

---
# Vendor Prefixes

-webkit-
-moz-
-ms-
-o-

供应商前缀的目的是允许浏览器制造商支持实验性CSS声明
即使细节未标准化，也可以实施新属性

---
# 动画变换

0% {transform: translate(-400px, 300px); opacity: 0;}
33% {transform: translate(400px, 200px) rotate(0deg); opacity: 1;}

skate.html

---
# 动画完成后

- 保持住

animation-fill-mode: forwards;

- 回到原点

animation-fill-mode: backwards;

skate.html

---
# 2D旋转

@keyframes rotation {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

2d-rotate.html

---
# 3D旋转

cube，flower

@keyframes rotate {
  from {transform: rotateY(0deg);}
  to {transform: rotateY(360deg);}
}

---
# 动画停止

.cube:hover {
  animation-play-state: paused;
}

---
# SVG 动画

- 圆圈
- 画笔

---
# 参考

[W3school CSS 动画](http://www.w3schools.com.cn/css3/css3_animations.asp)
