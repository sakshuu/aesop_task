import React from 'react'
import { Footer, MyNavbar } from './components'
import { Home, Page404 } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return <>
   <BrowserRouter>
   <MyNavbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Page404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </>
}

export default App