# 以下库为了解决 electron 启动同时打开浏览器 tab 以及 electron 客户单

1. npm i concurrently
2. npm i wait-on
3. npm i cross-env
4. npm install electron-is-dev --save-dev

```json
    "dev": "concurrently \"wait-on http://localhost:9999 && electron .\" \"cross-env BROWSER=none npm start\"",

```
