import React from 'react'
import { Outlet, Route , Routes} from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Home from './components/Home'
export default function Hello() {
  return (
    <>
    <Routes>

        <Route  path="page1" element={<Page1/>}/>
         <Route path="page2" element={<Page2/>}/>
    </Routes>
               
    </>
  )
}
