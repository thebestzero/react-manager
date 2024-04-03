import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import SideMenu from '@/components/SideMenu'
import {Outlet} from "react-router-dom";

const { Content, Footer, Sider } = Layout
import styles from './index.module.less'

const App: React.FC = () => {
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
          <Content className={styles.content}>
            <div className={styles.wrapper}><Outlet/></div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
