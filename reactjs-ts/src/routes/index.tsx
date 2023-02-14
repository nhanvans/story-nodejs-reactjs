import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/admin/Dashboard'
import { SITE_MAP } from '../utils/constants/Path'
import Categories from '../pages/admin/Categories'
import Stories from '../pages/admin/Stories'
import Chapters from '../pages/admin/Chapters'

const index = () => {
  return (
    <Routes>
      {/* admin route */}
      <Route path={SITE_MAP.ADMIN.HOME} element={<Dashboard />} />
      <Route path={SITE_MAP.ADMIN.DASHBOARD} element={<Dashboard />} />
      <Route path={SITE_MAP.ADMIN.CATEGORY} element={<Categories />} />
      <Route path={SITE_MAP.ADMIN.STORY} element={<Stories />} />
      <Route path={SITE_MAP.ADMIN.CHAPTER} element={<Chapters />} />
      {/* guest router */}
      <Route path={SITE_MAP.HOME} element={<Home />} />
    </Routes>
  )
}

export default index
