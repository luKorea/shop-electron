import {
  flex,
  flexAlignCenter,
  flexBetween,
  flexColumn
} from '@/assets/css/mixins'
import styled from 'styled-components'

export const RecordListWrapper = styled.div`
  ${flex};
  ${flexColumn};
  .record-item {
    ${flex};
    ${flexAlignCenter};
    ${flexBetween};
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
    .item-image {
      margin-right: 20px;
      border-radius: 50%;
    }
    .item-info {
      ${flex};
      ${flexColumn};
      flex: 1;
      .item-title {
        margin-bottom: 4px;
      }
      .item-time {
        color: var(--second-color);
      }
    }
  }
`
