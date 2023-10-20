import styled from 'styled-components'
import { imageUrl } from '@/config/image'
import { flex, flexBetween } from '@/assets/css/mixins'

export const AddBankCardWrapper = styled.div`
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
    margin-bottom: var(--layout-margin);
    .card-name {
      font-size: 20px;
      ${flex};
      ${flexBetween};
    }
    .card-number {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .card-amount {
      margin-top: 40px;
      font-size: 16px;
    }
  }
`
