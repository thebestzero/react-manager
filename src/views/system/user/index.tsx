import { Button, Form, Input, Modal, Select, Space, Table } from 'antd'
import { useEffect, useState, useRef } from 'react'
import { PageParams, User } from '@/types/api'
import serverApi from '@/api'
import { ColumnsType } from 'antd/es/table'
import { formatDate } from '@/utils'
import CreateUser from '@/views/system/user/CreateUser'
import { IAction } from '@/types/modal'
import { message } from '@/utils/AntdGlobal'

export default function UserList() {
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState<User.UserItem[]>([])
  const [total, setTotal] = useState(0)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  })
  const [userIds, setUserIds] = useState<number[]>([])
  const modalRef = useRef<{
    open: (type: IAction, data?: User.UserItem) => void
  }>()
  const columns: ColumnsType<User.UserItem> = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '用户邮箱',
      dataIndex: 'userEmail',
      key: 'userEmail'
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      key: 'role',
      render(role: number) {
        return {
          0: '超级管理员',
          1: '管理员',
          2: '体验管理员',
          3: '普通用户'
        }[role]
      }
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      key: 'state',
      render(state: number) {
        return {
          1: '在职',
          2: '离职',
          3: '试用期'
        }[state]
      }
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render(createTime: string) {
        return formatDate(createTime)
      }
    },
    {
      title: '操作',
      key: 'address',
      render(record: User.UserItem) {
        return (
          <Space>
            <Button type='text' onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button type='text' danger onClick={() => handleDel(record.userId)}>
              删除
            </Button>
          </Space>
        )
      }
    }
  ]

  const getUserList = async (params: PageParams) => {
    const formState = form.getFieldsValue()
    const data = await serverApi.getUserList({ ...formState,
			pageNum: params.pageNum, pageSize: params.pageSize || pagination.pageSize })
    setDataSource(data.list)
    setTotal(data.page.total)
    setPagination({
      current: data.page.pageNum,
      pageSize: data.page.pageSize
    })
  }
  // 公共删除用户接口
  const handleUserDelSubmit = async (ids: number[]) => {
    try {
      await serverApi.delUser({
        userIds: ids
      })
      message.success('删除成功')
      setUserIds([])
      form.resetFields()
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearch = () => {
    getUserList({ pageNum: 1 })
  }
  const handleReset = () => {
    form.resetFields()
  }
  const handleAddUser = () => {
    modalRef.current?.open('create')
  }
  const handleEdit = (record: User.UserItem) => {
    modalRef.current?.open('edit', record)
  }
  const handleDel = (userId: number) => {
    Modal.confirm({
      title: '删除确认',
      content: <span>确认删除该用户吗？</span>,
      onOk() {
        handleUserDelSubmit([userId])
      }
    })
  }
  const handlePatchConfirm = () => {
    // 批量删除确认
    if (userIds.length === 0) {
      message.error('请选择要删除的用户')
      return
    }
    Modal.confirm({
      title: '删除确认',
      content: <span>确认删除该批用户吗？</span>,
      onOk: () => {
        handleUserDelSubmit(userIds)
      }
    })
  }
  useEffect(() => {
    getUserList({ pageNum: 1})
  }, [])
  return (
    <div className='user-list'>
      <Form className='search-form' layout='inline' form={form} initialValues={{ userId: '', userName: '', state: 0 }}>
        <Form.Item name='userId' label='用户ID'>
          <Input placeholder='请输入用户ID' />
        </Form.Item>
        <Form.Item name='userName' label='用户名称'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item name='state' label='状态'>
          <Select
            style={{ width: 120 }}
            options={[
              { value: 0, label: '所有' },
              { value: 1, label: '在职' },
              { value: 2, label: '离职' },
              { value: 3, label: '试用期' }
            ]}
          />
        </Form.Item>
        <Button type='primary' onClick={handleSearch} style={{ marginRight: '10px' }}>
          搜索
        </Button>
        <Button type='primary' onClick={handleReset}>
          重置
        </Button>
      </Form>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>用户列表</div>
          <div className='action'>
            <Button type='primary' onClick={handleAddUser}>
              新增
            </Button>
            <Button type='primary' danger onClick={handlePatchConfirm}>
              批量删除
            </Button>
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey='userId'
          bordered
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: userIds,
            onChange(selectedRowKeys) {
              setUserIds(selectedRowKeys as number[])
            }
          }}
          pagination={{
            position: ['bottomRight'],
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: total,
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: total => `总共 ${total} 条`,
            onChange: (current, pageSize) => {
              setPagination({ current, pageSize })
            }
          }}
        />
      </div>
      <CreateUser
        modalRef={modalRef}
        updateList={() => {
          getUserList({ pageNum: 1 })
        }}
      />
    </div>
  )
}
