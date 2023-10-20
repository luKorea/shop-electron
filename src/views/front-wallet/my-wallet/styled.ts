import { flexAlignCenter, flexBetween, flex } from '@/assets/css/mixins'
import styled from 'styled-components'
import { imageUrl } from '@/config/image'

export const MyWalletWrapper = styled.div`
  padding: var(--layout-padding);
  .card-wrap {
    width: 100%;
    border-radius: 14px;
    background-image: url(${imageUrl.cardImage});
    background-repeat: no-repeat;
    background-size: cover;
    /* background: linear-gradient(90deg, #f9b645, #eeae40); */
    padding: var(--layout-padding);
    box-sizing: border-box;
    color: #fff;
    box-shadow: 0px 0px 12px var(--third-color);
    .user-name {
      font-size: 20px;
      ${flex};
      ${flexBetween};
    }
    .user-card-number {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .amount-text {
      font-size: 16px;
      margin-bottom: 40px;
    }
    .amount-wrap {
      ${flex};
      ${flexAlignCenter};
      ${flexBetween};
      .amount-btn {
        padding: 4px 7px;
        background-color: #fff;
        border-radius: 10px;
        text-align: center;
        color: var(--theme-color);
      }
    }
  }
`
