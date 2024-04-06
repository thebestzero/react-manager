import { Descriptions, Card, Button } from 'antd'
import type { DescriptionsProps } from 'antd'
import styles from './index.module.less'
import { useEffect } from 'react'
import * as echarts from 'echarts'
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '用户ID',
    children: 'Zhou Maomao'
  },
  {
    key: '2',
    label: '邮箱',
    children: '1810000000'
  },
  {
    key: '3',
    label: '状态',
    children: 'Hangzhou, Zhejiang'
  },
  {
    key: '4',
    label: '手机号',
    children: 'empty'
  },
  {
    key: '5',
    label: '岗位',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China'
  },
  {
    key: '6',
    label: '部门',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China'
  }
]
const lineOption = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: 50,
    right: 50,
    bottom: 20
  },
  legend: {},
  xAxis: {
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '订单',
      type: 'line',
      data: [449, 776, 621, 635, 879, 294, 756, 689, 964, 367, 789, 584]
    },
    {
      name: '流水',
      type: 'line',
      data: [383, 869, 57, 977, 88, 288, 756, 920, 327, 700, 317, 119]
    }
  ]
}
const pieCityOption = {
  title: {
    text: '司机城市分布',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '城市分布',
      type: 'pie',
      radius: '50%',
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
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
const pieAgeOption = {
  title: {
    text: '司机年龄分布',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '年龄分布',
      type: 'pie',
      radius: [50, 180],
      roseType: 'area',
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
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
const radorOption = {
  // title: {
  //   text: '司机模型诊断',
  //   left: 'center'
  // },
  legend: {
    data: ['司机模型诊断']
  },
  radar: {
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
    ]
  },
  series: [
    {
      name: '模型诊断',
      type: 'radar',
      data: [
        {
          value: [8, 300, 80, 4, 9000],
          name: '司机模型诊断'
        }
      ]
    }
  ]
}
const Dashboard = () => {
  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart')
    const lineChartInstance = echarts.init(lineChartDom as HTMLElement)
    lineChartInstance.setOption(lineOption)
    const pieCityChartDom = document.getElementById('pieCityChart')
    const pieCityChartInstance = echarts.init(pieCityChartDom as HTMLElement)
    pieCityChartInstance.setOption(pieCityOption)
    const pieAgeChartDom = document.getElementById('pieAgeChart')
    const pieAgeChartInstance = echarts.init(pieAgeChartDom as HTMLElement)
    pieAgeChartInstance.setOption(pieAgeOption)
    const radorCharttDom = document.getElementById('radorChart')
    const radorChartInstance = echarts.init(radorCharttDom as HTMLElement)
    radorChartInstance.setOption(radorOption)
  }, [])
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          className={styles.userImg}
        />
        <Descriptions title='欢迎新同学，每天要开心！' items={items} />
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>100</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>100</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>100</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>100</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title='订单和流水走势图' extra={<Button type='primary'>刷新</Button>}>
          <div className={styles.itemChart} id='lineChart'></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='司机分布' extra={<Button type='primary'>刷新</Button>}>
          <div className={styles.pieChart}>
            <div className={styles.itemPie} id='pieCityChart'></div>
            <div className={styles.itemPie} id='pieAgeChart'></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='模型诊断' extra={<Button type='primary'>刷新</Button>}>
          <div className={styles.itemChart} id='radorChart'></div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
