import styled, { css } from 'styled-components'

export const flex = css`
  display: flex;
`
export const flexColumn = css`
  flex-direction: column;
`
export const flexColumnReverse = css`
  flex-direction: column-reverse;
`
export const flexRow = css`
  flex-direction: row;
`
export const flexRowReserver = css`
  flex-direction: row-reverse;
`

export const flexCenter = css`
  justify-content: center;
  align-items: center;
`

export const flexAlignCenter = css`
  align-items: center;
`

export const flexBetween = css`
  justify-content: space-between;
`
export const flexAround = css`
  justify-content: space-around;
`

export const fixedBottom = css`
  position: fixed;
  left: 0;
  bottom: 0;
`

export const stickyTop = css`
  position: sticky;
  top: 0;
  z-index: 1;
`

export const marginAuto = css`
  margin: 0 auto;
`

export const borderBottom = css`
  border-bottom: 1px solid var(--second-color);
`

export const borderTop = css`
  border-top: 1px solid var(--second-color);
`

export const borderRadius = css`
  border-radius: var(--border-sm-radius);
`
export const tabMixins = css`
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

export const TabListWrapper = styled.div`
  width: 100vw;
  background-color: #fff;
  position: sticky;
  top: 0;
  padding: 6px 0;
  margin: var(--layout-margin) -13px;
  z-index: 1;
  ${tabMixins};
`
