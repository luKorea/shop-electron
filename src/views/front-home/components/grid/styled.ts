import { styled } from 'styled-components'

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin: var(--layout-margin) 0;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 8px;
  justify-content: space-between;
  .item {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: var(--third-color);
    .title {
      margin-top: 4px;
    }
  }
`
