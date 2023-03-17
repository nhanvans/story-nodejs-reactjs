import React from 'react'
import { Col, Layout, Menu, Row, Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const { Header } = Layout

type Props = {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const items1 = ['1', '2', '3', '4', '5'].map((key) => ({
  key,
  label: `nav ${key}`
}))

const Headers = (props: Props) => {
  const { collapsed, setCollapsed } = props
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Header
      style={{
        backgroundColor: 'white',
        paddingInline: '0'
      }}
    >
      <Row gutter={[10, 0]}>
        <Col span={2}>
          {' '}
          <div className='buttonToggleCollapsed'>
            <Button
              type='primary'
              onClick={toggleCollapsed}
              style={{
                marginLeft: 16
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </div>
        </Col>

        <Col span={22}>
          <Menu
            style={{
              width: '100%',
              justifyContent: 'flex-end'
            }}
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            items={items1}
          />
        </Col>
      </Row>
    </Header>
  )
}

export default Headers
