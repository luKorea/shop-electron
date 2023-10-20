import { useNavigate } from 'react-router-dom'

export const useNav = () => {
  const nav = useNavigate()
  return nav
}
