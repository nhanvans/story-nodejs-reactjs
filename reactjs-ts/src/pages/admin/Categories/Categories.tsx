import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'
import { Button, Card, Form, Space, Table } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import InputGroup from '../../../components/InputGroup'

// type Props = {}

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}

const Categories = () => {
  const [form] = Form.useForm()
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
          >
            <InputGroup
              key={'Name'}
              label='Name'
              required={true}
              placeholder='Input name category'
              tooltipIcon={<InfoCircleOutlined />}
              tooltipTitle='Input name required'
            />
            <Form.Item>
              <Button type='primary'>Save</Button>
            </Form.Item>
          </Form>
        </Card>
        <Table
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              sorter: (a, b) => a.name.length - b.name.length,
              sortDirections: ['ascend', 'descend']
            },
            {
              title: 'Age',
              dataIndex: 'age',
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.age - b.age
            }
          ]}
          dataSource={[
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park'
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park'
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sydney No. 1 Lake Park'
            },
            {
              key: '4',
              name: 'Jim Red',
              age: 32,
              address: 'London No. 2 Lake Park'
            }
          ]}
          onChange={onChange}
        />
      </Space>
    </AdminLayout>
  )
}

export default Categories
