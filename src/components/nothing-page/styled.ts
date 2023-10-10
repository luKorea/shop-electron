import { flexAlignCenter, flexColumn, flex } from '@/assets/css/mixins'
import styled from 'styled-components'

export const NothingPageWrapper = styled.div`
  ${flex};
  ${flexColumn};
  ${flexAlignCenter};
  .nothing-img {
    width: 160px;
    height: 160px;
  }
`
