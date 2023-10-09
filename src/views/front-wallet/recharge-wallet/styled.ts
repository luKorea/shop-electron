import styled from 'styled-components'

export const RechargeWalletWrapper = styled.div`
  padding: var(--layout-padding);
  .balance-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .balance-item {
      width: 80px;
      text-align: center;
      padding: 8px;
      background-color: var(--third-color);
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .after-item {
      width: 80px;
      padding: 8px;
    }
    .select-item {
      background-color: var(--second-color);
      color: #fff;
    }
  }
  .balance-input {
    margin-bottom: 40px;
  }
`
