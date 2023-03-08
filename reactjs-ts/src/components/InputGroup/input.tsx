import { Form, Input } from 'antd'
import React from 'react'

type Props = {
  label: string
  required?: boolean
  tooltipTitle?: string
  tooltipIcon?: React.ReactElement
  placeholder?: string
}

const inputGroup = (props: Props) => {
  return (
    <Form.Item
      label={props.label}
      //   {props.required ? 'required' : null}
      tooltip={{
        title: props.tooltipTitle,
        icon: props.tooltipIcon
      }}
    >
      <Input placeholder={props.placeholder} />
    </Form.Item>
  )
}

export default inputGroup
