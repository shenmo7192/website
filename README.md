# 星火商店官网
============

官网地址：https://www.spark-app.store/      
开发者：@maicss     
网站制作管理：@chaodn @Playhi @momen @jiwangyihao @时间世界  
UI概念设计师：@akliusizhe @qygwhk     

使用 [Docusaurus 2](https://docusaurus.io/) 构建开发。      


安装、编译和部署
===============

```sh
# 安装依赖
$ yarn install

# 本地开发
$ yarn start

# 打包编译，将会把静态文件生成到 build 目录下   
$ yarn build

# 部署到 github pages
GIT_USER=<Your GitHub username> yarn deploy
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

给后来维护者以及我以后的注释

在./src/components/content/index.js里面定义了文本内容，我将所有翻译文件放到了这里并用数组保存了，

<Translate>里面不能有jsx，编译时候会报错的

大部分的dom已经做到了，函数式的，很容易看懂，放到./src/components下了

每一次引入新的translate 就运行

```sh
yarn run write-translations --locale en
yarn run write-translations --locale zh-CN
```

用过qt国际化的朋友都会很熟悉的，然后编辑json文件就可以了

大部分地方都没有写注释，理论上javascript是必须写的，因为javascript很屑，但是这是个小项目就不写了

## 目录结构

static里面放的是各种图片，因为这个工具只允许放这里，其他地方编译时候不会使用的

src是源码，page是几个网页，component里面放的是各种可以复用的dom，css里面放的是css和scss，这个都知道

在根目录下有个文件叫docusaurus.config.js的，baseUrl是网站运行时候挂的位置，我因为github-page 分给了我这个位置我就只能定义到这里，如果使用时候挂到根目录，就用"/"
