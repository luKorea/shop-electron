import { flex, flexColumn } from '@/assets/css/mixins'
import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  padding: var(--layout-padding);
  ${flex};
  ${flexColumn};
  height: 100%;
  .form-wrapper {
    flex: 1;
  }
`
