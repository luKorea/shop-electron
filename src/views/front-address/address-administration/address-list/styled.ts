import { flex, flexAlignCenter, flexBetween } from '@/assets/css/mixins'
import styled from 'styled-components'

export const FrontAddressListWrapper = styled.div`
  .user-info {
    ${flex};
    ${flexAlignCenter};
  }
  .edit-wrap {
    ${flex};
    ${flexAlignCenter};
    ${flexBetween};
  }
`
