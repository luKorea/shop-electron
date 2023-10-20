import React from 'react'
import { NonIndexRouteObject, Navigate } from 'react-router-dom'

import {
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
  FrontProfileSetting,
  FrontWalletMyWallet,
  FrontWalletAddBankCard,
  FrontWalletElectronicList,
  FrontWalletRecordDetail,
  FrontWalletRecordList,
  FrontWalletRechargeWallet
} from './map-router'

import {
  PAGE_HOME,
  PAGE_MEMBER,
  PAGE_ORDER,
  PAGE_SEARCH,
  PAGE_SHOPPING_CART,
  PAGE_NOT_FOUNT,
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
  PAGE_PROFILE,
  PAGE_PROFILE_COLLECTING,
  PAGE_PROFILE_HELP_CENTER,
  PAGE_PROFILE_MESSAGE_CENTER,
  PAGE_PROFILE_MESSAGE_MANAGEMENT,
  PAGE_PROFILE_PASSWORD_MANAGEMENT,
  PAGE_PROFILE_SECURITY_CENTER,
  PAGE_PROFILE_SHARE_FRIENDS,
  PAGE_PROFILE_USER_INFO,
  PAGE_PROFILE_SETTING,
  PAGE_WALLET_ADD_BANK_CARD,
  PAGE_WALLET_ELECTRONIC_LIST,
  PAGE_WALLET_MY_WALLET,
  PAGE_WALLET_RECHARGE_WALLET,
  PAGE_WALLET_RECORD_DETAIL,
  PAGE_WALLET_RECORD_LIST,
  PAGE_PROFILE_INDEX,
  PAGE_WALLET
} from './constant'

interface IRouterExtends extends NonIndexRouteObject {
  isLogin?: boolean
  children?: IRouterExtends[]
}

const routes: IRouterExtends[] = [
  {
    path: '/',
    element: <Navigate to={PAGE_HOME} />
  },
  {
    path: PAGE_HOME,
    element: <FrontHome />
  },
  {
    path: PAGE_MEMBER,
    element: <FrontMember />
  },
  {
    path: PAGE_ORDER,
    element: <FrontOrder />
  },
  {
    path: PAGE_SHOPPING_CART,
    element: <FrontShoppingCart />
  },
  {
    path: PAGE_SEARCH,
    element: <FrontSearch />
  },
  {
    path: PAGE_PROFILE,
    children: [
      {
        path: PAGE_PROFILE,
        element: <Navigate to={PAGE_PROFILE_INDEX} />
      },
      {
        path: PAGE_PROFILE_INDEX,
        element: <FrontProfileIndex />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_COLLECTING,
        element: <FrontProfileCollecting />
      },
      {
        path: PAGE_PROFILE_HELP_CENTER,
        element: <FrontProfileHelpCenter />
      },
      {
        path: PAGE_PROFILE_MESSAGE_CENTER,
        element: <FrontProfileMessageCenter />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_MESSAGE_MANAGEMENT,
        element: <FrontProfileMessageManagement />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_SECURITY_CENTER,
        element: <FrontProfileSecurityCenter />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_PASSWORD_MANAGEMENT,
        element: <FrontProfilePasswordManagement />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_SHARE_FRIENDS,
        element: <FrontProfileShareFriends />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_USER_INFO,
        element: <FrontProfileUserInfo />,
        isLogin: true
      },
      {
        path: PAGE_PROFILE_SETTING,
        element: <FrontProfileSetting />,
        isLogin: true
      }
    ]
  },
  {
    path: PAGE_WALLET,
    children: [
      {
        path: PAGE_WALLET,
        element: <Navigate to={PAGE_WALLET_MY_WALLET} />
      },
      {
        path: PAGE_WALLET_MY_WALLET,
        element: <FrontWalletMyWallet />
      },
      {
        path: PAGE_WALLET_ADD_BANK_CARD,
        element: <FrontWalletAddBankCard />,
        isLogin: true
      },
      {
        path: PAGE_WALLET_ELECTRONIC_LIST,
        element: <FrontWalletElectronicList />,
        isLogin: true
      },
      {
        path: PAGE_WALLET_RECHARGE_WALLET,
        element: <FrontWalletRechargeWallet />,
        isLogin: true
      },
      {
        path: PAGE_WALLET_RECORD_LIST,
        element: <FrontWalletRecordList />,
        isLogin: true
      },
      {
        path: `${PAGE_WALLET_RECORD_DETAIL}/:id`,
        element: <FrontWalletRecordDetail />,
        isLogin: true
      }
    ]
  },
  {
    path: PAGE_ADDRESS,
    children: [
      {
        path: PAGE_ADDRESS,
        element: <Navigate to={PAGE_ADDRESS_LIST} />
      },
      {
        path: PAGE_ADDRESS_LIST,
        element: <FrontAddressList />,
        isLogin: true
      },
      {
        path: PAGE_ADDRESS_LOGISTICS_INFORMATION,
        element: <FrontAddressLogisticsInformation />,
        isLogin: true
      },
      {
        path: PAGE_ADDRESS_ADD_ADDRESS,
        element: <FrontAddressAddAddress />,
        isLogin: true
      },
      {
        path: PAGE_ADDRESS_EXPRESS_LIST,
        element: <FrontAddressExpressList />,
        isLogin: true
      },
      {
        path: PAGE_ADDRESS_ADD_EXPRESS,
        element: <FrontAddressAddExpress />,
        isLogin: true
      }
    ]
  },
  {
    path: PAGE_COMMODITY,
    children: [
      {
        path: PAGE_COMMODITY,
        element: <Navigate to={PAGE_COMMODITY_LIST} />
      },
      {
        path: PAGE_COMMODITY_LIST,
        element: <FrontCommodityList />
      },
      {
        path: PAGE_COMMODITY_ACCOUNTS,
        element: <FrontCommodityAccounts />,
        isLogin: true
      },
      {
        path: PAGE_COMMODITY_COMMENT,
        element: <FrontCommodityComment />
      },
      {
        path: `${PAGE_COMMODITY_DETAIL}/:id`,
        element: <FrontCommodityDetail />
      }
    ]
  },
  {
    path: PAGE_COUPON,
    children: [
      {
        path: PAGE_COUPON,
        element: <Navigate to={PAGE_COUPON_CENTER} />
      },
      {
        path: PAGE_COUPON_CENTER,
        element: <FrontCouponCenter />
      },
      {
        path: PAGE_COUPON__DISCOUNT_COUPON,
        element: <FrontDiscountCoupon />,
        isLogin: true
      }
    ]
  },
  {
    path: PAGE_NOT_FOUNT,
    element: <FrontNotFound />
  }
]

export default routes
