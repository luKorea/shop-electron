import { flex, flexAlignCenter } from '@/assets/css/mixins'
import styled from 'styled-components'

export const FilterModalWrapper = styled.div`
  .btn-wrap {
    ${flex};
    ${flexAlignCenter};
    width: 100%;
  }
  .arco-drawer-header-title {
    width: 100%;
  }
  .form-item {
    margin-bottom: var(--layout-margin);
  }
  .rate {
    .arco-rate-character-full .arco-rate-character-right {
      color: var(--theme-color) !important;
      font-size: 16px !important;
    }
  }
`
