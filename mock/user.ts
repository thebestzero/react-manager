import { MockMethod } from 'vite-plugin-mock'

const accessTokens = {
  admin: '123456',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
}
export default [
  {
    url: '/api/users/login',
    method: 'post',
    response: config => {
      const { username, password } = config.body
      if (accessTokens[username] != password) {
        return {
          code: 500,
          msg: '帐户或密码不正确。'
        }
      }
      return {
        code: 0,
        msg: 'success',
        data: {
          token: accessTokens['token']
        }
      }
    }
  },
  {
    url: '/api/users/getUserInfo',
    method: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          _id: '655da3bf9d9a408c7dd73212',
          userId: 1000016,
          userName: 'zhangSir',
          userEmail: 'zhangbestzero@outlook.com',
          mobile: '17011221122',
          deptId: '',
          deptName: '',
          job: '前端工程师',
          state: 1,
          role: 2,
          createId: 1000002,
          roleList: '655dbedb11c02c8597dce76f'
        },
        msg: ''
      }
    }
  }
] as MockMethod[]
