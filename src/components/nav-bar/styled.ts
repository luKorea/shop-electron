import { flex, flexAlignCenter, flexCenter } from '@/assets/css/mixins'
import styled from 'styled-components'

export const NabBarWrapper = styled.div`
  width: 100%;
  height: var(--navbar-height);
  ${flex};
  ${flexAlignCenter};
  margin-bottom: var(--layout-margin);
  .left {
    height: 100%;
    font-size: var(--theme-font-size);
    font-weight: var(--theme-font-weight);
    color: var(--theme-color);
    ${flex};
    ${flexCenter};
    .back-icon {
      font-size: 24px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
  .center {
    flex: 1;
    height: 100%;
  }
  .right {
    ${flex};
    ${flexAlignCenter};
    height: 100%;
  }
`
