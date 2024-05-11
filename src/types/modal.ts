import { MutableRefObject } from 'react'
import { User } from './api'
export type IAction = 'create' | 'edit' | 'delete'

export interface IModalProp<T = User.UserItem> {
  modalRef: MutableRefObject<{ open: (type: IAction, data: T) => void } | undefined>
  updateList: () => void
}

export interface IDetailProp {
  mRef: MutableRefObject<{ open: (orderId: string) => void } | undefined>
	update?:(marker:any)=>void
}
