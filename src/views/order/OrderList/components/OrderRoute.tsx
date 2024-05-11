import { IDetailProp } from '@/types/modal'
import { Modal, Descriptions } from 'antd'
import { useImperativeHandle, useState } from 'react'
import api from '@/api/orderApi'
import { Order } from '@/types/api'
import { message } from '@/utils/AntdGlobal'
export default function OrderDetail(props: IDetailProp) {
  const [visbile, setVisible] = useState(false)
  const [map, setMap] = useState<any>()
  const [trackAni, setTrackAni] = useState<{
    cancel: () => void
  }>()
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })

  // 打开弹框、暴露方法
  const open = async (orderId: string) => {
    setVisible(true)
    const detail = await api.getOrderDetail(orderId)
    setTimeout(() => {
      renderMap(detail)
    })
  }

  // 渲染地图
  const renderMap = (detail: Order.OrderItem) => {
    if (detail.route.length == 0) message.warning('请先完成打点上报')
    const map = new window.BMapGL.Map('routeMap')
    setMap(map)
    map.centerAndZoom(detail.cityName, 12) // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    const path = detail.route || []
    const point = []
    for (let i = 0; i < path.length; i++) {
      point.push(new window.BMapGL.Point(path[i].lng, path[i].lat))
    }
    const pl = new window.BMapGL.Polyline(point, {
      strokeWeight: '8', //折线宽度，以像素为单位
      strokeOpacity: 0.8, // 折线透明度，取值范围0-1
      strokeColor: '#ed6c00' // 折线颜色
    })
    setTimeout(start, 2000)
    function start() {
      const trackAni = new window.BMapGLLib.TrackAnimation(map, pl, {
        overallView: true,
        tilt: 30,
        duration: 20000,
        delay: 300
      })
      trackAni.start()
      setTrackAni(trackAni)
    }
  }
  // 关闭弹框
  const handleCancel = () => {
    setVisible(false)
    trackAni?.cancel()
    map?.destroy()
    setMap(null)
  }
  return (
    <Modal title='订单详情' width={1100} footer={false} open={visbile} onCancel={handleCancel}>
      <div id='routeMap' style={{ height: 500 }}></div>
    </Modal>
  )
}
