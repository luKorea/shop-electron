import styled from 'styled-components'

export const HelpCenterWrapper = styled.div`
  padding: var(--layout-padding);
  .contact-list {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    .contact-item {
      display: flex;
      align-items: center;
      padding: 10px 19px;
      margin-bottom: 12px;
      border-radius: 8px;
      color: var(--theme-color);
      .icon {
        font-size: 28px;
        margin-right: 12px;
      }
    }
  }
`
