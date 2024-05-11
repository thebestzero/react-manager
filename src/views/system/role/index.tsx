import { Button, Form, Input, Modal, Select, Space, Table } from 'antd'
import { useEffect, useState, useRef } from 'react'
import { PageParams, Role, User } from '@/types/api'
import serverApi from '@/api/roleApi'
import { ColumnsType } from 'antd/es/table'
import { formatDate } from '@/utils'
import CreateUser from '@/views/system/user/CreateUser'
import { IAction } from '@/types/modal'
import { message } from '@/utils/AntdGlobal'
import { useAntdTable } from 'ahooks'
import CreatRole from '@/views/system/role/CreatRole'
import SetPermission from '@/views/system/role/SetPermission'
export default function UserList() {
  const [form] = Form.useForm()
  const [userIds, setUserIds] = useState<number[]>([])
  const modalRef = useRef<{
    open: (type: IAction, data?: Role.RoleItem) => void
  }>()
  const permissionRef = useRef<{
    open: (type: IAction, data?: Role.RoleItem) => void
  }>()
  const columns: ColumnsType<Role.RoleItem> = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark'
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      render(updateTime: string) {
        return formatDate(updateTime)
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render(createTime: string) {
        return formatDate(createTime)
      }
    },
    {
      title: '操作',
      key: 'address',
      render(record: Role.RoleItem) {
        return (
          <Space>
            <Button type='text' onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button type='text' onClick={() => handlePermission(record)}>
              设置权限
            </Button>
            <Button type='text' danger onClick={() => handleDel(record._id)}>
              删除
            </Button>
          </Space>
        )
      }
    }
  ]

  const getTableData = ({ current, pageSize }: { current: number; pageSize: number }, formData: Role.Params) => {
    return serverApi
      .getRoleList({
        ...formData,
        pageNum: current,
        pageSize
      })
      .then(data => {
        return {
          total: data.page.total,
          list: data.list
        }
      })
  }
  const { tableProps, search } = useAntdTable(getTableData, {
    defaultPageSize: 10,
    form
  })

  // event
  const handleCreate = () => {
    modalRef.current?.open('create')
  }
  const handleEdit = (data: Role.RoleItem) => {
    modalRef.current?.open('edit', data)
  }
  const handlePermission = (data: Role.RoleItem) => {
    permissionRef.current?.open('edit', data)
  }
  const handleDel = (_id: string) => {
    Modal.confirm({
      title: '确认',
      content: <span>确认删除该角色吗？</span>,
      async onOk() {
        await serverApi.delRole({ _id })
        message.success('删除成功')
        search.submit()
      }
    })
  }
  return (
    <div className='user-list'>
      <Form className='search-form' layout='inline' form={form} initialValues={{ userId: '', userName: '', state: 0 }}>
        <Form.Item name='roleName' label='角色名称'>
          <Input placeholder='请输入角色名称' />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type='primary' onClick={() => search.submit()}>
              搜索
            </Button>
            <Button type='primary' onClick={() => search.reset()}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>角色列表</div>
          <div className='action'>
            <Button type='primary' onClick={handleCreate}>
              新增
            </Button>
          </div>
        </div>
        <Table columns={columns} rowKey='_id' bordered {...tableProps} />
      </div>
      <CreatRole modalRef={modalRef} updateList={search.submit} />
      <SetPermission modalRef={permissionRef} updateList={search.submit} />
    </div>
  )
}
