/*
JavaScript Basics
*/

// 写入控制台
console.log('你好!');

// 给新变量赋值
let student = '罗家祥';
let year = 2019;
let semester = '春节';

/* 运算符

+
-
*
/
++
--
=

*/

// 连接字符串
let message = student + ' 将毕业于 ' + year;
console.log(message);

// HTML元素是字符串
var htmlElement = '<img src="cat.png">';

// JavaScript数组
let students = [
  '莱拉',
  '艾玛',
  '扎克',
  '亚历克斯',
  '斯蒂芬妮'
];

// 计数控制的循环
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log(student);
}

// 访问数组中的项目
let firstStudent = students[0];
console.log(firstStudent);

/* 比较运算符

<
>
<=
>=
!=
==
===
!==
&&
||

*/

// 递归
function 幂(底数, 指数) {
  if (指数 == 0) {
    return 1;
  } else {
    return 底数 * 幂(底数, 指数 - 1);
  }
}

幂(2, 1)
