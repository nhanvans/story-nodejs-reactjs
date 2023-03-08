import React, { useState } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import { Breadcrumb, Layout, Menu } from 'antd'
import './AdminLayout.scss'
import logoIcon from '../../assets/images/logo.main.png'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { menuSibar } from '../../utils/constants/MenuSider'
const { Content, Sider } = Layout

type Props = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('0')

  return (
    <>
      <Layout>
        <Sider theme='dark' trigger={null} collapsible collapsed={collapsed}>
          <div className='logo-brand'>
            <img src={logoIcon} alt='' />
          </div>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            // items={items2}
          >
            {menuSibar.map((menu, key) => (
              <Menu.Item key={key} icon={menu.icon} onClick={() => setSelectedKey(String(key))}>
                <Link to={menu.path} key={menu.key}>
                  {menu.label}
                </Link>
              </Menu.Item>
            ))}

            <Menu.Item icon={<UserOutlined />} onClick={() => setSelectedKey(String(100))} key={'100'}>
              <Link to={'/admin/dashboard'}>Home</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout' style={{ background: '#e7e7e7e7' }}>
          <Headers collapsed={collapsed} setCollapsed={setCollapsed} />

          <Breadcrumb
            style={{
              margin: '16px 0 16px 20px'
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              marginLeft: 20,
              marginBottom: 16,
              minHeight: 880,
              background: '#fff'
            }}
          >
            {children}
          </Content>
          <Footers />
        </Layout>
      </Layout>
    </>
  )
}

export default AdminLayout
