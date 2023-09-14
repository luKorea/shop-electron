import { lazy } from 'react'
import FrontHome from '@/views/front-home/index'
import FrontMember from '@/views/front-member/index'
import FrontOrder from '@/views/front-order/index'
import FrontShoppingCart from '@/views/front-shopping-cart/index'
import FrontSearch from '@/views/front-search/index'
import FrontNotFound from '@/views/not-found/index'

const FrontAddressAddAddress = lazy(
  () => import('@/views/front-address/address-administration/add-address/index')
)
const FrontAddressList = lazy(
  () =>
    import('@/views/front-address/address-administration/address-list/index')
)
const FrontAddressAddExpress = lazy(
  () => import('@/views/front-address/express/add-express/index')
)
const FrontAddressExpressList = lazy(
  () => import('@/views/front-address/express/express-list/index')
)
const FrontAddressLogisticsInformation = lazy(
  () => import('@/views/front-address/logistics-information/index')
)

const FrontCommodityAccounts = lazy(
  () => import('@/views/front-commodity/commodity-accounts/index')
)
const FrontCommodityDetail = lazy(
  () => import('@/views/front-commodity/commodity-detail/index')
)
const FrontCommodityList = lazy(
  () => import('@/views/front-commodity/commodity-list/index')
)
const FrontCommodityComment = lazy(
  () => import('@/views/front-commodity/commodity-comment/index')
)

const FrontCouponCenter = lazy(
  () => import('@/views/front-coupon/coupon-center/index')
)
const FrontDiscountCoupon = lazy(
  () => import('@/views/front-coupon/discount-coupon/index')
)

const FrontProfileIndex = lazy(() => import('@/views/front-profile/index'))
const FrontProfileCollecting = lazy(
  () => import('@/views/front-profile/collecting/index')
)
const FrontProfileHelpCenter = lazy(
  () => import('@/views/front-profile/help-center/index')
)

const FrontProfilePasswordManagement = lazy(
  () => import('@/views/front-profile/password-management/index')
)

const FrontProfileSecurityCenter = lazy(
  () => import('@/views/front-profile/security-center/index')
)

const FrontProfileShareFriends = lazy(
  () => import('@/views/front-profile/share-friends/index')
)

const FrontProfileUserInfo = lazy(
  () => import('@/views/front-profile/user-info/index')
)

const FrontProfileMessageCenter = lazy(
  () => import('@/views/front-profile/message/message-center/index')
)
const FrontProfileMessageManagement = lazy(
  () => import('@/views/front-profile/message/message-management/index')
)

const FrontWalletMyWallet = lazy(
  () => import('@/views/front-wallet/my-wallet/index')
)
const FrontWalletAddBankCard = lazy(
  () => import('@/views/front-wallet/electronic-wallet/add-bank-card/index')
)
const FrontWalletElectronicList = lazy(
  () => import('@/views/front-wallet/electronic-wallet/electronic-list/index')
)
const FrontWalletRechargeWallet = lazy(
  () => import('@/views/front-wallet/recharge-wallet/index')
)
const FrontWalletRecordList = lazy(
  () => import('@/views/front-wallet/transaction-record/record-list/index')
)
const FrontWalletRecordDetail = lazy(
  () => import('@/views/front-wallet/transaction-record/record-detail/index')
)

export {
  FrontHome,
  FrontNotFound,
  FrontMember,
  FrontOrder,
  FrontShoppingCart,
  FrontSearch,
  FrontAddressAddAddress,
  FrontAddressList,
  FrontAddressAddExpress,
  FrontAddressExpressList,
  FrontAddressLogisticsInformation,
  FrontCommodityList,
  FrontCommodityAccounts,
  FrontCommodityDetail,
  FrontCommodityComment,
  FrontCouponCenter,
  FrontDiscountCoupon,
  FrontProfileIndex,
  FrontProfileCollecting,
  FrontProfileHelpCenter,
  FrontProfileMessageCenter,
  FrontProfileMessageManagement,
  FrontProfileUserInfo,
  FrontProfileShareFriends,
  FrontProfileSecurityCenter,
  FrontProfilePasswordManagement,
  FrontWalletMyWallet,
  FrontWalletAddBankCard,
  FrontWalletElectronicList,
  FrontWalletRecordDetail,
  FrontWalletRecordList,
  FrontWalletRechargeWallet
}
