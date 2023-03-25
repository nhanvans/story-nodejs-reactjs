import React, { useEffect, useState } from 'react'
import Headers from './Headers'
import Footers from './Footers'
import { Breadcrumb, Layout, Menu } from 'antd'
import './AdminLayout.scss'
import logoIcon from '../../assets/images/logo.main.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { updateCurrentMenuItem } from '../../redux/slices/menubar'
import { useDispatch, useSelector } from 'react-redux'
const { Content, Sider } = Layout

type Props = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const { menuItems, currentItem } = useSelector((state: RootState) => state.menubar)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    dispatch(updateCurrentMenuItem(location.pathname))
  }, [location, dispatch])

  const handleChangeTab = (value: string) => {
    dispatch(updateCurrentMenuItem(String(value)))
  }

  const handleChangeNavigate = (value: string) => {
    navigate(value)
  }

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
            defaultSelectedKeys={[String(currentItem)]}
            selectedKeys={[String(currentItem)]}
            onClick={(e) => {
              handleChangeTab(e.key)
              handleChangeNavigate(e.key)
            }}
            items={menuItems}
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
