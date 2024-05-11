import { Tabs, TabsProps } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom'
import { IAuthLoader } from '@/router/AuthLoader'
import { searchRoute } from '@/utils'

interface TabsItem {
  key: string
  label: string
  closable: boolean
}

export default function () {
  const { pathname } = useLocation()
  const [tabsList, setTabsList] = useState<TabsItem[]>([])
  const [activeKey, setActiveKey] = useState('')
  const data = useRouteLoaderData('layout') as IAuthLoader

  const navigate = useNavigate()
  useEffect(() => {
    addTabs()
  }, [pathname])
  const addTabs = () => {
    const route = searchRoute(pathname, data.menuList)
    if (!route) return
    if (!tabsList.find(item => item.key === route.path)) {
      tabsList.push({
        key: route.path,
        label: route.menuName,
        closable: pathname !== '/welcome'
      })
    }
    setActiveKey(route.path)
    setTabsList([...tabsList])
  }
  const handleDel = (path: string) => {
    if (pathname === path) {
      tabsList.forEach((item, index) => {
        if (item.key != pathname) return
        const nextTab = tabsList[index + 1] || tabsList[index - 1]
        if (!nextTab) return
        navigate(nextTab.key)
      })
    }
    setTabsList(tabsList.filter(item => item.key != path))
  }
  const handleChange = (path: string) => {
    navigate(path)
  }
  const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
    handleDel(targetKey as string)
  }
  return (
    <Tabs
      items={tabsList}
      type='editable-card'
      hideAdd
      activeKey={activeKey}
      tabBarStyle={{ height: 40, marginBottom: 0, backgroundColor: '#fff' }}
      onChange={handleChange}
      onEdit={onEdit}
    />
  )
}
