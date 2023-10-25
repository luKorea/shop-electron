import {
  flex,
  flexAlignCenter,
  flexBetween,
  flexColumn
} from '@/assets/css/mixins'
import styled from 'styled-components'

export const CommodityDetailWrapper = styled.div`
  ${flex};
  ${flexColumn};
  height: 100vh;
  .reduce-wrap {
    ${flex};
    ${flexBetween};
    ${flexAlignCenter};
    ${flexColumn};
    background-color: #fff;
    .amount-wrap {
      ${flex};
      ${flexBetween};
      ${flexAlignCenter};
      width: 100%;
    }
  }
`
