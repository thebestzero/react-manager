import { MockMethod } from 'vite-plugin-mock'
let routeArr: any = []
export default [
  {
    url: '/api/order/cityList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            id: 10001,
            name: '北京'
          },
          {
            id: 10002,
            name: '上海'
          },
          {
            id: 10003,
            name: '深圳'
          },
          {
            id: 10004,
            name: '广州'
          },
          {
            id: 10005,
            name: '武汉'
          },
          {
            id: 10006,
            name: '重庆'
          },
          {
            id: 10007,
            name: '杭州'
          },
          {
            id: 10008,
            name: '南京'
          },
          {
            id: 10009,
            name: '成都'
          }
        ],
        msg: ''
      }
    }
  },
  {
    url: '/api/order/vehicleList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            id: 1,
            name: '微面'
          },
          {
            id: 2,
            name: '小面'
          },
          {
            id: 3,
            name: '中面'
          },
          {
            id: 4,
            name: '小货'
          },
          {
            id: 5,
            name: '中货'
          }
        ],
        msg: ''
      }
    }
  },
  {
    url: '/api/order/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          page: {
            pageNum: 1,
            pageSize: 10,
            total: 0
          },
          list: [
            {
              orderId: 'test01',
              cityName: '上海',
              startAddress: '徐汇',
              endAddress: '浦东新区',
              createTime: '2023-11-22T08:52:47.963Z',
              orderAmount: 120,
              state: 1,
              userName: '汤姆',
              driverName: '杰克'
            }
          ]
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/order/detail/:orderId',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          _id: 'test01',
          orderId: 'test01',
          cityName: '上海',
          startAddress: '徐汇',
          endAddress: '浦东新区',
          createTime: '2023-11-22T08:52:47.963Z',
          orderAmount: 120,
          state: 1,
          userName: '汤姆',
          driverName: '杰克',
          mobile: 17611000011,
          remark: '',
          route: routeArr || [],
          userPayAmount: 120,
          driverAmount: 80,
          payType: 1,
          vehicleName: '小面',
          useTime: '2023-11-22T08:52:47.963Z',
          endTime: '2023-11-22T08:52:47.963Z'
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/order/edit',
    method: 'post',
    response: config => {
      const { route } = config.body
      if (Array.isArray(route)) routeArr = route
      return {
        code: 0,
        msg: 'success',
        data: {}
      }
    }
  },
  {
    url: '/api/order/delete',
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
