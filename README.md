# budai-technology-web

布袋云科技官方网站项目

## 项目简介

这是一个现代化的企业官网项目，采用原生 HTML、CSS (Less) 和 JavaScript 构建，专注于提供流畅的用户体验和响应式设计。项目实现了企业官网的核心功能，包括产品展示、服务介绍、团队展示等模块。

## 技术栈

- HTML5
- CSS3 / Less
- JavaScript (ES6+)
- [Glide.js](https://glidejs.com/) - 轮播组件
- [Anime.js](https://animejs.com/) - 动画库
- [Isotope](https://isotope.metafizzy.co/) - 瀑布流布局
- Rollup - 模块打包工具

## 项目结构
```
./src
├── index.html
├── main.js
└── style.less

1 directory, 3 files
```

## 开发环境要求

- Node.js v22 (根据 .nvmrc 文件指定)
- npm 或 yarn 包管理器

## 安装与运行

克隆项目到本地：
   ```bash
   git clone <repository-url>
   ```

1. 进入项目目录：
   ```bash
   cd budai-technology-web
   ```

2. 安装依赖：

   ```bash
   pnpm install
   ```

3. 启动构建预览服务器：
   ```bash
   pnpm run dev
   pnpm run preview
   ```

## 功能特性

- 响应式设计，适配各种设备屏幕
- 移动端友好的汉堡菜单导航
- 交互式轮播图展示
- 产品案例筛选功能
- 现代化的UI设计和动画效果

## 开发说明

### 代码规范

- HTML 语义化标签使用
- CSS BEM 命名规范
- JavaScript ES6+ 语法

### 样式处理

项目使用 Less 作为 CSS 预处理器，通过 Rollup 插件进行编译和压缩。

### 构建流程

使用 Rollup 进行模块打包：

- JavaScript 打包为 bundle.js
- CSS 编译为 bundle.css
- HTML 文件自动复制到 dist 目录

## 参考资源

[Less中文网](https://less.bootcss.com/)

[视频教程(B站)](https://www.bilibili.com/video/BV117411n7R1?spm_id_from=333.999.0.0)

## 使用的第三方库

- [Glide.js](https://glidejs.com/docs/) - 轮播组件
- [Anime.js](https://animejs.com/) - 轻量级动画库
- [Isotope](https://isotope.metafizzy.co/) - 瀑布流布局
- [ScrollReveal](https://scrollrevealjs.org/) - 元素进入视窗动画

## 项目截图

![alt text](/static/image.png)
