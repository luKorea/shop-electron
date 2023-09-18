import { borderRadius, flex, flexCenter, flexColumn } from '@/assets/css/mixins'
import styled from 'styled-components'

export const LoginModalWrapper = styled.div`
  ${flex};
  ${flexColumn};
  ${flexCenter};
  .result-content {
    background: var(--second-color);
    padding: var(--layout-padding);
    ${borderRadius};
  }
`
