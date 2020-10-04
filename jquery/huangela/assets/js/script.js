$(document).ready(function() {

	// PAGE FADE IN/OUT TRANSITION
	window.addEventListener("beforeunload", function () {
	  document.body.classList.add("animate-out");
	});

	$('#homebutton').hover(function() {
		$('#homebutton').css('animation', 'spin 1s ease-in-out infinite');
		$('#homebutton').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#homebutton').css('animation', 'spin 1s ease-in-out infinite');
		});
	}, function(){
		$('#homebutton').css('animation', '');
	});

	$('#laptopscreen').on('click', function() {
		if ($('#laptopscreen').css('opacity') == 0) $('#laptopscreen').css('opacity', 1);
		else ($('#laptopscreen').css('opacity', 0))
	});

	$('#iphoneon').on('click', function() {
		if ($('#iphoneon').css('opacity') == 0) $('#iphoneon').css('opacity', 1);
		else ($('#iphoneon').css('opacity', 0))
	});

	$('#iphoneon').on('click', function() {
		if ($('#phonecaption').css('opacity') == 0) $('#phonecaption').css('opacity', 1);
		else ($('#phonecaption').css('opacity', 0))
	});

	$('iphoneon').hover(function() {
		$('#phonecaption').animate({'opacity': 1});
		$('#iphoneon').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {});
	},
		function() {
			$('#phonecaption').animate({'opacity': 0});

	});

	$('#avotoast').hover(function() {
		$('#avotoast').css('animation', 'spin 2s ease-in-out infinite');
		$('#toastcaption').animate({'opacity': 1});
		$('#avotoast').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#avotoast').css('animation', 'spin 2s ease-in-out infinite');
		});
	}, function(){
		$('#avotoast').css('animation', '');
		$('#toastcaption').animate({'opacity': 0});

	});

	$('#tea').hover(function() {
		$('#tea').css('animation', 'spin 2s ease-in-out infinite');
		$('#teacaption').animate({'opacity': 1});
		$('#tea').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#tea').css('animation', 'spin 2s ease-in-out infinite');
		});
	}, function(){
		$('#tea').css('animation', '');
		$('#teacaption').animate({'opacity': 0});
	});


	$('#notebook').hover(function() {
		$('#notebook').css('animation', 'wiggle 1s ease-in-out infinite');
		$('#bookcaption').animate({'opacity': 1});
		$('#notebook').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#notebook').css('animation', 'wiggle 1s ease-in-out infinite');
		});
	}, function(){
		$('#notebook').css('animation', '');
		$('#bookcaption').animate({'opacity': 0});
	});

	$('#pen2').hover(function() {
		$('#pen2').css('animation', 'spin 1.5s ease-in-out infinite');
		$('#pen1').css('animation', 'spinreverse 1.5s ease-in-out infinite');
		$('#pen2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#pen2').css('animation', 'spin 1.5s ease-in-out infinite');
		});
	}, function(){
		$('#pen2').css('animation', '');
		$('#pen1').css('animation', '');

	});

	// BLURB
	$("#name").typeIt({
		speed: 60,
		loop: false
	})

	.tiType("Hi, 我是帅蚪")
	.tiPause(800)
	.tiDelete(14)

	.tiPause(800)
	.tiType("我的专业是计算机科学")
	.tiPause(800)
	.tiDelete(16)

	.tiPause(800)
	.tiType("辅修设计")
	.tiPause(800)
	.tiDelete(25)

	.tiPause(800)
	.tiType("我爱死SVG了")
	.tiPause(800)
	.tiDelete(16)

	.tiPause(800)
	.tiType("因为它能动")
	.tiPause(800)
	.tiDelete(23)

	.tiPause(800)
	.tiType("我也爱大骨头")
	.tiPause(800)
	.tiDelete(30)

	.tiType("别忘了我哦！")
	.tiPause(1000)
});