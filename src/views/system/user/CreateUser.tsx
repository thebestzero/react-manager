import { Form, Input, Modal, Select, TreeSelect } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { IAction, IModalProp } from '@/types/modal'
import { useEffect, useImperativeHandle, useState } from 'react'
import { Dept, Role, User } from '@/types/api'
import { Simulate } from 'react-dom/test-utils'
import severApi from '@/api'
import roleApi from '@/api/roleApi'
import error = Simulate.error
import { message } from '@/utils/AntdGlobal'

const CreateUser = (props: IModalProp) => {
  const [form] = useForm()
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>('create')
  const [deptList, setDeptList] = useState<Dept.DeptItem[]>([])
  const [roleList, setRoleList] = useState<Role.RoleItem[]>([])
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

  useEffect(() => {
    getDeptList()
    getRoleList()
  }, [])

  // 获取部门列表
  const getDeptList = async () => {
    const list = await severApi.getDeptList()
    setDeptList(list)
  }

  // 获取角色列表
  const getRoleList = async () => {
    const list = await roleApi.getAllRoleList()
    setRoleList(list)
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
          <TreeSelect
            treeData={deptList}
            fieldNames={{ label: 'deptName', value: '_id' }}
            placeholder='请选择部门'
            allowClear
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_ALL}
          />
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
          <Select options={roleList} fieldNames={{ label: 'roleName', value: '_id' }}></Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateUser
