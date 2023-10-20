import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeOut } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`
const fadeOutAnimation = keyframes`${fadeOut}`

export const SearchWrapper = styled.div`
  .fadeIn {
    animation: 1s ${fadeInAnimation};
  }
  .fadeOut {
    animation: 1s ${fadeOutAnimation};
  }
`
