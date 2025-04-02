# Markdown Online Editor Server

这是Markdown Online Editor的服务端组件，用于处理文档转换等功能。

## 系统要求

- Node.js >= 20.0.0
- pandoc（用于Markdown转DOCX功能）

## 安装步骤

1. 安装pandoc
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install pandoc

# CentOS/RHEL
sudo yum install pandoc
```

2. 安装Node.js依赖
```bash
npm install
```

## 启动服务

```bash
npm run pm2:start
```

服务器将在3000端口启动（可通过环境变量PORT修改）。

## 环境变量

- `PORT`: 服务器端口号（默认：3000）