import { borderRadius, flex, flexAlignCenter } from '@/assets/css/mixins'
import styled from 'styled-components'

export const SearchWrapper = styled.div`
  .search-input {
    ${flex};
    ${flexAlignCenter};
    padding-left: var(--layout-padding);
    margin-right: 2px;
    background-color: var(--third-color);
    ${borderRadius};
    height: 100%;
    .icon-search {
      font-size: 22px;
      color: var(--second-color);
    }
  }
  .icon-filter {
    font-size: 22px;
    color: var(--second-color);
    margin-top: 4px;
  }
`
