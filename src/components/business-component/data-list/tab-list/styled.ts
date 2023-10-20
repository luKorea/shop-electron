import styled from 'styled-components'

export const TabListWrapper = styled.div`
  width: 100vw;
  background-color: #fff;
  position: sticky;
  top: 0;
  padding: 6px 0;
  margin: var(--layout-margin) -13px;
  z-index: 1;
  .arco-tabs-header-nav-rounded .arco-tabs-header-title {
    border: 1px solid var(--theme-color);
    color: var(--theme-color);
  }
  .arco-tabs-header-nav-rounded .arco-tabs-header-title-active,
  .arco-tabs-header-nav-rounded .arco-tabs-header-title-active:hover {
    background-color: var(--theme-color);
    color: #fff;
  }
`
