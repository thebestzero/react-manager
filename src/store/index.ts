import { create } from 'zustand'
import { User } from '@/types/api'

export const useStore = create<{
  userInfo: User.UserItem
  updateUserInfo: (userInfo: User.UserItem) => void
}>(set => ({
  userInfo: {
    _id: '',
    userId: 0,
    userName: '',
    userEmail: '',
    deptId: '',
    state: 0,
    mobile: '',
    job: '',
    role: 0,
    roleList: '',
    createId: 0,
    deptName: '',
    userImg: ''
  },
  updateUserInfo: userInfo => set({ userInfo })
}))
