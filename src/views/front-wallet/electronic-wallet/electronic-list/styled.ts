import { flex, flexAlignCenter, flexBetween } from '@/assets/css/mixins'
import styled from 'styled-components'

export const ElectronicListWrapper = styled.div`
  padding: var(--layout-padding);
  width: 100%;
  .pay-item {
    ${flex};
    ${flexAlignCenter};
    ${flexBetween};
    .left {
      ${flex};
      ${flexAlignCenter};
      .left-title {
        margin-left: var(--layout-margin);
      }
    }
  }
  .select-item {
    border-color: var(--theme-color);
  }
`
