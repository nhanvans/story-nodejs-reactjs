import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../layouts/AdminLayout'
import { Button, Card, Form, Popconfirm, Space, Table } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import InputGroup from '../../../components/InputGroup'
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation
} from '../../../services/Category.service'
import { Category, responseCategory } from '../../../types/category.type'

// type Props = {}

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}

const Categories = () => {
  const [form] = Form.useForm()
  const [name, setName] = useState('')
  const [dataSource, setDataSource] = useState<Category[]>([])

  const { data: resCate, isLoading, isFetching } = useGetCategoriesQuery()
  const [createCategory] = useCreateCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation()

  useEffect(() => {
    setDataSource(getDataCategories(resCate || {}))
    console.log('dataSourcecheck')
  }, [resCate])

  const getDataCategories = (resCate: responseCategory): Category[] => {
    return (
      resCate?.data?.map((item) => ({
        ...item,
        key: item._id
      })) || []
    )
  }

  const handlechangeNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = () => {
    if (name) {
      createCategory(name)
      setName('')
    }
  }

  const handleDeleteCategory = (category: Category) => {
    if (category) {
      const id = category._id
      deleteCategory(id)
      const newDataSource = dataSource.filter((item) => item._id !== id)
      setDataSource(newDataSource)
    }
  }

  const canSave = Boolean(name)
  console.log(dataSource, isLoading, isFetching, canSave)

  return (
    <AdminLayout>
      <Space
        direction='vertical'
        size='middle'
        style={{
          display: 'flex'
        }}
      >
        <Card title='Add category form' size='small'>
          <Form
            form={form}
            layout='vertical'
            initialValues={{
              requiredMarkValue: 'optional'
            }}
            requiredMark={'optional'}
            onSubmitCapture={handleSubmit}
          >
            <InputGroup
              key={'Name'}
              label='Name'
              required={true}
              placeholder='Input name category'
              tooltipIcon={<InfoCircleOutlined />}
              tooltipTitle='Input name required'
              handleChangeInput={handlechangeNameInput}
              value={name}
            />
            <Form.Item>
              <Button type='primary' onClick={handleSubmit} disabled={!canSave}>
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Table
          columns={[
            {
              title: 'key',
              dataIndex: 'key'
            },
            {
              title: 'Name',
              dataIndex: 'name',
              sorter: (a, b) => a.name.length - b.name.length,
              sortDirections: ['ascend', 'descend']
            },
            {
              title: 'createdAt',
              dataIndex: 'createdAt'
            },
            {
              title: 'updatedAt',
              dataIndex: 'updatedAt'
            },
            {
              title: 'operation',
              dataIndex: 'operation',
              render: (_, record: Category) =>
                dataSource.length >= 1 ? (
                  <Popconfirm title='Sure to delete?' onConfirm={() => handleDeleteCategory(record)}>
                    <p>Delete</p>
                  </Popconfirm>
                ) : null
            }
          ]}
          dataSource={dataSource}
          onChange={onChange}
        />
      </Space>
    </AdminLayout>
  )
}

export default Categories
