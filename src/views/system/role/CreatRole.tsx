import {Form, Input, Modal} from 'antd'
import { useImperativeHandle, useState } from 'react'
import { useForm } from 'antd/es/form/Form'
import { IAction, IModalProp } from '@/types/modal'
import { Role } from '@/types/api'
import api from "@/api/roleApi";
import {message} from "@/utils/AntdGlobal";

export default function (prop: IModalProp<Role.RoleItem>) {
  const [form] = useForm()
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>()
  useImperativeHandle(prop.modalRef, () => {
    return {
      open
    }
  })

  const open = (type: IAction, data?: Role.RoleItem) => {
    setVisible(true)
    setAction(type)
    if (data) form.setFieldsValue(data)
  }
  const handleOk = async () => {
    const valid = await form.validateFields()
    if (valid) {
      const params = form.getFieldsValue()
      if (action === 'create') {
        await api.createRole(params)
      } else {
        await api.editRole(params)
      }
      message.success('操作成功')
      handleCancel()
      prop.updateList()
    }
  }
  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <Modal
      title={action === 'create' ? '新建角色' : '编辑角色'}
      width={800}
      open={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} labelAlign='right' labelCol={{ span: 4 }}>
        <Form.Item name='_id' hidden></Form.Item>
        <Form.Item name='roleName' label='角色'>
          <Input placeholder='请输入角色'></Input>
        </Form.Item>
        <Form.Item name='remark' label='备注'>
          <Input.TextArea></Input.TextArea>
        </Form.Item>
      </Form>
    </Modal>
  )
}
