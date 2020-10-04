class: middle, center

# Javascript

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

JavaScript程序可能会通过称为DOM的数据结构检查并干扰浏览器正在显示的文档。这种数据结构表示浏览器的文档模型，JavaScript程序可以对其进行修改以更改可见的文档。

DOM像一棵树一样组织，其中元素根据文档的结构分层排列。表示元素的对象具有诸如parentNode和childNodes之类的属性，可用于在该树中导航。

可以通过样式影响文档的显示方式，既可以将样式直接附加到节点上，也可以定义与某些节点匹配的规则。有许多不同的样式属性，例如颜色或显示。 JavaScript代码可以直接通过其style属性来操纵元素的样式。

---
# 示例

机场

let navImages = document.querySelectorAll('.cloud');
function lgaImage() {
  mainImage.src = 'images/lga.jpg';
}
navImages[0].addEventListener('click', lgaImage);

js/airports/index.html

https://github.com/jclayton/airports

---
# DOM Tree

- 文档对象模型 （Document Object Model）
- 当浏览器加载网页时，它会创建该网页的模型
- 该模型被称为“DOM树”，存储在浏览器的内存中
- HTML中的每个元素，属性和文本都由其自己的“DOM节点”表示

.center[.width-100[![](../js/dom.jpeg)]]

???
When a browser loads a web page, it creates a model of that page
This is called a “DOM tree” and it is stored in the browser’s memory
Every element, attribute, and piece of text in the HTML is represented by its own “DOM node”

---
# DOM 节点类型

- 四种类型节点
- 文档节点，代表整个页面
- 元素节点，代表单个HTML标签
- 属性节点，代表HTML标签的属性，例如class
- 文本节点，表示元素内的文本，例如p标签的内容

.center[.width-100[![](../js/dom.jpeg)]]

每个DOM节点对象都有一个nodeType属性，该属性包含标识节点类型的代码（数字）。
元素具有代码1，该代码也定义为常量属性Node.ELEMENT_NODE。
表示文档中一部分文本的文本节点获得代码3（Node.TEXT_NODE）。
注释的代码为8（Node.COMMENT_NODE）。

甚至为节点之间的空白创建文本节点。示例文档的<body>标记不仅有3个子元素（<h1>和2个<p>元素），而且实际上有7个：这3个元素，以及它们之前，之后和之间的空格。
---
# 元素节点关系

- “父母” parent
- “孩子” children
- “兄弟姐妹” siblings

.center[.width-100[![](../js/html-boxes.svg)]]

.center[.width-100[![](../js/html-tree.svg)]]


???

There are four main types of nodes.
-  The Document node, which represents the entire page
-  Element nodes, which represent individual HTML tags
-  Attribute nodes, which represent attributes of HTML tags, such as class
-  Text nodes, which represents the text within an element, such as the content of a p tag
We talk about the relationship between element nodes as “parents,” “children,” and “siblings.”

---
# 在DOM树上移动

DOM节点包含指向附近其他节点的大量链接。

尽管该图仅显示每种类型的一个链接，但是每个节点都有一个parentNode属性，该属性指向该节点所属的节点（如果有）。同样，每个元素节点（节点类型1）都有一个childNodes属性，该属性指向保存其子级的类似数组的对象。

firstChild和lastChild属性指向第一个和最后一个子元素，或者对于没有子节点的节点，其值为null。同样，previousSibling和nextSibling指向相邻节点，它们是具有相同父级的节点，紧接在节点本身之前或之后。对于第一个孩子，previousSibling将为null，对于最后一个孩子，nextSibling将为null。

还有children属性，就像childNodes一样，但仅包含元素（类型1）子元素，而不包含其他类型的子节点。当您对文本节点不感兴趣时​​，这很有用。

.center[.width-100[![](../js/html-links.svg)]]


---
# 递归

当处理像这样的嵌套数据结构时，递归函数通常很有用。
以下函数扫描文档以查找包含给定字符串的文本节点，并在找到一个字符串时返回true：

function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, "book"));
// → true

文本节点的nodeValue属性保存其表示的文本字符串。

---

# 步骤

- .red[选择脚本要响应的元素]
- 指定哪个事件将触发响应
- 运行事件的代码

---

# DOM查询

- 在DOM树中找到元素的JavaScript方法称为“ DOM查询”
- DOM查询可能返回一个元素，也可能返回“节点列表”
- 使用哪种DOM查询取决于您要执行的操作以及浏览器支持范围

let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

???

JavaScript methods that find elements in the DOM tree are called “DOM queries”
DOM queries may return one element, or they may return a “node list”
Which DOM query you use depends on what you want to do and the scope of browser support required

---

# DOM查询

- 返回单个元素节点的JavaScript方法
  -  getElementById()
  -  querySelector()

```js
let paragraph = document.getElementById('text');
console.log(paragraph);
```

---

# DOM查询

- 返回一个或多个元素作为节点列表的JavaScript方法
  -  getElementsByClassName()
  -  getElementsByTagName()
  -  querySelectorAll()

// 访问按钮
let buttons = document.querySelectorAll('svg.btn');
let cyanBtn = buttons[0];

// 访问网页背景
let background = document.querySelector('body');

[Basic](../js/color/colors.js)

---
# 实时

由诸如getElementsByTagName之类的方法（或诸如childNodes之类的属性）返回的节点列表是活动的。也就是说，它随着文档的更改而更新。

如果您想要一个可靠的节点集合（而不是实时节点），则可以通过调用Array.from将集合转换为真实数组。

let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// → ["ONE", "TWO"]


---
# 修改文档

