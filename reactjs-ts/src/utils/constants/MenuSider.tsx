import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { SITE_MAP } from './Path'

export const menuSibar = [
  {
    path: SITE_MAP.ADMIN.DASHBOARD,
    icon: <LaptopOutlined />,
    key: SITE_MAP.ADMIN.DASHBOARD,
    label: 'Dashboard'
  },
  {
    path: SITE_MAP.ADMIN.CATEGORY,
    icon: <NotificationOutlined />,
    key: SITE_MAP.ADMIN.CATEGORY,
    label: 'Category'
  },
  {
    path: SITE_MAP.ADMIN.STORY,
    icon: <NotificationOutlined />,
    key: SITE_MAP.ADMIN.STORY,
    label: 'Story'
  },
  {
    path: SITE_MAP.ADMIN.CHAPTER,
    icon: <NotificationOutlined />,
    key: SITE_MAP.ADMIN.CHAPTER,
    label: 'Chapter'
  }
]
