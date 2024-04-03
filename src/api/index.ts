import { Login, User } from '@/types/api'
import request from '@/utils/request'

export default {
  login(params: Login.params) {
    return request.post<string>('users/login', params, { showLoading: false })
  },
  // 获取用户信息
  getUserInfo() {
    return request.get<User.UserItem>('/users/getUserInfo')
  }
}
