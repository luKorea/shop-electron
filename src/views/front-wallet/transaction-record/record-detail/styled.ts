import {
  flex,
  flexAlignCenter,
  flexBetween,
  flexCenter,
  flexColumn
} from '@/assets/css/mixins'
import styled from 'styled-components'

export const RecordDetailWrapper = styled.div`
  padding: var(--layout-padding);
  .barcode-card {
    ${flex};
    ${flexCenter};
    margin-bottom: var(--layout-margin);
  }
  .item {
    ${flex};
    ${flexAlignCenter};
    ${flexBetween};
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
