import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
const { Sider } = Layout
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { SITE_MAP } from '../../utils/constants/Path'
// type Props = {
//   s: string
// }
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1)
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1
//       return {
//         key: subKey,
//         label: `option${subKey}`
//       }
//     })
//   }
// })

const menuSibar = [
  {
    path: SITE_MAP.ADMIN.DASHBOARD,
    icon: <LaptopOutlined />,
    key: SITE_MAP.ADMIN.DASHBOARD,
    label: 'Dashboard'
  },
  {
    path: SITE_MAP.HOME,
    icon: <NotificationOutlined />,
    key: SITE_MAP.HOME,
    label: 'Home'
  }
]

const Siders = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        style={{
          height: '100%',
          borderRight: 0
        }}
        // items={items2}
      >
        {menuSibar.map((menu, key) => (
          <Menu.Item key={key} icon={menu.icon}>
            <Link to={menu.path} key={key}>
              {menu.label}
            </Link>
          </Menu.Item>
        ))}

        <Menu.Item
          icon={<UserOutlined />}
          key={'2'}
          onClick={() => {
            console.log('e me mi')

            return
          }}
        >
          Home
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Siders
