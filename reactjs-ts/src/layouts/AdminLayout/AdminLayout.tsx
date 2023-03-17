import React, { useState } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import { Breadcrumb, Layout, Menu } from 'antd'
import './AdminLayout.scss'
import logoIcon from '../../assets/images/logo.main.png'
import { useNavigate } from 'react-router-dom'
import { menuSibar } from '../../utils/constants/MenuSider'
import type { MenuProps } from 'antd'
const { Content, Sider } = Layout

type Props = {
  children?: React.ReactNode
}

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const setItems = (menuSibar: object) => {
  const menuItem: Array<MenuItem> = []
  Object.values(menuSibar).forEach((element) => {
    menuItem.push(getItem(element.label, element.key, element.icon))
  })

  return menuItem
}

const AdminLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('/')
  const navigate = useNavigate()

  console.log(selectedKey)

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
            onClick={(e) => {
              setSelectedKey(e.key)
              navigate(e.key)
            }}
            items={setItems(menuSibar)}
          >
            {/* <Menu.Item icon={<UserOutlined />} onClick={() => setSelectedKey(String(100))} key={'100'}>
              <Link to={'/admin/dashboard'}>Home</Link>
            </Menu.Item> */}
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
