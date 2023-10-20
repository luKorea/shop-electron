import styled from 'styled-components'

export const LazyLoadImageWrapper = styled.div`
  .image-demo-loader-animate {
    background: linear-gradient(
      -60deg,
      var(--color-fill-2) 25%,
      var(--color-neutral-3) 40%,
      var(--color-fill-3) 55%
    );
    background-size: 400% 100%;
    animation: image-demo-loader-circle 1.5s cubic-bezier(0.34, 0.69, 0.1, 1)
      infinite;
  }

  @keyframes image-demo-loader-circle {
    0% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
`
