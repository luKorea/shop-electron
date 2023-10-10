import { flex, flexAlignCenter } from '@/assets/css/mixins'
import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  ${flex};
  ${flexAlignCenter};
  .logo-gif {
    width: 80px;
    height: 80px;
  }
`
