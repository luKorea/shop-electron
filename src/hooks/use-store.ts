import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import type { IDispatch, IRootState } from '@/store'
// 设置state参数类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => IDispatch = useDispatch
export const useAppShallowEqual = shallowEqual
