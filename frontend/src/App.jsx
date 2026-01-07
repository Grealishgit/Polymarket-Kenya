import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout/Layout'
import Trending from './pages/main-pages/Trending'
import Breaking from './pages/main-pages/Breaking'
import New from './pages/main-pages/New'


const App = () => {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route element={<Layout />}>
          <Route path="/trending" element={<Trending />} />
          <Route path="/breaking" element={<Breaking />} />
          <Route path="/" element={<New />} />

          {/* Pages */}
          <Route path="/trending" element={<Home />} /> 

        </Route>


      </Routes>
    </>
  )
}

export default App