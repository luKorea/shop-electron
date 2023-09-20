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
  .edit-info {
    position: relative;
    .image {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    .icon {
      ${flex};
      ${flexCenter};
      position: absolute;
      bottom: 5px;
      right: 6px;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background-color: var(--theme-color);
      .abs-icon {
        color: #fff;
        font-size: 12px;
      }
    }
  }
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
          margin-right: 8px;
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
