import { Descriptions, Card, Button } from 'antd'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import { useStore } from '@/store'
import { formatState, formatNum, formatMoney } from '@/utils'
import { Dashboard as DashboardType } from '@/types/api'
import serverApi from '@/api'
import useChart from '@/hook/useChart'
const Dashboard = () => {
  const userInfo = useStore(state => state.userInfo)
  const [report, setReport] = useState<DashboardType.ReportData>({})
  const getReportData = async () => {
    const data = await serverApi.getReportData()
    setReport({ report, ...data })
  }
  const [lineRef, lineChartInstance] = useChart()
  const [pieCityRef, pieCityChartInstance] = useChart()
  const [pieAgeRef, pieAgeChartInstance] = useChart()
  const [radorRef, radorChartInstance] = useChart()
  useEffect(() => {
    getReportData()
  }, [])
  useEffect(() => {
    renderLineChart()
    renderPieChart1()
    renderPieChart2()
    renderRadarChart()
  }, [lineChartInstance, pieCityChartInstance, pieAgeChartInstance, radorChartInstance])

  const renderLineChart = async () => {
    if (!lineChartInstance) return
    const data = await serverApi.getLineData()
    lineChartInstance?.setOption({
      // title: {
      //   text: '订单和流水走势图'
      // },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['订单', '流水']
      },
      grid: {
        left: 50,
        right: 50,
        bottom: 20
      },
      xAxis: {
        data: data.label
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单',
          type: 'line',
          data: data.order
        },
        {
          name: '流水',
          type: 'line',
          data: data.money
        }
      ]
    })
  }
  const renderPieChart1 = async () => {
    if (!pieCityChartInstance) return
    const data = await serverApi.getPieCityData()
    pieCityChartInstance?.setOption({
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
          data
        }
      ]
    })
  }
  const renderPieChart2 = async () => {
    if (!pieAgeChartInstance) return
    const data = await serverApi.getPieAgeData()
    pieAgeChartInstance?.setOption({
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
          data
        }
      ]
    })
  }
  const renderRadarChart = async () => {
    if (!radorChartInstance) return
    const data = await serverApi.getRadarData()
    radorChartInstance?.setOption({
      // title: {
      //   text: '司机模型诊断',
      //   left: 'center'
      // },
      legend: {
        data: ['司机模型诊断']
      },
      radar: {
        indicator: data.indicator
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: data.data
        }
      ]
    })
  }
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          className={styles.userImg}
        />
        <Descriptions title='欢迎新同学，每天要开心！'>
          <Descriptions.Item label='用户ID'>{userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label='邮箱'>{userInfo.userEmail}</Descriptions.Item>
          <Descriptions.Item label='状态'>{formatState(userInfo.state)}</Descriptions.Item>
          <Descriptions.Item label='手机号'>{userInfo.mobile}</Descriptions.Item>
          <Descriptions.Item label='岗位'>{userInfo.job}</Descriptions.Item>
          <Descriptions.Item label='部门'>{userInfo.deptName}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>{formatNum(report?.driverCount)}个</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>{formatMoney(report?.totalMoney)}元</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>{formatNum(report?.orderCount)}单</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>{formatNum(report?.cityNum)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title='订单和流水走势图'>
          <div className={styles.itemChart} ref={lineRef}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='司机分布'>
          <div className={styles.pieChart}>
            <div className={styles.itemPie} ref={pieCityRef}></div>
            <div className={styles.itemPie} ref={pieAgeRef}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='模型诊断'>
          <div className={styles.itemChart} ref={radorRef}></div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
