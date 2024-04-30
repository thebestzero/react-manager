import { Form, Input, Modal, Select, TreeSelect } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useEffect, useImperativeHandle, useState } from 'react'
import { Dept, User } from '@/types/api'
import serverApi from '@/api'
import { IAction, IModalProp } from '@/types/modal'
import {message} from "@/utils/AntdGlobal";

export default function (props: IModalProp<Dept.EditParams>) {
  const [form] = useForm()
  const [visible, setVisible] = useState(false)
  const [deptList, setDeptList] = useState<Dept.DeptItem[]>([])
  const [userList, setUserList] = useState<User.UserItem[]>([])
  const [action, setAction] = useState<IAction>()

  useImperativeHandle(props.modalRef, () => ({ open }))
  const open = (type: IAction, data?: Dept.EditParams | { parentId: string }) => {
    setVisible(true)
		setAction(type)
		getDeptList()
    if (data) form.setFieldsValue(data)
  }
  // fetch
  const getDeptList = async () => {
    const data = await serverApi.getDeptList()
    setDeptList(data)
  }

  const getAllUserList = async () => {
    const data = await serverApi.getAllUserList()
    setUserList(data)
  }
  // 提交表单
  const handleSubmit = async () => {
    const valid = await form.validateFields()
    if (valid){
			const data = form.getFieldsValue()
			action === 'create' ? await serverApi.createDept(data) : await serverApi.eidtDept(data)
		}
		message.success('操作成功')
		handleCancel()
		props.updateList()
  }
  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }
  // life
  useEffect(() => {
		getAllUserList()
  }, [])
  return (
    <Modal
      title='创建部门'
      open={visible}
      width={800}
      okText='确定'
      cancelText='取消'
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign='right'>
        <Form.Item hidden name='_id'>
          <Input />
        </Form.Item>
        <Form.Item label='上级部门' name='parentId'>
          <TreeSelect
            showSearch
            placeholder='请选择上级部门'
            allowClear
            treeDefaultExpandAll
            treeData={deptList}
            fieldNames={{ label: 'deptName', value: '_id' }}
          />
        </Form.Item>
        <Form.Item label='部门名称' name='deptName' rules={[{ required: true, message: '请输入部门名称' }]}>
          <Input placeholder='请输入部门名称' />
        </Form.Item>
        <Form.Item label='负责人' name='userName' rules={[{ required: true, message: '请选择负责人' }]}>
          <Select options={userList} fieldNames={{ label: 'userName', value: 'userName' }} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
