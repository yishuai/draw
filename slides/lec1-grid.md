class: middle, center

# CSS Grid

陈一帅

[yschen@bjtu.edu.cn](mailto:yschen@bjtu.edu.cn)

实务学堂

.footnote[Web前端]
---
# 介绍

- Grid 网格
- 像网格一样，按行或列来对齐元素
- 网格容器的子元素可以在表格中定位
- 可以重叠，形成层次。

- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)

---
# 列的设置

- 定义几列，每列的宽度
  - grid-template-columns
- 弹性单位 fr
  - 非负值，定义网格大小的弹性系数
  - 每个定义了 fr 的列会按比例分配剩余的可用空间

- 重复：repeat(3, 1fr)
  - 表示大量而且重复列的表达式

- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns)

---
# 行的设置

- 设置行高
  - grid-auto-rows
- minmax(min, max)
  - 定义行高范围
  - 大于等于min值，小于等于max值
  - 如果max值小于min值，则该值会被视为min值

- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-rows)

---
# 元素定位

- 网格容器的子元素可以在表格中定位
- 两种方式
  - 设置起始结束位置
  - 设置区域

---
# 设置起始结束位置

- 列
  - grid-column-start
  - grid-column-end
- 行
  - grid-row-start
  - grid-row-end
- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-start)

---
# 设置区域

- 设置区域地图
  - grid-template-areas
- 指定元素的区域
  - grid-area
- [MDN手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)

---
# 课堂练习

- <p>示例代码：<a href="html/2-grid/grid-basic.html">Grid基础</a>，<a href="html/2-grid/grid-template.html">Grid模板</a>，<a href="html/2-grid.zip">下载（1KB）</a></p>
