import React from 'react'
import { Col, Layout, Menu, Row } from 'antd'
const { Header } = Layout
import logoIcon from '../../assets/images/icon.png'

// type Props = {
//   s: string
// }

const items1 = ['1', '2', '3', '4', '5'].map((key) => ({
  key,
  label: `nav ${key}`
}))

const Headers = () => {
  return (
    <Header>
      <Row gutter={[10, 0]}>
        <Col span={2}>
          {' '}
          <div className='logo-brand'>
            <img src={logoIcon} alt='' />
          </div>
        </Col>

        <Col span={22}>
          <Menu
            style={{
              width: '100%',
              justifyContent: 'flex-end'
            }}
            theme='dark'
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
