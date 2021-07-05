---
sidebar_position: 1
---

分发概述
========

目前来讲, 分发的资源主要有三种: deb包, 软件json信息, 和图标截图png, 它们的特点分别如下.

- deb包: 最消耗流量和带宽的一种资源, 要求速度够快, 不断开连接, 且不同地区, 不同网络的用户都可以使用
- 软件json信息: 即.json后缀的文件, 包含了软件的基本信息, 几乎不耗费流量, 但要求响应速度快, 且支持跨域
- 图标截图png: 消耗流量中等(每天1GB?), 带宽要求不高, 也不要求跨域


## 当前方案

### 软件json信息

挂在一个BGP5线的5M阿里云上

### 图标截图png

github+jsdelivr cdn

### Deb

Deb的分发顺带分发了静态页面

#### sucdn.jerrywang.top

![](https://ae01.alicdn.com/kf/U15b2a02f9f254fcdac7b5f1ddd7becear.jpg)

#### store.jerrywang.top
![](https://ae01.alicdn.com/kf/Ub6e76502a4bb438490a7817db206f96eO.jpg)


#### cfcdn.jerrry.wang

国外服务器+CloudFlare自选节点CDN

#### dcstore.spark-app.store

直连国外服务器

