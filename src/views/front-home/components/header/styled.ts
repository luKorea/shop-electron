import { styled } from 'styled-components'
import { borderRadius, flex, flexAlignCenter } from '@/assets/css/mixins'

export const HeaderWrapper = styled.div``

export const SearchWrapper = styled.div`
  .search-input {
    ${flex};
    ${flexAlignCenter};
    padding-left: var(--layout-padding);
    margin-right: 2px;
    background-color: var(--third-color);
    ${borderRadius};
    color: var(--second-color);
    height: 100%;
    .icon-search {
      font-size: 22px;
      margin-right: 4px;
      color: var(--second-color);
    }
  }
  .icon-filter {
    font-size: 22px;
    color: var(--second-color);
    margin-top: 4px;
  }
`

export const UserInfoWrapper = styled.div`
  ${flex};
  ${flexAlignCenter};
  .logo-gif {
    width: 60px;
    height: 60px;
  }
  .info-wrap {
    flex: 1;
    .time-info {
      color: var(--second-color);
    }
  }
  .icon-wrap {
    ${flex};
    ${flexAlignCenter};
  }
`
