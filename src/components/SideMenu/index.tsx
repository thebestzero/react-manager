import React, { useEffect, useState } from 'react'
import Icon, { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import styles from './index.module.less'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import { Menu as IMenu } from '@/types/api'
import { IAuthLoader } from '@/router/AuthLoader'
const SiderMenu = () => {
  type MenuItem = Required<MenuProps>['items'][number]
  const location = useLocation()
  const navigate = useNavigate()
  const [menuList, setMenuList] = useState<MenuItem[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  //提供路由loader返回的值。
  const loaderData = useRouteLoaderData('layout') as IAuthLoader

  // 获取菜单
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem
  }
  function createIcon(name?: string) {
    if (!name) return <></>
    const CustomIcon: { [key: string]: any } = Icon
    const icon = CustomIcon[name]
    return !icon ? <></> : React.createElement(icon)
  }
  const getTreeMenu = (menuList: IMenu.MenuItem[], treeList: MenuItem[] = []) => {
    menuList.forEach((item, index) => {
      if (item.menuType === 1 && item.menuState === 1) {
        !item.buttons
          ? treeList.push(
              getItem(item.menuName, item.path || index, createIcon(item.icon), getTreeMenu(item.children || []))
            )
          : treeList.push(getItem(item.menuName, item.path || index, createIcon(item.icon)))
      }
    })
    return treeList
  }
  // event
  const handleClickLogo = () => {
    navigate('/welcome')
  }
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
    setSelectedKeys([key])
  }
  useEffect(() => {
    const treeList = getTreeMenu(loaderData.menuList)
    setMenuList(treeList)
    setSelectedKeys([location.pathname])
  }, [])
  return (
    <div className={styles.navSide}>
      <div className={styles.logo} onClick={handleClickLogo}>
        <img src='/imgs/logo.png' className={styles.img} />
        <span>阿东客运</span>
      </div>
      <Menu selectedKeys={selectedKeys} onClick={handleMenuClick} items={menuList} mode='inline' theme={'dark'} />
    </div>
  )
}

export default SiderMenu
