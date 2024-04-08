import * as echarts from 'echarts'
import { useEffect, useRef, useState } from 'react'

export default () => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const [chartInstance, setChartInstance] = useState<echarts.EChartsType>()
  useEffect(() => {
    const instance = echarts.init(chartRef.current as HTMLElement)
    setChartInstance(instance)
  }, [])
  return [chartRef, chartInstance]
}
