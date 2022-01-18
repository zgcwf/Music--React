# 网易云音乐 PC 项目 React 实战

> 如果觉得不错，或者对你有帮助，点一个 star~

### 项目详解：

https://juejin.cn/post/7049924094652842020/

关于此项目的笔记全部写在了掘金的博客中，有需要可以去参考一下

### 项目简介:

使用 React 编写的云音乐 PC Web 项目，接口来源于开源的接口，自己已经做了部署。

项目已经完成功能如下：（你可以下载下来自己体验一下）

推荐页面：

- 轮播图
- 热门推荐
- 新碟上架
- 榜单
- 等等

![推荐页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9kwh3cqj31ck0p37uj.jpg)

![推荐页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghva5bx7bvj31d10p6thq.jpg)

歌曲播放：

- 目前做了榜单中歌曲的点击播放；
- 事实上其他页面只要将歌曲的 id 传入到 redux 中就可以，整个逻辑已经打通；
- 做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
- 做了播放循序切换：顺序播放、随机播放、单曲循环；
- 做了歌词的解析、展示、滚动；

![歌曲播放](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9pc3ki6j30ws0ahti8.jpg)

排行榜页面：

- 各种榜单的切换；

![排行榜页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9qjg0m4j31d10p4ai3.jpg)

歌单页面：

- 选择分类、选择分类后根据分类切换歌单；
- 根据分类，歌单列表的展示；
- 分页功能；

![歌单页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9rsp1stj31d10p44j2.jpg)

主播电台：

- 电台分类的展示、滚动；
- 不同分类展示不同的数据；
- 电台排行榜展示、分页；

![主播电台](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9sxt3nqj31d10p4k4s.jpg)

歌手页面：

- 各种歌手分类（没找到接口，还自定义了一些数据）
- 歌手字母分类、对应歌手展示；

![歌手页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9ts3h5dj31d10p4qfo.jpg)

新碟上架页面：

- 热门新碟；
- 全部新碟、分页展示；

![新碟上架页面](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghv9uryexgj31d10p4aue.jpg)

### 项目运行:

clone 项目：

```
git clone https://github.com/coderwhy/hy-react-web-music.git
```

安装项目依赖：

```shell
yarn install
```

项目运行：

```shell
yarn start
```
