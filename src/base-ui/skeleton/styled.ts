import styled from 'styled-components'

export const SkeletonWArapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  .ant-skeleton-paragraph-row {
    width: 100%;
    height: 15px;
    margin-bottom: 12px;
    border-radius: 12px;
    &:last-child {
      width: 60%;
    }
  }
  .no-animate {
    background: #eee;
  }

  .animate {
    background: linear-gradient(
      90deg,
      #eee 25%,
      rgba(204, 204, 204, 0.6) 37%,
      #eee 63%
    );
    background-size: 400% 100%;
  }

  .ant-skeleton-paragraph-animate {
    -webkit-animation: ant-skeleton-loading 2s ease infinite;
    animation: ant-skeleton-loading 2s ease infinite;
  }
  @-webkit-keyframes ant-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @keyframes ant-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`
