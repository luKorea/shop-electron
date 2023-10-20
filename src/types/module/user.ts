/** 登录字段 */
export interface ILoginParams {
  phone: string
  password: string
  sms_code?: string | number
  re_password?: string
}

/** 用户信息字段 */
export enum EGender {
  '未知' = 0,
  '男' = 1,
  '女' = 2
}
export interface IUserInfoParams {
  id: number | string
  username: string
  icon: string
  birthday: string
  gender: EGender
}
