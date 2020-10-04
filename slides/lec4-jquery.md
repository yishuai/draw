class: middle, center

# JQuery动画

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- 通过JQuery实现各种动画
- 还有很多好玩的SVG图

---
# 作品

- 先请大家欣赏一副作品
- 页面打开动画：渐入


[例：动画个人主页](../jquery/huangela/index.html)

???
- [SVG个人主页](https://huangela.github.io)

- [Github代码下载](https://github.com/huangela/huangela.github.io)

---
# 主页渐入

- 页面打开动画：渐入

<body class="animate-in"></body>

```css
.animate-in {
	animation: fadeIn 1s ease-in;
}
```
---
# SVG图标作为链接

- a 锚点的内容是 img

```html
<a href="index.html">
  <img id="homebutton"
    src="assets/img/avocado.svg">
</a>
```
---
# 图标移入动画

- 鼠标放到图标上，开始动画；移除时，结束动画
- hover() 方法
- 当鼠标指针悬停在被选元素上时要运行的两个函数
  - 移入，执行第一个函数
  - 移出，执行第二个函数
- 如果只指定一个函数，则移入和移出都执行它。

---
# hover() 方法

- 第一个：鼠标移到它上面，执行动画
- 第二个：鼠标从它上面移开，去掉动画

```js
$('#homebutton').hover(

  function() {
    $('#homebutton')
      .css('animation',
        'spin 1s ease-in-out infinite');
		},

  function(){
		$('#homebutton').css('animation', '');
	});
```

---
# 讨论

- 下面代码，产生什么效果？

```js
$("p").hover(

  function(){
    $("p").css("background-color","yellow");
  },

  function(){
    $("p").css("background-color","pink");
  });
```
---
# JQuery 动画

- 创建自定义的动画

```js
$(selector).animate({params},speed,callback);
```

- params：形成动画的 CSS 属性
- speed：速度，"slow"、"fast" 或毫秒。
- callback：动画完成后所执行的函数名称

---
# JQuery 动画

- 把 div 元素移动到左边，直到 left 属性等于 250 像素为止

```js
$("button").click(

  function(){
    $("div").animate({left:'250px'});
  });

```

- [W3school说明](https://www.w3school.com.cn/jquery/jquery_animate.asp)

---
# 图标移入，标题显示

- 鼠标移入图片，图片标题出现，移出消失
- 设定opacity

```js
$('#avotoast').hover(

  function() {
    $('#toastcaption').animate({'opacity': 1});
  },

  function(){
    $('#toastcaption').animate({'opacity': 0});
  });
```

---
# 图片点击，显示/隐藏

- 电脑屏幕，点一下出现，再点一下，消失

```js
$('#laptopscreen').on(

  'click',

  function() {
    if ($('#laptopscreen').css('opacity') == 0)
        $('#laptopscreen').css('opacity', 1);
    else
        ($('#laptopscreen').css('opacity', 0))
  });
```

---
# CSS动画效果

- keyframes 动画
- spin 旋转
- wiggle 摆动
- float 上下浮动

---
# 旋转

```css
@keyframes spin {
	0% {
		transform: rotate(360deg);
		animation-timing-function: ease-in-out;
	}

	100% {
		transform: rotate(-360deg);
		animation-timing-function: ease-in-out;
	}
}
```

---
# 摆动

```css
@keyframes wiggle {
0% { transform: rotate(0deg) translateY(0%); }
25% { transform: rotate(-2deg) translateY(-50px); }
50% { transform: rotate(0deg) translateY(0%); }
75% { transform: rotate(2deg) translateY(-50px); }
100% { transform: rotate(0deg) translateY(0%); }
}
```

---
# 浮动

```css
@keyframes float {
	0% { transform: translateY(5px); }
	50% { transform: translateY(0px); }
	100% { transform: translateY(5px); }
}
```

---
# 只响应一次

- one() 方法，添加一次性动画
- 只能运行一次事件处理函数
- 当点击 p 元素时，增加该元素的文本大小
  - 只会增加一次。再点，就不增加了。

```js
$("p").one(

  "click",
  function(){
    $(this).animate({fontSize:"+=6px"});
  });
```

- [W3school示例](https://www.w3school.com.cn/tiy/t.asp?f=jquery_event_one)

---

# 动画结束后，再来一次

```js
$('#homebutton').one(

  'webkitAnimationEnd oanimationend
      msAnimationEnd animationend',

	function(e) {
		$('#homebutton').css(
            'animation', 'spin 1s ease-in-out infinite');
		});
```

---
# 打字机效果

- JQuery Type it plugin

```js
<script src="https://cdn.jsdelivr.net/
  jquery.typeit/4.4.0/typeit.min.js"></script>
```

[网站](https://typeitjs.com/)

---
# 打字机效果

```js
	$("#name").typeIt({
		speed: 60,
		loop: false
	})

	.tiType("Hi, 我是")
	.tiPause(800)
	.tiDelete(14)
```

- type：打字
- pause：暂停（微秒）
- delete：字符个数。默认全部删除

---
# 练习1

- 请雷涵收集上周大家创造的SVG图片，分发给大家
- 修改index.html，为上周大家的SVG作业，设计一个虚拟的博物馆
- 要求
  - 鼠标放到某一位同学的作品上时，该作品会旋转，同时给出作品的相关信息（作者，名称），鼠标移开时，动画停止，信息消失

---
# 练习2

- 修改photography.html，为大家的摄影作业，设计一个主页
- 要求
    - 鼠标放到某一位同学的作品上时，该作品会放大，同时给出作品的相关信息，鼠标移开时，作品恢复原状，信息消失
- 加分项：加入WDD练习中，我们曾经练习过的，走马灯功能

---
# 练习3

- 修改about.html，介绍自己或实务学堂
- 要求
  - 使用课上介绍过的JQuery Type It库，添加动态效果

---
# 练习4：FCC JQuery

- [练习](https://learn.freecodecamp.one/front-end-libraries/jquery)

---
# JQuery 完全参考

- [W3school](https://www.w3school.com.cn/jquery/index.asp)
