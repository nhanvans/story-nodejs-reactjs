import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/admin/Dashboard'
import { SITE_MAP } from '../utils/constants/Path'

const index = () => {
  return (
    <Routes>
      {/* admin route */}
      <Route path={SITE_MAP.ADMIN.DASHBOARD} element={<Dashboard />} />
      {/* guest router */}
      <Route path={SITE_MAP.HOME} element={<Home />} />
    </Routes>
  )
}

export default index
