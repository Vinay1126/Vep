import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
export default function Home() {
  const nav = useNavigate();
  const page1 = () => {
    nav('/home/page1')
  }
  const page2 = () => {
    nav('/home/page2')
  }
  return (
    <>
      {/* Home */}
      <button onClick={page1}> page1</button>
      <button onClick={page2}>page2</button>
      <Outlet />
    </>
  )
}
