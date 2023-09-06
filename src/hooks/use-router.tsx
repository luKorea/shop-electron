// 针对 class 组件无法使用 hooks 封装 HOC

import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom'

export function withRouter(WrapperComponent: any) {
  function newComponents(props: any) {
    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)
    const router = {
      navigate,
      params,
      query,
      location
    }
    // eslint-disable-next-line react/react-in-jsx-scope
    return <WrapperComponent {...props} router={router} />
  }
  return newComponents
}
