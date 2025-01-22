import React from 'react'
import Home from './component/Home'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Addblog from './component/Addblog'
import Navbar from './component/Navbar'
import Main from './component/Main'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/blog' element={<Main child={<Home/>}/>}></Route>
      <Route path='/addblog' element={<Main child={<Addblog/>}/>}></Route>
    </Routes>
    {/* <Home/> */}
    {/* <Login/> */}
    </>
  )
}

export default App