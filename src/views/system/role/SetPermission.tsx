import { Form, Input, Modal, Tree, TreeProps } from 'antd'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import { useForm } from 'antd/es/form/Form'
import { IAction, IModalProp } from '@/types/modal'
import { Role, Menu } from '@/types/api'
import serverApi from '@/api'
import roleAPi from "@/api/roleApi";
import {message} from "@/utils/AntdGlobal";

export default function (prop: IModalProp<Role.RoleItem>) {
  const [visible, setVisible] = useState(false)
  const [roleInfo, setRoleInfo] = useState<Role.RoleItem>()
  const [menuList, setMenuList] = useState<Menu.MenuItem[]>()
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([])
  const [permission, setPermission] = useState<Role.Permission>()

  useImperativeHandle(prop.modalRef, () => {
    return {
      open
    }
  })
  useEffect(() => {
    getMenuList()
  }, [])
  const getMenuList = async () => {
    const data = await serverApi.getMenuList()
    setMenuList(data)
  }
  const open = (type: IAction, data?: Role.RoleItem) => {
    setVisible(true)
    setRoleInfo(data)
    setCheckedKeys(data?.permissionList.checkedKeys || [])
  }
  const handleOk = async () => {
    if (permission) {
      await roleAPi.updatePermission(permission)
      message.success('权限设置成功')
      handleCancel()
      prop.updateList()
    }
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const onCheck = (checkedKeysValue: any, item: any) => {
    setCheckedKeys(checkedKeysValue as React.Key[])
    const checkedKeys: string[] = []
    const parentKeys: string[] = []
    item.checkedNodes.forEach((node: any) => {
      if (node.menuType === 2) {
        checkedKeys.push(node._id)
      } else {
        parentKeys.push(node._id)
      }
    })
		setPermission({
      _id: roleInfo?._id || '',
      permissionList: {
        checkedKeys,
        halfCheckedKeys: parentKeys.concat(item.halfCheckedKeys)
      }
    })
  }
  return (
    <Modal
      title='设置权限'
      width={800}
      open={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form labelAlign='right' labelCol={{ span: 4 }}>
        <Form.Item label='角色名称'>{roleInfo?.roleName}</Form.Item>
        <Form.Item label='权限'>
          <Tree
            checkable
            defaultExpandAll
            fieldNames={{ title: 'menuName', key: '_id', children: 'children' }}
            checkedKeys={checkedKeys}
            treeData={menuList}
            onCheck={onCheck}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
