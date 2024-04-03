import { Button, Checkbox, Form, type FormProps, Input } from 'antd'
import React, { useState } from 'react'
import styles from './index.module.less'
import serverApi from '@/api'
import { Login as LoginType } from '@/types/api'
import stroage from '@/utils/stroage'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const onFinish = async (values: LoginType.params) => {
    setLoading(true)
    const token = await serverApi.login(values)
    stroage.set('token', token)
    setLoading(false)
    const params = new URLSearchParams(location.search)
    setTimeout(() => {
      location.href = params.get('callback') || '/welcome'
    })
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form
          name='basic'
          initialValues={{ username: 'admin', password: '123456' }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType> name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType> name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login
