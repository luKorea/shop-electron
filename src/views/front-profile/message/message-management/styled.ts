import {
  flex,
  flexAlignCenter,
  flexBetween,
  flexColumn
} from '@/assets/css/mixins'
import styled from 'styled-components'

export const MessageManagementWrapper = styled.div`
  padding: var(--layout-padding);
  .wrap {
    ${flex};
    ${flexColumn};
    .item {
      ${flex};
      ${flexBetween};
      ${flexAlignCenter};
    }
  }
`
