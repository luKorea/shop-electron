import styled from 'styled-components'

export const TabBarWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  .left {
    width: 32px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .arco-icon {
      font-size: 24px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
  .center {
    flex: 1;
  }
`
