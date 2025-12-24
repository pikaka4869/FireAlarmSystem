# 基于多模态大模型的消防报警交互系统

## 项目简介

这是一个基于React开发的消防报警交互系统前端，采用Netflix风格的UI设计，支持多模态数据采集、实时预警、历史告警查询和多模态交互功能。

## 技术栈

- React 19
- Vite
- React Router 6
- Redux Toolkit
- Ant Design
- Recharts
- Axios

## 项目结构

```
frontend/
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件目录
│   │   ├── Login.jsx           # 登录组件
│   │   ├── Register.jsx        # 注册组件
│   │   ├── Layout.jsx          # 布局组件
│   │   ├── Dashboard.jsx       # 仪表盘组件
│   │   ├── DataCollection.jsx  # 数据采集组件
│   │   ├── HistoryAlerts.jsx   # 历史告警组件
│   │   └── MultimodalInteraction.jsx  # 多模态交互组件
│   ├── router.jsx       # 路由配置
│   ├── App.jsx          # 根组件
│   ├── main.jsx         # 入口文件
│   ├── index.css        # 全局样式
│   └── App.css          # 应用样式
├── package.json         # 依赖配置
├── vite.config.js       # Vite配置
└── README.md            # 项目说明
```

## 功能模块

1. **登录/注册系统** - Netflix风格的登录注册界面
2. **仪表盘** - 实时显示消防状态、预警等级和告警统计
3. **数据采集** - 支持图片、视频上传和实时采集
4. **历史告警** - 列表展示和图表统计告警信息
5. **多模态交互** - 支持文本问答和语音输入

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 开发说明

- 项目使用Vite作为构建工具，支持热模块替换(HMR)
- 采用React函数组件和Hooks开发
- 状态管理使用Redux Toolkit
- UI组件库使用Ant Design
- 路由管理使用React Router 6

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT