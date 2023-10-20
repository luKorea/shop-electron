import { flex, flexAlignCenter, flexBetween } from '@/assets/css/mixins'
import styled from 'styled-components'

export const FrontSearchWrapper = styled.div`
  padding: 0 var(--layout-padding) var(--layout-padding) var(--layout-padding);
  .search-wrap {
    ${flex};
    ${flexAlignCenter};
    padding: var(--layout-padding) 0;
    .icon-filter {
      font-size: 22px;
      color: var(--second-color);
      margin-left: 4px;
    }
  }
  .history-wrap {
    .title-wrap {
      ${flex};
      ${flexBetween};
      ${flexAlignCenter};
    }
    .history-item {
      ${flex};
      ${flexBetween};
      ${flexAlignCenter};
      margin-bottom: var(--layout-margin);
      .title {
        flex: 1;
      }
      .icon-close {
        color: var(--second-color);
        font-size: 16px;
      }
    }
  }
`
