# 项目配置说明

# 1. 以下库为了解决 electron 启动同时打开浏览器 tab 以及 electron 客户单

1. npm i concurrently
2. npm i wait-on
3. npm i cross-env
4. npm install electron-is-dev --save-dev

```json
    "dev": "concurrently \"wait-on http://localhost:9999 && electron .\" \"cross-env BROWSER=none npm start\"",

```

# 2. 项目目录配置

```
.
├── README.md
├── commitlint.config.js
├── craco.config.js
├── electron
│   ├── main.ts
│   └── preload.ts
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── push.sh
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── css
│   │   │   └── common.less
│   │   └── svg
│   │       ├── icon-arrow-left.tsx
│   │       ├── icon-arrow-right.tsx
│   │       ├── icon-not-found.tsx
│   │       └── utils
│   │           └── index.ts
│   ├── base-ui
│   │   ├── scroll-view
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   └── skeleton
│   │       ├── index.tsx
│   │       └── styled.ts
│   ├── context
│   │   └── use-context.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── use-change-theme.ts
│   │   ├── use-router.tsx
│   │   ├── use-scroll-top.ts
│   │   ├── use-scroll.ts
│   │   ├── use-storage.ts
│   │   ├── use-store.ts
│   │   └── use-title.ts
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── router
│   │   └── index.tsx
│   ├── service
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── request
│   │       ├── index.ts
│   │       └── types.ts
│   ├── settings.json
│   ├── setupTests.ts
│   ├── store
│   │   ├── index.ts
│   │   └── module
│   │       └── user.ts
│   ├── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── format.ts
│   │   ├── index.ts
│   │   └── is.ts
│   └── views
│       ├── front-home
│       │   ├── components
│       │   │   ├── banner
│       │   │   │   ├── index.tsx
│       │   │   │   └── styled.ts
│       │   │   └── header
│       │   │       ├── index.tsx
│       │   │       └── styled.ts
│       │   ├── index.tsx
│       │   └── styled.ts
│       └── not-found
│           ├── index.tsx
│           └── styled.ts
└── tsconfig.json

```

# 3. 第三方库
