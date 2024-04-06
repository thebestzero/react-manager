import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/order/dashboard/getReportData',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          driverCount: 278600,
          totalMoney: 3984200,
          orderCount: 1306000,
          cityNum: 80
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/order/dashboard/getPieCityData',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            value: 962,
            name: '北京'
          },
          {
            value: 871,
            name: '上海'
          },
          {
            value: 542,
            name: '深圳'
          },
          {
            value: 966,
            name: '广州'
          },
          {
            value: 194,
            name: '杭州'
          },
          {
            value: 332,
            name: '武汉'
          }
        ],
        msg: ''
      }
    }
  },
  {
    url: '/api/order/dashboard/getLineData',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          label: ['5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月'],
          order: [449, 776, 621, 635, 879, 294, 756, 689, 964, 367, 789, 584],
          money: [383, 869, 57, 977, 88, 288, 756, 920, 327, 700, 317, 119]
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/order/dashboard/getPieAgeData',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            value: 883,
            name: '北京'
          },
          {
            value: 653,
            name: '上海'
          },
          {
            value: 455,
            name: '深圳'
          },
          {
            value: 330,
            name: '广州'
          },
          {
            value: 540,
            name: '杭州'
          },
          {
            value: 347,
            name: '武汉'
          }
        ],
        msg: ''
      }
    }
  },
  {
    url: '/api/order/dashboard/getRadarData',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          indicator: [
            {
              name: '服务态度',
              max: 10
            },
            {
              name: '在线时长',
              max: 600
            },
            {
              name: '接单率',
              max: 100
            },
            {
              name: '评分',
              max: 5
            },
            {
              name: '关注度',
              max: 10000
            }
          ],
          data: [
            {
              value: [8, 300, 80, 4, 9000],
              name: '司机模型诊断'
            }
          ]
        },
        msg: ''
      }
    }
  }
] as MockMethod[]
