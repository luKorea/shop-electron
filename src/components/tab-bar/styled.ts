import { fixedBottom, flex, flexCenter, flexColumn } from '@/assets/css/mixins'
import styled from 'styled-components'

export const TabBarWrapper = styled.div`
  ${flex};
  ${fixedBottom};
  height: var(--tabbar-height);
  background-color: var(--tabbar-background);
  z-index: var(--tabbar-z-index);
  width: 100%;
  border-top: 1px solid #eee;
  .item {
    flex: 1;
    ${flex};
    ${flexColumn};
    ${flexCenter};
    height: var(--tabbar-height);
    .item-image {
      width: 16px;
      height: 16px;
      margin-bottom: 4px;
    }
    .item-text {
      font-size: var(--font-size-sm);
      color: var(--second-color);
    }
    .select-text {
      color: var(--primary-6);
    }
  }
`
