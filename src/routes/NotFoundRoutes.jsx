import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/not-found/NotFoundPage'

const NotFoundRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default NotFoundRoutes