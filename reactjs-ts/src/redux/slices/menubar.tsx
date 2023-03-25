import { createSlice } from '@reduxjs/toolkit'
import type { MenuProps } from 'antd'
import { menuSibar } from '../../utils/constants/MenuSider'
import React from 'react'

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
    const { label, key, icon } = element
    menuItem.push(getItem(label, key, icon))
  })

  return menuItem
}

const menuItem = setItems(menuSibar)

const initialState = {
  menuItems: menuItem,
  currentItem: menuItem[0]?.key
}

const menubarSlice = createSlice({
  name: 'menubar',
  initialState,
  reducers: {
    updateCurrentMenuItem: (state: { currentItem: React.Key }, action: { payload: React.Key }) => {
      state.currentItem = action.payload
    }
  }
})

const { actions, reducer } = menubarSlice
export const { updateCurrentMenuItem } = actions
export default reducer
