import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout/Layout'

const App = () => {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} /> 
        </Route>


      </Routes>
    </>
  )
}

export default App