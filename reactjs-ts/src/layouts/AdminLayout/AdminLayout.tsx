import React from 'react'
import Headers from './Headers'
import Footers from './Footers'
import Siders from './Siders'
import { Breadcrumb, Layout } from 'antd'
import './AdminLayout.scss'
const { Content } = Layout

type Props = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Layout>
        <Headers />
        <Layout>
          <Siders />
          <Layout style={{ background: '#e7e7e7e7' }}>
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
      </Layout>
    </>
  )
}

export default AdminLayout
