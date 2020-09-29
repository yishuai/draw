class: middle, center

# JQuery

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

- JQuery真的是什么都能干
- 本节我们学习如何通过用JQuery，实现各种动画（还有很多好玩的SVG图）

---
# 作品

- 先请大家欣赏一副作品
- [SVG个人主页](https://huangela.github.io)
- [Github代码下载](https://github.com/huangela/huangela.github.io)

---
# 主页渐入

<body class="animate-in"></body>

.animate-in {
	animation: fadeIn 1s ease-in;
}

---
# SVG图标链接

<a href="index.html"> <img id="homebutton" src="assets/img/avocado.svg"></a>

---
# hover按钮动画JS添加

- 鼠标移到按钮上，就动；移出，就不动

$('#homebutton').hover(
    function() {
		$('#homebutton').css('animation', 'spin 1s ease-in-out infinite');
		},
    function(){
		$('#homebutton').css('animation', '');
	});

---
# jQuery hover() 方法

- 当鼠标指针悬停在被选元素上时要运行的两个函数
- 移入，执行第一个函数
- 移出，执行第二个函数
- 如果只指定一个函数，则移入和移出都执行它。

---
# 练习

- 下面的代码，产生什么效果？

$("p").hover(function(){
    $("p").css("background-color","yellow");
},function(){
    $("p").css("background-color","pink");
});

---
# hover图片标题动画

- 鼠标移入图片，图片标题出现，移出消失

	$('#avotoast').hover(function() {
		$('#toastcaption').animate({'opacity': 1});
	}, function(){
		$('#toastcaption').animate({'opacity': 0});
	});

---
# 图片点击显示/隐藏

$('#laptopscreen').on('click', function() {
    if ($('#laptopscreen').css('opacity') == 0)
        $('#laptopscreen').css('opacity', 1);
    else
        ($('#laptopscreen').css('opacity', 0))
});

---
# CSS动画效果

- keyframes
  - spin 旋转
  - wiggle 摆动
  - float 上下浮动

---
# JQuery one 添加一次性动画

- 为被选元素附加一个或多个事件处理程序，并规定当事件发生时运行的函数
- 每个元素只能运行一次事件处理器函数

$("p").one("click",function(){
  $(this).animate({fontSize:"+=6px"});
});

- [W3school](https://www.w3school.com.cn/jquery/event_one.asp)

---

# JQuery one 动画结束后，再来一次

$('#homebutton').one('
        webkitAnimationEnd
        oanimationend
        msAnimationEnd
        animationend',
	function(e) {
		$('#homebutton').css(
            'animation', 'spin 1s ease-in-out infinite');
		});

---
# JQuery 动画

创建自定义的动画

$(selector).animate({params},speed,callback);
必需的 params 参数定义形成动画的 CSS 属性。

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是动画完成后所执行的函数名称。

下面的例子演示 animate() 方法的简单应用；它把 <div> 元素移动到左边，直到 left 属性等于 250 像素为止：

实例
$("button").click(function(){
  $("div").animate({left:'250px'});
});

- [W3school](https://www.w3school.com.cn/jquery/jquery_animate.asp)

---
# JQuery 完全参考

- [W3school](https://www.w3school.com.cn/jquery/index.asp)

---
# FCC JQuery练习

- [练习](https://learn.freecodecamp.one/front-end-libraries/jquery)

---
# JQuery Type it plugin

<script src="https://cdn.jsdelivr.net/jquery.typeit/4.4.0/typeit.min.js"></script>

[网站](https://typeitjs.com/)
- type：字符串
- delete：字符个数。默认全部删除
- pause：微秒

```js
	$("#name").typeIt({
		speed: 60,
		loop: false
	})

	.tiType("Hi, 我是")
	.tiPause(800)
	.tiDelete(14)

```

---
# 练习

- 请雷涵收集上周大家创造的SVG图片，分发给大家
- 练习1：修改index.html，为上周大家的SVG作业，设计一个虚拟的博物馆
  - 要求：鼠标放到某一位同学的作品上时，该作品会旋转，同时给出作品的相关信息（作者，名称），鼠标移开时，动画停止，信息消失
- 练习2：修改photography.html，为大家的摄影作业，设计一个主页
  - 要求1：鼠标放到某一位同学的作品上时，该作品会放大，同时给出作品的相关信息，鼠标移开时，作品恢复原状，信息消失
  - 加分项：加入WDD练习中，我们曾经练习过的，走马灯功能
- 练习3：修改about.html，介绍自己或实务学堂
  - 要求：使用课上介绍过的JQuery Type It库，添加动态效果