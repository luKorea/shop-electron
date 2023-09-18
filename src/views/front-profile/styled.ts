import {
  flexCenter,
  flexColumn,
  flex,
  flexAlignCenter,
  flexBetween
} from '@/assets/css/mixins'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  padding: var(--layout-padding);
  ${flex};
  ${flexColumn};
  ${flexCenter};
  .service-wrap {
    width: 100%;
    .service-item {
      ${flex};
      ${flexAlignCenter};
      ${flexBetween};
      height: var(--theme-height);
      margin-bottom: var(--layout-margin);
      .service-left {
        flex: 1;
        ${flex};
        ${flexAlignCenter};
        .icon {
          font-size: var(--theme-font-size);
          line-height: var(--theme-line-height);
        }
        .title {
          font-size: var(--theme-font-size);
          line-height: var(--theme-line-height);
          color: var(--theme-color);
        }
      }
      .service-right {
        font-size: var(--theme-font-size);
      }
    }
  }
`
