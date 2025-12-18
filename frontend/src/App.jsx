import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout/Layout'
import Trending from './pages/main-pages/Trending'

const App = () => {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route element={<Layout />}>
          <Route path="/" element={<Trending />} />

          {/* Pages */}
          <Route path="/trending" element={<Home />} /> 

        </Route>


      </Routes>
    </>
  )
}

export default App