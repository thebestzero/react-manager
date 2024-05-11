import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import SideMenu from '@/components/SideMenu'
import { Navigate, Outlet, useLocation, useRouteLoaderData } from 'react-router-dom'
import serverApi from '@/api'
const { Content, Footer, Sider } = Layout
import styles from './index.module.less'
import { useStore } from '@/store'
import { searchRoute } from '@/utils'
import { router } from '@/router'
import { IAuthLoader } from '@/router/AuthLoader'
import Tabs from '@/components/Tabs'
const App: React.FC = () => {
  const updateUserInfo = useStore(state => state.updateUserInfo)
  const getUserInfo = async () => {
    const data = await serverApi.getUserInfo()
    updateUserInfo(data)
  }
  const { pathname } = useLocation()
  const data = useRouteLoaderData('layout') as IAuthLoader
  const route = searchRoute(pathname, router)
  if (route && route.meta?.auth === false) {
    // 继续执行
  } else {
    const staticPath = ['/welcome', '/403', '/404']
    if (!data.menuPathList.includes(pathname) && !staticPath.includes(pathname)) {
      return <Navigate to='/403' />
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Watermark content='react-manager'>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={broken => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <SideMenu />
        </Sider>
        <Layout>
          <NavHeader />
					<Tabs/>
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
