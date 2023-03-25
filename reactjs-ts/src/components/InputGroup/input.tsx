import { Form, Input } from 'antd'
import React from 'react'

type Props = {
  label: string
  required?: boolean
  tooltipTitle?: string
  tooltipIcon?: React.ReactElement
  placeholder?: string
  value?: string
  handleChangeInput?: React.ChangeEventHandler<HTMLInputElement>
}

const inputGroup = (props: Props) => {
  const { label, tooltipTitle, tooltipIcon, placeholder, handleChangeInput, value } = props

  return (
    <Form.Item
      label={label}
      //   {props.required ? 'required' : null}
      tooltip={{
        title: tooltipTitle,
        icon: tooltipIcon
      }}
    >
      <Input placeholder={placeholder} value={value} onChange={handleChangeInput} />
    </Form.Item>
  )
}

export default inputGroup
