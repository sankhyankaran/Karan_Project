import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './layouts/Header'

function Root() {
  return (
    <>
    <Header/>
        <Outlet/>
    </>
  )
}

export default Root