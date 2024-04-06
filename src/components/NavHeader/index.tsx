import React from 'react'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Dropdown, MenuProps, Switch } from 'antd'
import style from './index.module.less'
import { useStore } from '@/store'
import stroage from "@/utils/stroage";

const NavHeader: React.FC = () => {
  const userInfo = useStore(state => state.userInfo)
  const items = [
    { key: 'email', label: <span>邮箱：{userInfo.userEmail}</span> },
    { key: 'logout', label: <span>退出</span> }
  ]
  const dropClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
			stroage.remove('token')
      location.href = '/login?callback=' + encodeURIComponent(location.href)
    }
  }
  return (
    <div className={style.navHeader}>
      <div className={style.left}>
        <MenuFoldOutlined />
        <Breadcrumb
          items={[
            {
              title: 'Home'
            },
            {
              title: <a href=''>Application Center</a>
            },
            {
              title: <a href=''>Application List</a>
            },
            {
              title: 'An Application'
            }
          ]}
        />
      </div>
      <div className={style.right}>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认'></Switch>
        <Dropdown menu={{ items, onClick: dropClick }}>
          <div>
            <span className={style.nickName}>{userInfo.userName}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
