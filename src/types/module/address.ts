export interface IAddressData {
  list: IAddressItem[]
}
export interface IAddressItem {
  id: string
  is_default: boolean
  name: string
  city: string
  phone: string
  province: string
  region: string
  address: string
}
