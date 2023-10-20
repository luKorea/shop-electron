import styled from 'styled-components'

export const CommodityListDataWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, auto);
  .item {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-sm-radius);
    padding: var(--layout-padding);
    background-color: var(--gray-color);
    .collect {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 20px;
    }
    .item-image {
      border-radius: 4px;
      margin: 4px 0;
      width: 100%;
      height: 150px;
    }
    .title {
      margin-bottom: 4px;
      font-weight: bold;
    }
    .sku {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
      .rate {
        .arco-rate-character-full .arco-rate-character-right {
          color: var(--theme-color);
          font-size: 16px;
        }
      }
    }
  }
`
