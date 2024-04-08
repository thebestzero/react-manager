import { Form, Input, Modal, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { IAction, IModalProp } from '@/types/modal'
import { useImperativeHandle, useState } from 'react'
import { User } from '@/types/api'
import { Simulate } from 'react-dom/test-utils'
import severApi from '@/api'
import error = Simulate.error
import { message } from '@/utils/AntdGlobal'
const CreateUser = (props: IModalProp) => {
  const [form] = useForm()
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>('create')

  // 暴露子组件open方法
  useImperativeHandle(props.modalRef, () => {
    return {
      open
    }
  })
  // 调用弹框显示方法
  const open = (type: IAction, data?: User.UserItem) => {
    setVisible(true)
    setAction(type)
    if (type === 'edit' && data) {
      form.setFieldsValue(data)
    }
  }
  const handleOk = async () => {
    try {
      await form.validateFields()
      const params = form.getFieldsValue()
      if (action === 'create') {
        await severApi.createUser(params)
        message.success('创建成功')
      }
      handleCancel()
      props.updateList()
    } catch (e) {
      message.error('校验失败')
      console.log(error)
    }
  }
  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }
  return (
    <Modal
      title={action === 'create' ? '创建用户' : '编辑用户'}
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='确定'
      cancelText='取消'
      width={800}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign='right'>
        <Form.Item name='userId' hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label='用户名称'
          name='userName'
          rules={[
            { required: true, message: '请输入用户名称' },
            { min: 5, max: 12, message: '用户名称最小5个字符，最大12个字符' }
          ]}
        >
          <Input placeholder='请输入用户名称'></Input>
        </Form.Item>
        <Form.Item
          label='用户邮箱'
          name='userEmail'
          rules={[
            { required: true, message: '请输入用户邮箱' },
            { type: 'email', message: '请输入正确的邮箱' },
            {
              pattern: /^\w+@mars.com$/,
              message: '邮箱必须以@mars.com结尾'
            }
          ]}
        >
          <Input placeholder='请输入用户邮箱'></Input>
        </Form.Item>
        <Form.Item
          label='手机号'
          name='mobile'
          rules={[
            { len: 11, message: '请输入11位手机号' },
            { pattern: /1[1-9]\d{9}/, message: '请输入1开头的11位手机号' }
          ]}
        >
          <Input placeholder='请输入手机号'></Input>
        </Form.Item>
        <Form.Item
          label='部门'
          name='deptId'
          rules={[
            {
              required: true,
              message: '请选择部门'
            }
          ]}
        >
          <Input placeholder='部门'></Input>
        </Form.Item>
        <Form.Item label='岗位' name='job'>
          <Input placeholder='请输入岗位'></Input>
        </Form.Item>
        <Form.Item label='状态' name='state'>
          <Select>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='系统角色' name='roleList'>
          <Input placeholder='系统角色'></Input>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateUser
