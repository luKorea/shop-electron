# 项目配置说明

# 1. 以下库为了解决 electron 启动同时打开浏览器 tab 以及 electron 客户端

1. npm i concurrently
2. npm i wait-on
3. npm i cross-env
4. npm install electron-is-dev --save-dev

```json
    "dev": "concurrently \"wait-on http://localhost:9999 && electron .\" \"cross-env BROWSER=none npm start\"",

```

# 2. 接口文档地址

https://console-docs.apipost.cn/preview/7c958047252492ba/3613341677561f42?target_id=002

# 3. 项目目录配置

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
│   ├── api
│   │   ├── front-address
│   │   │   ├── address-administration
│   │   │   ├── express
│   │   │   └── logistics-information
│   │   ├── front-commodity
│   │   │   ├── commodity-accounts
│   │   │   ├── commodity-detail
│   │   │   ├── commodity-list
│   │   │   └── ommodity-comment
│   │   ├── front-coupon
│   │   ├── front-home
│   │   ├── front-menber
│   │   ├── front-order
│   │   ├── front-profile
│   │   ├── front-search
│   │   ├── front-shopping-cart
│   │   └── front-wallet
│   ├── assets
│   │   ├── css
│   │   │   ├── common.less
│   │   │   └── reset.less
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
│   ├── components
│   │   ├── back-top
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── commodity-item
│   │   ├── login-modal
│   │   ├── pay-status
│   │   └── tab-bar
│   │       ├── index.tsx
│   │       └── styled.ts
│   ├── context
│   │   └── use-context.ts
│   ├── declaration.d.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── use-change-theme.ts
│   │   ├── use-count.ts
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
│   ├── types
│   │   ├── constant.d.ts
│   │   └── form-item.d.ts
│   ├── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── format.ts
│   │   ├── index.ts
│   │   ├── is.ts
│   │   ├── tip.ts
│   │   └── util.ts
│   └── views
│       ├── front-address
│       │   ├── address-administration
│       │   │   ├── add-address
│       │   │   └── address-list
│       │   ├── express
│       │   │   ├── add-express
│       │   │   └── express-list
│       │   └── logistics-information
│       ├── front-commodity
│       │   ├── commodity-accounts
│       │   ├── commodity-detail
│       │   ├── commodity-list
│       │   └── ommodity-comment
│       ├── front-coupon
│       │   ├── coupon-center
│       │   └── discount-coupon
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
│       ├── front-member
│       │   ├── components
│       │   │   └── form-panner
│       │   │       ├── index.tsx
│       │   │       └── styled.ts
│       │   ├── index.tsx
│       │   ├── styled.ts
│       │   └── types.ts
│       ├── front-order
│       ├── front-profile
│       │   ├── collecting
│       │   ├── help-center
│       │   ├── message
│       │   │   ├── message-center
│       │   │   └── message-management
│       │   ├── password-management
│       │   ├── security-center
│       │   ├── share-friends
│       │   └── user-info
│       ├── front-search
│       ├── front-shopping-cart
│       ├── front-wallet
│       │   ├── electronic-wallet
│       │   │   ├── add-bank-card
│       │   │   └── electronic-list
│       │   ├── my-wallet
│       │   ├── recharge-wallet
│       │   └── transaction-record
│       │       ├── record-detail
│       │       └── record-list
│       └── not-found
│           ├── index.tsx
│           └── styled.ts
├── tsconfig-base.json
└── tsconfig.json
```

1. views
   1. front-home 首页
   2. front-shopping-cart 购物车
   3. front-order 订单列表
   4. front-wallet 钱包
      1. my-wallet 我的钱包
      2. recharge-wallet 充值钱包
      3. electronic-wallet
         1. electronic-list 电子钱包
         2. add-bank-card 添加银行卡
      4. transaction-record
         1. record-list 交易记录
         2. record-detail 交易详情
   5. front-profile 个人中心
      1. user-info 个人信息
      2. collecting 我的收藏
      3. message
         1. message-management 消息管理
         2. message-center 消息中心
      4. security-center 安全中心
      5. password-management 密码管理
      6. help-center 帮助中心
      7. share-friends 分享好友
   6. front-address
      1. logistics-information 物流信息
      2. address-administration
         1. address-list 地址管理
         2. add-address 添加地址
      3. express
         1. express-list 快递列表
         2. add-express 新增快递
   7. front-search 搜索页
   8. front-commodity
      1. commodity-list 商品列表
      2. commodity-detail 商品详情
      3. commodity-comment 商品评论
      4. commodity-accounts 结算页面
   9. front-coupon
      1. discount-coupon 我的优惠券
      2. coupon-center 领券中心
2. components
3. tab-bar 导航栏
4. back-top 回到顶部
5. login-modal 登录弹框
6. commodity-item 商品 item
7. pay-status 支付状态

# 3. 第三方库