- 节点具有remove方法，可将其从当前父节点中删除。
- 要将子节点添加到元素节点，可以使用appendChild（将其放在子列表的末尾），或使用insertBefore（将作为第一个参数指定的节点插入在作为第二个参数指定的节点之前）。

<p>One</p>
<p>Two</p>
<p>Three</p>

<script>
  let paragraphs = document.body.getElementsByTagName("p");
  document.body.insertBefore(paragraphs[2], paragraphs[0]);
</script>

---
# 移动节点

一个节点只能在文档中的一个地方存在。因此，在第一个段落的前面插入第三个段落将首先将其从文档末尾删除，然后将其插入到前面，得到第三个/一个/两个。副作用是，所有在某个位置插入节点的操作都会导致将其从当前位置删除（如果有的话）。

---
# 替换节点

replaceChild方法用于将一个子节点替换为另一个子节点。它以两个节点为参数：新节点和要替换的节点。替换的节点必须是调用该方法的元素的子元素。请注意，replaceChild和insertBefore都将新节点作为其第一个参数。

---
# 创造节点

Text nodes are created with the document.createTextNode method.

if (image.alt) {
  let text = document.createTextNode(image.alt);
  image.parentNode.replaceChild(text, image);
}

To create element nodes, you can use the document.createElement method. This method takes a tag name and returns a new empty node of the given type.

let node = document.createElement(type);

---
# 设置和获得属性

getAttribute and setAttribute

<p data-classified="secret">The launch code is 00000000.</p>
<p data-classified="unclassified">I have two feet.</p>

<script>
  let paras = document.body.getElementsByTagName("p");
  for (let para of Array.from(paras)) {
    if (para.getAttribute("data-classified") == "secret") {
      para.remove();
    }
  }
</script>

建议将此类虚构属性的名称加上数据前缀，以确保它们不与任何其他属性冲突。

---
# 设置Class

有一个常用的属性class，它是JavaScript语言中的关键字。由于历史原因（某些旧的JavaScript实现无法处理与关键字匹配的属性名称），用于访问此属性的属性称为className。您也可以使用getAttribute和setAttribute方法以其真实名称“class”访问它。

event.target.className = "opaque";

js/opacity/opacity.html

images[i].className = 'semitransparent';

---
# 火箭说明书

document.getElementById(partID).classList.toggle('hidden');

js/amg2318/index.html

---
# 根据日期，设置暗模式

let hour = new Date().getHours();

const header = document.querySelector('h1 > a');

if (hour >= 18 || hour < 6) {

  header.className = 'dark'

js/seasons/index.html

---
# 元素大小

offsetWidth and offsetHeight properties give you the space the element takes up in pixels.

clientWidth and clientHeight give you the size of the space inside the element, ignoring border width.

<p style="border: 3px solid red">
  I'm boxed in
</p>

<script>
  let para = document.body.getElementsByTagName("p")[0];
  console.log("clientHeight:", para.clientHeight);
  console.log("offsetHeight:", para.offsetHeight);
</script>

---
# 元素位置

在屏幕上查找元素的精确位置是getBoundingClientRect方法。它返回一个具有top，bottom，left和right属性的对象，指示相对于屏幕左上角的元素侧面的像素位置。

如果希望它们相对于整个文档，则必须添加当前滚动位置，您可以在pageXOffset和pageYOffset绑定中找到它们。

---
# 风格设置

<script>
  let para = document.getElementById("para");
  console.log(para.style.color);
  para.style.color = "magenta";
</script>

某些样式属性名称包含连字符，例如font-family。由于此类属性名称在JavaScript中难以使用（您必须说style [“ font-family”]），因此样式对象中此类属性的属性名称会删除连字符，并在其后大写字母（style.fontFamily）。

---
# CSS选择器

在文档对象和元素节点上都定义的querySelectorAll方法采用选择器字符串并返回一个NodeList，其中包含与其匹配的所有元素。

与getElementsByTagName之类的方法不同，querySelectorAll返回的对象不是活动的。更改文档时不会更改。但是，它仍然不是真正的数组，因此，如果您想将其视为一个，则仍需要调用Array.from。

querySelector方法（不包含All）的工作方式类似。如果您想要一个特定的单个元素，则此选项很有用。它将仅返回第一个匹配的元素；如果没有元素匹配，则返回null。

---
# 练习

Build a table

An HTML table is built with the following tag structure:

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>

对于每一行，<table>标记包含一个<tr>标记。在这些<tr>标记内，我们可以放置单元格元素：标题单元格（<th>）或常规单元格（<td>）。

给定一个山脉数据集，包含名称，高度和位置属性，的对象数组，自动生成表格的DOM结构。

每个键应具有一列，每个对象应具有一行，并在顶部具有一个<th>元素的标题行，列出列名。

编写该代码，以便通过采用数据中第一个对象的属性名称，自动从对象派生列。

将结果表添加到id属性为“mountains”的元素中，以使其在网页中可见。

完成此工作后，将包括数字的格子的样式 style.textAlign 设置为“right”，使数字右对齐。

---
# 起始代码

<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here
</script>

---
# 提示

您可以使用document.createElement创建新的元素节点，使用document.createTextNode创建文本节点，并使用appendChild方法将节点放入其他节点。

您需要遍历键名以填充第一行（列名），然后再次遍历数组中的每个对象以构造数据行。

要从第一个对象获取键名数组，Object.keys将很有用。

要将表添加到正确的父节点，可以使用document.getElementById或document.querySelector查找具有正确id属性的节点。

---
# 参考

[W3school DOM](https://www.w3school.com.cn/js/js_htmldom.asp)

https://eloquentjavascript.net/14_dom.html