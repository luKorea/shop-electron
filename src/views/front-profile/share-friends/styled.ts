import {
  flex,
  flexAlignCenter,
  flexBetween,
  flexCenter,
  flexColumn
} from '@/assets/css/mixins'
import styled from 'styled-components'

export const ShareFriendsWrapper = styled.div`
  padding: var(--layout-padding);
  .content {
    .item {
      ${flex};
      ${flexAlignCenter};
      ${flexBetween};
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .user-info {
        flex: 1;
        ${flex};
        ${flexColumn};
        ${flexBetween};
        .user-name {
          font-size: 13px;
          color: var(--theme-color);
        }
        .user-phone {
          font-size: 12px;
          color: var(--second-color);
        }
      }
      .share-btn {
        ${flex};
        ${flexCenter};
        padding: 6px 14px;
        font-size: 13px;
        color: #fff;
        background-color: var(--theme-color);
        border-radius: 14px;
      }
      .is-share {
        background-color: var(--second-color);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
