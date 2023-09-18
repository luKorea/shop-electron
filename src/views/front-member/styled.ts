import styled from 'styled-components'

export const MemberWrapper = styled.div`
  background-color: #fff;
  padding: var(--layout-padding);
  .title-wrap {
    display: flex;
    align-items: center;
    margin: 20px 20px 60px 40px;
    font-weight: bold;
    .title {
      font-size: 20px;
      color: #f2f2f2;
    }
    .title-active {
      font-size: 24px;
      color: var(--primary-color);
    }
  }

  .login-tip {
    margin: 0 auto;
    width: 260px;
  }
  .type-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .type-item {
      flex-shrink: 0;
    }
    .arco-icon {
      font-size: 24px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
  .auth-tip {
    margin: 0 auto;
    margin-top: 40px;
    margin-left: 10px;
    .checkbox-tip {
      .arco-checkbox-text {
        color: var(--color-text-3);
      }
      .tip-text {
        color: var(--color-text-1);
      }
    }
  }
`
