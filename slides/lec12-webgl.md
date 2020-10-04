class: middle, center

# WebGL

陈一帅

实务学堂

.footnote[Web前端]

---
# 介绍

---
# 3D图形

我们在三个维度上体验世界，并且越来越多的基于屏幕的媒体以3D呈现
3D图形自1960年代开始出现，但需要具有特殊软件的高级计算机
如今，几乎所有新的计算机和移动设备都集成了3D处理硬件
此外，用于渲染3D的软件现在无处不在：Web浏览器

---
# 坐标系统 （Coordinate）

3D图形数据以笛卡尔坐标系表示
除了“x”和“y”轴外，“z”值还描述了深度
2D Canvas（和CSS）坐标与WebGL之间的主要区别是“y”从窗口的底部开始，然后增加到顶部
这种区别源于WebGL的历史惯例是y-up和HTML是y-down

---
# 网格（Mesh）

绘制3D图形的最常见方法是mesh
mesh由一个或多个由顶点（x，y，z）构成的多边形形状组成，定义了空间中的坐标位置
网格中最常用的多边形是三角形和矩形
3D网格通常称为“models”

---
#

wikipedia.org/wiki/File:Dolphin_triangle_mesh.png

---
# 材料

Material通常用于描述物体的表面属性
这可以简单到纯色，也可以更复杂，例如有光泽的反射表面
还可以使用位图图像来应用表面信息以创建纹理textures


---
# 光

Light定义如何照亮表面
没有光源，很难感知深度等3D属性
3D图形在给定场景中可以具有一个或多个光源

---
# 相机

3D场景需要一个视角来体验它们
“camera摄像机”定义了相对于场景，观看者所处的位置
相机的其他属性包括视野，该视野定义了视角
最终的3D图像被渲染到2D“viewport”中-窗口或画布


---
# Shader

您计算机的图形硬件可以理解顶点和纹理，但仅此而已
3D场景的其他方面（材质，灯光，相机）需要进行解释
“着色器shader”是程序的一部分，它将网格物体的像素获取到屏幕上
着色器功能非常强大，但是我们将依靠JavaScript库来完成这一部分

---
# WebGL

WebGL是Web的标准3D图形API，由Mozilla工程师Vladimir Vukićević于2006年发起
它允许开发人员使用JavaScript从浏览器内部利用计算机3D渲染硬件的功能。
当前所有主要的台式机浏览器均支持WebGL。越来越多的移动浏览器也支持WebGL
WebGL是底层绘图API

---
# Three.js

Three.js是用于WebGL的JavaScript工具包，可提供对API的更高级访问
它最初是由Ricardo Cabello于2010年通过GitHub发布的，也被称为“ Mr.doob”，并由其他three.js作者积极维护
Three.js受MIT的免费软件许可约束，可以在各种类型的项目中使用和重用
threejs.org

开始之前
在开始使用three.js之前，你需要一个地方来显示它。将下列HTML代码保存为你电脑上的一个HTML文件，同时将three.js复制到该HTML文件所在的目录下的js/目录下，然后在你的浏览器中打开这个HTML文件。

https://threejs.org/build/three.js

---
# 创建一个场景

var scene = new THREE.Scene();

https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene

---
# 相机

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

PerspectiveCamera（透视摄像机）。

第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的值是角度单位。

第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。

接下来的两个参数是近截面（near）和远截面（far）。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

---
# 渲染器

施展魔法的地方。

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

---
# DOM添加

document.body.appendChild( renderer.domElement );

将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的<canvas>元素。

---
# 立方体

var geometry = new THREE.BoxGeometry();

一个BoxGeometry（立方体）对象. 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces）。未来我们将在这方面进行更多的探索。

---
# 材质

var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

接下来，对于这个立方体，我们需要给它一个材质，来让它有颜色。Three.js自带了几种材质，在这里我们使用的是MeshBasicMaterial。所有的材质都存有应用于他们的属性的对象。在这里为了简单起见，我们只设置一个color属性，值为0x00ff00，也就是绿色。这里所做的事情，和在CSS或者Photoshop中使用十六进制(hex colors)颜色格式来设置颜色的方式一致。

---
# 网格

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

第三步，我们需要一个Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。

---
# 位置

camera.position.z = 5;

默认情况下，当我们调用scene.add()的时候，物体将会被添加到(0,0,0)坐标。但将使得摄像机和立方体彼此在一起。为了防止这种情况的发生，我们只需要将摄像机稍微向外移动一些即可。

---
# 动画渲染场景

现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“渲染循环”（render loop）或者“动画循环”（animate loop）的东西。

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

创建一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）。

如果你是一个浏览器游戏开发的新手，你或许会说“为什么我们不直接用setInterval来实现刷新的功能呢？”当然啦，我们的确可以用setInterval，但是，requestAnimationFrame有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。

---
# 使立方体动起来

animate()函数中renderer.render调用的上方：

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

这段代码每帧都会执行（正常情况下是60次/秒），这就让立方体有了一个看起来很不错的旋转动画。

基本上来说，当应用程序运行时，如果你想要移动或者改变任何场景中的东西，都必须要经过这个动画循环。

