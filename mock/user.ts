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
  },
  {
    url: '/api/users/all/list',
    method: 'get',
    response: config => {
      return {
        code: 0,
        data: [
          {
            _id: '655da3bf9d9a408c7dd73212',
            userId: 1000016,
            userName: 'JackMa',
            userEmail: 'jackma@mars.com'
          },
          {
            _id: '655dbdb113ca5a39c96af23c',
            userId: 1000002,
            userName: 'admin',
            userEmail: 'admin@mars.com'
          },
          {
            _id: '655f6dfb4a54800ac8d57e65',
            userId: 100057,
            userName: '648243877',
            userEmail: '648243877@mars.com'
          },
          {
            _id: '656006664a54800ac8d57f85',
            userId: 100058,
            userName: '2062742063',
            userEmail: '2062742063@mars.com'
          },
          {
            _id: '656044d84a54800ac8d5819a',
            userId: 100060,
            userName: '测试账号',
            userEmail: '222'
          },
          {
            _id: '656057dc4a54800ac8d583a2',
            userId: 100061,
            userName: '测试删除1',
            userEmail: 'tt@ww.com'
          },
          {
            _id: '656057e94a54800ac8d583a8',
            userId: 100062,
            userName: '测试删除2',
            userEmail: 'ww@qq.com'
          },
          {
            _id: '656061c84a54800ac8d58478',
            userId: 100063,
            userName: '测试form',
            userEmail: 'ad@mars.com'
          },
          {
            _id: '656099224a54800ac8d586aa',
            userId: 100064,
            userName: '1023057228',
            userEmail: '1023057228@mars.com'
          },
          {
            _id: '65609fef4a54800ac8d58775',
            userId: 100065,
            userName: 'test10',
            userEmail: 'test10@163.com'
          },
          {
            _id: '65614f8a4a54800ac8d58a4c',
            userId: 100066,
            userName: '122699029',
            userEmail: '122699029@mars.com'
          },
          {
            _id: '65616eea4a54800ac8d58ad7',
            userId: 100067,
            userName: '1730307573',
            userEmail: '1730307573@mars.com'
          }
        ],
        msg: ''
      }
    }
  },
  {
    url: '/api/users/getPermissionList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          menuList: [
            {
              _id: '655db45ff10762608048caec',
              menuType: 1,
              menuName: '工作台',
              path: '/dashboard',
              icon: 'DesktopOutlined',
              orderBy: 0,
              menuState: 1,
              parentId: '',
              createId: 1000002,
              createTime: '2023-11-22T07:50:59.931Z',
              updateTime: '2023-11-22T08:27:07.828Z',
              __v: 0,
              children: [
                {
                  _id: '655db4a4f10762608048caf4',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'home@query',
                  orderBy: 0,
                  menuState: 1,
                  parentId: '655db45ff10762608048caec',
                  createId: 1000002,
                  createTime: '2023-11-22T07:50:59.931Z',
                  updateTime: '2023-11-22T07:50:59.931Z',
                  __v: 0
                }
              ],
              buttons: [
                {
                  _id: '655db4a4f10762608048caf4',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'home@query',
                  orderBy: 0,
                  menuState: 1,
                  parentId: '655db45ff10762608048caec',
                  createId: 1000002,
                  createTime: '2023-11-22T07:50:59.931Z',
                  updateTime: '2023-11-22T07:50:59.931Z',
                  __v: 0
                }
              ]
            },
            {
              _id: '655db520f10762608048cafa',
              menuType: 1,
              menuName: '用户管理',
              path: '',
              icon: 'UsergroupAddOutlined',
              orderBy: 1,
              menuState: 1,
              parentId: '',
              createId: 1000002,
              createTime: '2023-11-22T07:50:59.931Z',
              updateTime: '2023-11-22T07:50:59.931Z',
              __v: 0,
              children: [
                {
                  _id: '655db546f10762608048cafe',
                  menuType: 1,
                  menuName: '用户列表',
                  path: '/userList',
                  icon: 'UserOutlined',
                  orderBy: 0,
                  menuState: 1,
                  parentId: '655db520f10762608048cafa',
                  createId: 1000002,
                  createTime: '2023-11-22T07:50:59.931Z',
                  updateTime: '2023-11-22T08:27:42.307Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655db556f10762608048cb02',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'user@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T07:50:59.931Z',
                      updateTime: '2023-11-22T07:50:59.931Z',
                      __v: 0
                    },
                    {
                      _id: '655dc53ed4dc6d6fda15dbad',
                      menuType: 2,
                      menuName: '新增',
                      menuCode: 'user@create',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc67ed4dc6d6fda15dbc7',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'user@edit',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc68ad4dc6d6fda15dbcb',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'user@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655db556f10762608048cb02',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'user@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T07:50:59.931Z',
                      updateTime: '2023-11-22T07:50:59.931Z',
                      __v: 0
                    },
                    {
                      _id: '655dc53ed4dc6d6fda15dbad',
                      menuType: 2,
                      menuName: '新增',
                      menuCode: 'user@create',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc67ed4dc6d6fda15dbc7',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'user@edit',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc68ad4dc6d6fda15dbcb',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'user@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655db546f10762608048cafe',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ]
                },
                {
                  _id: '655db59bf10762608048cb06',
                  menuType: 1,
                  menuName: '菜单管理',
                  path: '/menuList',
                  icon: 'MenuOutlined',
                  orderBy: 1,
                  menuState: 1,
                  parentId: '655db520f10762608048cafa',
                  createId: 1000002,
                  createTime: '2023-11-22T07:50:59.931Z',
                  updateTime: '2023-11-22T07:50:59.931Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655db5a8f10762608048cb0a',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'menu@queyr',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T07:50:59.931Z',
                      updateTime: '2023-11-22T07:50:59.931Z',
                      __v: 0
                    },
                    {
                      _id: '655dc69bd4dc6d6fda15dbcf',
                      menuType: 2,
                      menuName: '新增',
                      menuCode: 'menu@create',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6a5d4dc6d6fda15dbd3',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'menu@edit',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6afd4dc6d6fda15dbd7',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'menu@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655db5a8f10762608048cb0a',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'menu@queyr',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T07:50:59.931Z',
                      updateTime: '2023-11-22T07:50:59.931Z',
                      __v: 0
                    },
                    {
                      _id: '655dc69bd4dc6d6fda15dbcf',
                      menuType: 2,
                      menuName: '新增',
                      menuCode: 'menu@create',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6a5d4dc6d6fda15dbd3',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'menu@edit',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6afd4dc6d6fda15dbd7',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'menu@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655db59bf10762608048cb06',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ]
                },
                {
                  _id: '655db5c7f10762608048cb0e',
                  menuType: 1,
                  menuName: '角色管理',
                  path: '/roleList',
                  icon: 'TrademarkCircleOutlined',
                  orderBy: 2,
                  menuState: 1,
                  parentId: '655db520f10762608048cafa',
                  createId: 1000002,
                  createTime: '2023-11-22T07:50:59.931Z',
                  updateTime: '2023-11-22T07:50:59.931Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655dbb0011c02c8597dce710',
                      menuType: 2,
                      menuName: '查看',
                      icon: 'role@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:40:20.527Z',
                      __v: 0,
                      menuCode: 'role@query'
                    },
                    {
                      _id: '655dc6c7d4dc6d6fda15dbdb',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'role@edit',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6d3d4dc6d6fda15dbdf',
                      menuType: 2,
                      menuName: '设置权限',
                      menuCode: 'role@setting',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6ddd4dc6d6fda15dbe3',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'role@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655dbb0011c02c8597dce710',
                      menuType: 2,
                      menuName: '查看',
                      icon: 'role@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:40:20.527Z',
                      __v: 0,
                      menuCode: 'role@query'
                    },
                    {
                      _id: '655dc6c7d4dc6d6fda15dbdb',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'role@edit',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6d3d4dc6d6fda15dbdf',
                      menuType: 2,
                      menuName: '设置权限',
                      menuCode: 'role@setting',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6ddd4dc6d6fda15dbe3',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'role@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655db5c7f10762608048cb0e',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ]
                },
                {
                  _id: '655dbbb911c02c8597dce71c',
                  menuType: 1,
                  menuName: '部门管理',
                  path: '/deptList',
                  icon: 'SendOutlined',
                  orderBy: 3,
                  menuState: 1,
                  parentId: '655db520f10762608048cafa',
                  createId: 1000002,
                  createTime: '2023-11-22T08:23:39.918Z',
                  updateTime: '2023-11-22T08:23:39.918Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655dbbc411c02c8597dce720',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'dept@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:23:39.918Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6f4d4dc6d6fda15dbe7',
                      menuType: 2,
                      menuName: '新增',
                      menuCode: 'dept@create',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6fdd4dc6d6fda15dbeb',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'dept@edit',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc708d4dc6d6fda15dbef',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'dept@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655dbbc411c02c8597dce720',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'dept@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:23:39.918Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6f4d4dc6d6fda15dbe7',
                      menuType: 2,
                      menuName: '新增',
                      menuCode: 'dept@create',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc6fdd4dc6d6fda15dbeb',
                      menuType: 2,
                      menuName: '编辑',
                      menuCode: 'dept@edit',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc708d4dc6d6fda15dbef',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'dept@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655dbbb911c02c8597dce71c',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ]
                }
              ]
            },
            {
              _id: '655dbc1e11c02c8597dce724',
              menuType: 1,
              menuName: '订单管理',
              icon: 'CloudOutlined',
              orderBy: 2,
              menuState: 1,
              parentId: '',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0,
              children: [
                {
                  _id: '655dbc3811c02c8597dce728',
                  menuType: 1,
                  menuName: '订单列表',
                  path: '/orderList',
                  icon: 'BarsOutlined',
                  orderBy: 0,
                  menuState: 1,
                  parentId: '655dbc1e11c02c8597dce724',
                  createId: 1000002,
                  createTime: '2023-11-22T08:23:39.918Z',
                  updateTime: '2023-11-22T08:23:39.918Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655dbc4d11c02c8597dce72c',
                      menuType: 2,
                      menuName: '详情',
                      menuCode: 'order@detail',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T09:17:29.680Z',
                      __v: 0
                    },
                    {
                      _id: '655dc735d4dc6d6fda15dbf6',
                      menuType: 2,
                      menuName: '打点',
                      menuCode: 'order@point',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc73fd4dc6d6fda15dbfa',
                      menuType: 2,
                      menuName: '轨迹',
                      menuCode: 'order@route',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc74cd4dc6d6fda15dbfe',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'order@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655dbc4d11c02c8597dce72c',
                      menuType: 2,
                      menuName: '详情',
                      menuCode: 'order@detail',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T09:17:29.680Z',
                      __v: 0
                    },
                    {
                      _id: '655dc735d4dc6d6fda15dbf6',
                      menuType: 2,
                      menuName: '打点',
                      menuCode: 'order@point',
                      orderBy: 1,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc73fd4dc6d6fda15dbfa',
                      menuType: 2,
                      menuName: '轨迹',
                      menuCode: 'order@route',
                      orderBy: 2,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    },
                    {
                      _id: '655dc74cd4dc6d6fda15dbfe',
                      menuType: 2,
                      menuName: '删除',
                      menuCode: 'order@delete',
                      orderBy: 3,
                      menuState: 1,
                      parentId: '655dbc3811c02c8597dce728',
                      createId: 1000002,
                      createTime: '2023-11-22T08:52:47.967Z',
                      updateTime: '2023-11-22T08:52:47.967Z',
                      __v: 0
                    }
                  ]
                },
                {
                  _id: '655dbc6c11c02c8597dce730',
                  menuType: 1,
                  menuName: '订单聚合',
                  path: '/cluster',
                  icon: 'DotChartOutlined',
                  orderBy: 1,
                  menuState: 1,
                  parentId: '655dbc1e11c02c8597dce724',
                  createId: 1000002,
                  createTime: '2023-11-22T08:23:39.918Z',
                  updateTime: '2023-11-22T08:23:39.918Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655dbc7911c02c8597dce734',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'cluster@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbc6c11c02c8597dce730',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:23:39.918Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655dbc7911c02c8597dce734',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'cluster@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbc6c11c02c8597dce730',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:23:39.918Z',
                      __v: 0
                    }
                  ]
                },
                {
                  _id: '655dbca311c02c8597dce738',
                  menuType: 1,
                  menuName: '司机列表',
                  path: '/driverList',
                  icon: 'PayCircleOutlined',
                  orderBy: 2,
                  menuState: 1,
                  parentId: '655dbc1e11c02c8597dce724',
                  createId: 1000002,
                  createTime: '2023-11-22T08:23:39.918Z',
                  updateTime: '2023-11-22T08:23:39.918Z',
                  __v: 0,
                  children: [
                    {
                      _id: '655dbcb011c02c8597dce73c',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'driverList@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbca311c02c8597dce738',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:23:39.918Z',
                      __v: 0
                    }
                  ],
                  buttons: [
                    {
                      _id: '655dbcb011c02c8597dce73c',
                      menuType: 2,
                      menuName: '查看',
                      menuCode: 'driverList@query',
                      orderBy: 0,
                      menuState: 1,
                      parentId: '655dbca311c02c8597dce738',
                      createId: 1000002,
                      createTime: '2023-11-22T08:23:39.918Z',
                      updateTime: '2023-11-22T08:23:39.918Z',
                      __v: 0
                    }
                  ]
                }
              ]
            }
          ],
          buttonList: [
            'driverList@query',
            'cluster@query',
            'order@detail',
            'order@point',
            'order@route',
            'order@delete',
            'dept@query',
            'dept@create',
            'dept@edit',
            'dept@delete',
            'role@query',
            'role@edit',
            'role@setting',
            'role@delete',
            'menu@queyr',
            'menu@create',
            'menu@edit',
            'menu@delete',
            'user@query',
            'user@create',
            'user@edit',
            'user@delete',
            'home@query'
          ]
        },
        msg: ''
      }
    }
  }
] as MockMethod[]
