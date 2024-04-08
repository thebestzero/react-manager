import { MockMethod } from 'vite-plugin-mock'
import { a } from 'vite/dist/node/types.d-aGj9QkWt'

const accessTokens = {
  admin: '123456',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
}
const userList = [
  {
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T10:44:25.532Z',
    userId: 1000016,
    userName: 'JackMa',
    userEmail: 'jackma@mars.com',
    mobile: '17011221122',
    sex: 0,
    deptId: '',
    deptName: '',
    job: '前端工程师',
    state: 2,
    role: 2,
    createId: 1000002,
    lastLoginTime: '2024-04-07T07:48:03.422Z',
    roleList: '655dbedb11c02c8597dce76f'
  },
  {
    userId: 100017,
    userName: 'JackBean',
    userEmail: 'jackbean@mars.com',
    deptId: '655dbef811c02c8597dce77a',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '655dbedb11c02c8597dce76f',
    createId: 1000002,
    userImg: '',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2023-11-22T09:21:22.314Z',
    __v: 0
  },
  {
    userId: 100018,
    userName: '9549587',
    userEmail: '9549587@mars.com',
    deptId: '',
    deptName: '',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'http://api-driver.marsview.cc/3f9393c68f57ac57704652f00.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-05T07:18:46.815Z',
    __v: 0,
    job: '测试'
  },
  {
    userId: 100020,
    userName: '1366143860',
    userEmail: '1366143860@mars.com',
    deptId: '6568c7254a54800ac8d5b18e',
    deptName: '部门5',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2023-12-21T07:41:46.976Z',
    mobile: '13072361279',
    job: '前端1'
  },
  {
    userId: 100022,
    userName: '413401333',
    userEmail: '413401333@mars.com',
    deptId: '6582ae994a54800ac8d76b80',
    deptName: '前端',
    state: 2,
    role: 1,
    roleList: '6582aeb44a54800ac8d76b88',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-01-02T02:16:53.036Z',
    job: '前端'
  },
  {
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T10:44:25.532Z',
    userId: 1000016,
    userName: 'JackMa',
    userEmail: 'jackma@mars.com',
    mobile: '17011221122',
    sex: 0,
    deptId: '',
    deptName: '',
    job: '前端工程师',
    state: 1,
    role: 2,
    createId: 1000002,
    lastLoginTime: '2024-04-07T07:48:03.422Z',
    roleList: '655dbedb11c02c8597dce76f'
  },
  {
    userId: 100017,
    userName: 'JackBean',
    userEmail: 'jackbean@mars.com',
    deptId: '655dbef811c02c8597dce77a',
    deptName: '大前端',
    state: 1,
    role: 1,
    roleList: '655dbedb11c02c8597dce76f',
    createId: 1000002,
    userImg: '',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2023-11-22T09:21:22.314Z',
    __v: 0
  },
  {
    userId: 100018,
    userName: '9549587',
    userEmail: '9549587@mars.com',
    deptId: '',
    deptName: '',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'http://api-driver.marsview.cc/3f9393c68f57ac57704652f00.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-05T07:18:46.815Z',
    __v: 0,
    job: '测试'
  },
  {
    userId: 100020,
    userName: '1366143860',
    userEmail: '1366143860@mars.com',
    deptId: '6568c7254a54800ac8d5b18e',
    deptName: '部门5',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2023-12-21T07:41:46.976Z',
    mobile: '13072361279',
    job: '前端1'
  },
  {
    userId: 100022,
    userName: '413401333',
    userEmail: '413401333@mars.com',
    deptId: '6582ae994a54800ac8d76b80',
    deptName: '前端',
    state: 1,
    role: 1,
    roleList: '6582aeb44a54800ac8d76b88',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-01-02T02:16:53.036Z',
    job: '前端'
  },
  {
    userId: 100023,
    userName: '1050732226',
    userEmail: '1050732226@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:33:42.675Z'
  },
  {
    userId: 100028,
    userName: '1667519970',
    userEmail: '1667519970@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:32:18.779Z'
  },
  {
    userId: 100023,
    userName: '1050732226',
    userEmail: '1050732226@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:33:42.675Z'
  },
  {
    userId: 100024,
    userName: '191337035',
    userEmail: '191337035@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-30T14:05:01.915Z'
  },
  {
    userId: 100025,
    userName: '717210290',
    userEmail: '717210290@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:34:03.303Z'
  },
  {
    userId: 100024,
    userName: '191337035',
    userEmail: '191337035@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-30T14:05:01.915Z'
  },
  {
    userId: 100025,
    userName: '717210290',
    userEmail: '717210290@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:34:03.303Z'
  },
  {
    userId: 100027,
    userName: '475721797',
    userEmail: '475721797@mars.com',
    deptId: '65eacdb84a54800ac8dd6183',
    deptName: '2312312',
    state: 1,
    role: 1,
    roleList: '65eaeafb4a54800ac8dd6429',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-22T04:55:23.057Z'
  },
  {
    userId: 100028,
    userName: '1667519970',
    userEmail: '1667519970@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 1,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:32:18.779Z'
  },
  {
    userId: 100023,
    userName: '1050732226',
    userEmail: '1050732226@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:33:42.675Z'
  },
  {
    userId: 100024,
    userName: '191337035',
    userEmail: '191337035@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-30T14:05:01.915Z'
  },
  {
    userId: 100025,
    userName: '717210290',
    userEmail: '717210290@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:34:03.303Z'
  },
  {
    userId: 100027,
    userName: '475721797',
    userEmail: '475721797@mars.com',
    deptId: '65eacdb84a54800ac8dd6183',
    deptName: '2312312',
    state: 2,
    role: 1,
    roleList: '65eaeafb4a54800ac8dd6429',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-22T04:55:23.057Z'
  },
  {
    userId: 100028,
    userName: '1667519970',
    userEmail: '1667519970@mars.com',
    deptId: '',
    deptName: '大前端',
    state: 2,
    role: 1,
    roleList: '',
    createId: 1000002,
    userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    createTime: '2023-11-22T08:52:47.963Z',
    lastLoginTime: '2024-03-08T08:32:18.779Z'
  }
]
userList.map(item => {
  item.userId = item.userId + Math.floor(Math.random() * 100)
  return item
})
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
          deptName: '大前端',
          job: '前端工程师',
          state: 1,
          role: 2,
          createId: 1000002,
          roleList: '655dbedb11c02c8597dce76f'
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/users/list',
    method: 'get',
    response: (config: any) => {
      const { pageSize, state, userId, userName } = config.query
      let list = userList

      if (state !== undefined) {
        list = list.filter(item => state == 0 || item.state == state)
      }

      if (userId || userName) {
        list = list.filter(
          item => (userId ? item.userId === userId : true) && (userName ? item.userName === userName : true)
        )
      }
      return {
        code: 0,
        data: {
          page: {
            pageNum: 1,
            pageSize: pageSize,
            total: list.length
          },
          list
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/users/create',
    method: 'post',
    response: config => {
      return {
        code: 0,
        msg: 'success',
        data: {}
      }
    }
  },
  {
    url: '/api/users/edit',
    method: 'post',
    response: config => {
      return {
        code: 0,
        msg: 'success',
        data: {}
      }
    }
  },
  {
    url: '/api/users/delete',
    method: 'post',
    response: config => {
      return {
        code: 0,
        msg: 'success',
        data: {}
      }
    }
  }
] as MockMethod[]
