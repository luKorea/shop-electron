/** 首页模块-主路由 */
const PAGE_HOME = '/front-home'
/** 购物车模块-主路由 */
const PAGE_SHOPPING_CART = '/front-shopping-cart'
/** 登录注册模块-主路由 */
const PAGE_MEMBER = '/front-member'
/** 订单模块-主路由 */
const PAGE_ORDER = '/front-order'
/** 搜索模块-主路由 */
const PAGE_SEARCH = '/front-search'
/** 地址模块-主路由 */
const PAGE_ADDRESS = '/front-address'
/** 地址模块-地址管理 */
const PAGE_ADDRESS_LIST = PAGE_ADDRESS + '/list'
/** 地址模块-新增/编辑地址 */
const PAGE_ADDRESS_ADD_ADDRESS = PAGE_ADDRESS + '/add-address'
/** 地址模块-物流列表 */
const PAGE_ADDRESS_EXPRESS_LIST = PAGE_ADDRESS + '/express-list'
/** 地址模块-新增快递 */
const PAGE_ADDRESS_ADD_EXPRESS = PAGE_ADDRESS + '/add-express'
/** 地址模块-物流信息 */
const PAGE_ADDRESS_LOGISTICS_INFORMATION =
  PAGE_ADDRESS + '/logistics-information'
/** 商品模块-主路由 */
const PAGE_COMMODITY = '/front-commodity'
/** 商品模块-商品列表 */
const PAGE_COMMODITY_LIST = PAGE_COMMODITY + '/list'
/** 商品模块-结算页面 */
const PAGE_COMMODITY_ACCOUNTS = PAGE_COMMODITY + '/accounts'
/** 商品模块-商品详情 */
const PAGE_COMMODITY_DETAIL = PAGE_COMMODITY + '/detail'
/** 商品模块-商品评论 */
const PAGE_COMMODITY_COMMENT = PAGE_COMMODITY + '/comment'
/** 优惠券-主路由 */
const PAGE_COUPON = '/front-coupon'
/** 优惠券-领卷中心 */
const PAGE_COUPON_CENTER = PAGE_COUPON + '/center'
/** 优惠券-我的优惠券 */
const PAGE_COUPON__DISCOUNT_COUPON = PAGE_COUPON + '/discount-coupon'
/** 个人中心-主路由 */
const PAGE_PROFILE = '/front-profile'
/** 个人中心-首页 */
const PAGE_PROFILE_INDEX = PAGE_PROFILE + '/index'
/** 个人中心-我的收藏 */
const PAGE_PROFILE_COLLECTING = PAGE_PROFILE + '/collecting'
/** 个人中心-帮助中心 */
const PAGE_PROFILE_HELP_CENTER = PAGE_PROFILE + '/help-center'
/** 个人中心-消息中心 */
const PAGE_PROFILE_MESSAGE_CENTER = PAGE_PROFILE + '/message-center'
/** 个人中心-消息管理 */
const PAGE_PROFILE_MESSAGE_MANAGEMENT = PAGE_PROFILE + '/message-management'
/** 个人中心密码管理 */
const PAGE_PROFILE_PASSWORD_MANAGEMENT = PAGE_PROFILE + '/password-management'
/** 个人中心-安全中心 */
const PAGE_PROFILE_SECURITY_CENTER = PAGE_PROFILE + '/security-center'
/** 个人中心-分享好友 */
const PAGE_PROFILE_SHARE_FRIENDS = PAGE_PROFILE + '/share-friends'
/** 个人中心-用户信息 */
const PAGE_PROFILE_USER_INFO = PAGE_PROFILE + '/user-info'
/** 个人中心-设置 */
const PAGE_PROFILE_SETTING = PAGE_PROFILE + '/setting'

/** 钱包模块-设置 */
const PAGE_WALLET = '/front-wallet'
/** 钱包模块-我的钱包 */
const PAGE_WALLET_MY_WALLET = PAGE_WALLET + '/my-wallet'
/** 钱包模块-添加银行卡 */
const PAGE_WALLET_ADD_BANK_CARD = PAGE_WALLET + '/add-bank-card'
/** 钱包模块-电子钱包 */
const PAGE_WALLET_ELECTRONIC_LIST = PAGE_WALLET + '/electronic-list'
/** 钱包模块-充值钱包 */
const PAGE_WALLET_RECHARGE_WALLET = PAGE_WALLET + '/recharge-wallet'
/** 钱包模块-交易明细 */
const PAGE_WALLET_RECORD_DETAIL = PAGE_WALLET + '/record-detail'
/** 钱包模块-交易记录 */
const PAGE_WALLET_RECORD_LIST = PAGE_WALLET + '/record-list'
/** 404 页面 */
const PAGE_NOT_FOUNT = '*'
export {
  PAGE_ADDRESS,
  PAGE_ADDRESS_ADD_ADDRESS,
  PAGE_ADDRESS_EXPRESS_LIST,
  PAGE_ADDRESS_LOGISTICS_INFORMATION,
  PAGE_ADDRESS_ADD_EXPRESS,
  PAGE_ADDRESS_LIST,
  PAGE_COMMODITY,
  PAGE_COMMODITY_ACCOUNTS,
  PAGE_COMMODITY_COMMENT,
  PAGE_COMMODITY_DETAIL,
  PAGE_COMMODITY_LIST,
  PAGE_COUPON,
  PAGE_COUPON_CENTER,
  PAGE_COUPON__DISCOUNT_COUPON,
  PAGE_HOME,
  PAGE_MEMBER,
  PAGE_NOT_FOUNT,
  PAGE_ORDER,
  PAGE_PROFILE,
  PAGE_PROFILE_INDEX,
  PAGE_PROFILE_COLLECTING,
  PAGE_PROFILE_HELP_CENTER,
  PAGE_PROFILE_MESSAGE_CENTER,
  PAGE_PROFILE_MESSAGE_MANAGEMENT,
  PAGE_PROFILE_PASSWORD_MANAGEMENT,
  PAGE_PROFILE_SECURITY_CENTER,
  PAGE_PROFILE_SHARE_FRIENDS,
  PAGE_PROFILE_USER_INFO,
  PAGE_PROFILE_SETTING,
  PAGE_SEARCH,
  PAGE_SHOPPING_CART,
  PAGE_WALLET,
  PAGE_WALLET_ADD_BANK_CARD,
  PAGE_WALLET_ELECTRONIC_LIST,
  PAGE_WALLET_MY_WALLET,
  PAGE_WALLET_RECHARGE_WALLET,
  PAGE_WALLET_RECORD_DETAIL,
  PAGE_WALLET_RECORD_LIST
}