当然，你可以在这个动画循环里调用别的函数，这样你就不会写出有上百行代码的animate函数。

17-basic.html

---
#

.center[.width-100[![](./figures/all/image_ml.jpg)]]

---
# 八面几何体（OctahedronGeometry）

一个用于创建八面体的类。

geometry = new THREE.OctahedronGeometry(200, 0); // radius, additional vertices

https://threejs.org/docs/#api/zh/geometries/OctahedronGeometry

线框材质
  material = new  THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});

17-octahedron.html

---
# 球几何体（SphereGeometry）

一个用于生成球体的类。

geometry = new THREE.SphereGeometry(100, 50, 50); // radius, additional vertices x and y

https://threejs.org/docs/#api/zh/geometries/SphereGeometry

---

# 平面几何体（PlaneGeometry）

一个用于生成平面几何体的类。

let floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10); // x, y, vertices

https://threejs.org/docs/#api/zh/geometries/PlaneGeometry

17-sphere-plane.html

---
# 轨道控制器（OrbitControls）

Orbit controls（轨道控制器）可以使得相机围绕目标进行轨道运动。
要使用这一功能，就像在/examples（示例）目录中的所有文件一样， 您必须在HTML中包含这个文件。

controls = new THREE.OrbitControls(camera, renderer.domElement);

17-sphere-plane.html

---
# 平行光（DirectionalLight）

平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果; 太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。

let light = new THREE.DirectionalLight(0xffffff, 1); // color, intensity

webgl/17-sphere-light.html

---
# 点光源（PointLight）

从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。

let pointLight = new THREE.PointLight(0xff00ff, 1, 1000); // color, intensity, distance

webgl/17-sphere-light.html

---
# 图片材质

let spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000); // color, intensity, distance

spotlight.castShadow = true;

let textureLoader = new THREE.TextureLoader();
textureLoader.load('marble.jpg', function(texture)

18-geometry.html （注意用VS Code的Live Server打开）

---
# 立体材质

let torusGeometry = new THREE.TorusGeometry(75, 25, 25, 100);

scene.background = new THREE.CubeTextureLoader()

18-landscape.html

http://www.humus.name/index.php?page=Textures

http://howintheworld.com/textures/

---
# 随机高度

let material = new THREE.MeshLambertMaterial({wireframe: true, color: 0xffffff, side: THREE.DoubleSide});

mesh.geometry.vertices.length

19-random-vertices.html

---
# terrain.party 网站

http://terrain.party/

The easiest way to get real-world height maps for Cities: Skylines

---
# 雾

scene.fog = new THREE.Fog(0xffffff, 1, 1000);

19-height-map-texture-fog.html

---
# 高度图地形线框

let material = new THREE.MeshLambertMaterial({wireframe: true, color: 0xffffff, side: THREE.DoubleSide});

mesh.geometry.vertices[i].z = data[i * 4];

19-height-map.html

---

# 视频

20-dimensional-collage.html

---
#

let loader = new THREE.GLTFLoader();

loader.load(
    // path to the model
    'buddha/scene.gltf',
    // function to call when the resource is loaded
    function(gltf) {
      model = gltf.scene;
      scene.add(model);

      gltf.animations;
      gltf.scene;
      gltf.scenes;
      gltf.cameras;
      gltf.assets;

      model.rotation.z = .04;
      model.position.z = -10;
    }
  );

20-load-3d-model.html

---
# 编辑器

https://threejs.org/editor/

---
# 练习

使用WebGL和three.js JavaScript库将自定义3D几何图形绘制到网页上。

使用说明
使用three.js，创建一个WebGL场景，该场景在二维或三维上下文中为3D几何图形设置动画。上下文可以是天空盒，水平面，星座或仅是二维网页。您创建的对象应该比three.js形状基元之一更复杂。因此，建议您使用3D图形软件（例如three.js编辑器）创建网格。通过在three.js中组合形状图元，也可以创建更复杂的表单。随时适应现有的2D图像或3D模型。

您的项目页面应至少包含一个3D模型，材质，基本动画，照明和阴影。

???
draw custom 3D geometry to a web page using WebGL with the three.js JavaScript library.

Instructions
Using three.js, create a WebGL scene that animates 3D geometry in a two- or three-dimensional context. The context could be a skybox, a surface plane, a constellation, or just a two-dimensional web page. The object you create should be more complex than one of the three.js shape primitives. As such, you are encouraged to create your mesh with 3D graphics software, such as the three.js editor. It’s also possible to create more complex forms by combining shape primitives in three.js. Feel free to adapt from an existing 2D image or 3D model.

Your project page should include at least one 3D model, material, basic animation, lighting, and shadow.

---
# 要求

至少一个自定义3D几何对象（3个点）
物件材质（2分）
与（2分）有关的对象存在的上下文
基本动画（1分）
照明（1分）
暗影（1分）

???
At least one custom 3D geometric object (3 points)
Object material (2 points)
A context for the object to exist in relation to (2 points)
Basic animation (1 point)
Lighting (1 point)
Shadow (1 point)