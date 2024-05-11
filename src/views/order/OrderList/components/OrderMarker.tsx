import { IDetailProp } from '@/types/modal'
import { Modal, Descriptions } from 'antd'
import { useImperativeHandle, useState } from 'react'
import api from '@/api/orderApi'
import { Order } from '@/types/api'
export default function OrderDetail(props: IDetailProp) {
  const [visbile, setVisible] = useState(false)
  const [markers, setMarkers] = useState<{ lng: string; lat: string; id: number }[]>([])
  const [orderId, setOrderId] = useState('')
  const [map, setMap] = useState<any>()

  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })

  // 打开弹框、暴露方法
  const open = async (orderId: string) => {
    setOrderId(orderId)
    setVisible(true)
    const detail = await api.getOrderDetail(orderId)
    renderMap(detail)
  }

  // 渲染地图
  const renderMap = (detail: Order.OrderItem) => {
    const map = new window.BMapGL.Map('markerMap')
		setMap(map)
    map.centerAndZoom(detail.cityName, 12) // 初始化地图，设置中心点坐标和地图级别
    const scaleCtrl = new window.BMapGL.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    const zoomCtrl = new window.BMapGL.ZoomControl() // 添加缩放控件
    map.addControl(zoomCtrl)
    const cityCtrl = new window.BMapGL.CityListControl() // 添加城市列表控件
    map.addControl(cityCtrl)
    detail.route?.map(item => {
      createMarker(map, item.lng, item.lat)
    })
    // 绑定事件
    map.addEventListener('click', function (e: any) {
      createMarker(map, e.latlng.lng, e.latlng.lat)
    })
  }
  // 创建marker
  const createMarker = (map: any, lng: string, lat: string) => {
    const id = Math.random()
    const point = new window.BMapGL.Point(lng, lat)
    const marker = new window.BMapGL.Marker(point) // 创建标注
    markers.push({ lng, lat, id })
    marker.id = id
    const markerMenu = new window.BMapGL.ContextMenu()
    markerMenu.addItem(
      new window.BMapGL.MenuItem('删除', function () {
        map.removeOverlay(marker)
        const index = markers.findIndex(item => item.id === marker.id)
        markers.splice(index, 1)
        setMarkers([...markers])
      })
    )
    setMarkers([...markers])
    marker.addContextMenu(markerMenu) //添加右键菜单
    map.addOverlay(marker) // 将标注添加到地图中
  }
  // 关闭弹框
  const handleCancel = () => {
    setVisible(false)
    setMarkers([])
		map?.destroy()
		setMap(null)
  }
  const handleOk = async () => {
    await api.updateOrderInfo({
      orderId,
      route: markers
    })
    handleCancel()
  }
  return (
    <Modal
      title='订单详情'
      width={1100}
      okText='确认'
      cancelText='取消'
      open={visbile}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <div id='markerMap' style={{ height: 500 }}></div>
    </Modal>
  )
}
