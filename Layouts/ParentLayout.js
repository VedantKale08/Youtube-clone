import CategoryList from '@/Components/CategoryList'
import Header from '@/Components/Header'
import Sidebar from '@/Components/Sidebar'
import { sidebarState } from '@/Store/sidebarState';
import React, { useEffect } from 'react'

function ParentLayout({ children, isClosed }) {
  const setSidebarOpen = sidebarState((state) => state.setSidebarOpen);
  useEffect(() =>{
    if(isClosed) setSidebarOpen(false);
  },[isClosed])
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <div className={`bg-[#0f0f0f] text-white flex-1`}>
          {!isClosed && <CategoryList />}
          {children}
        </div>
      </main>
    </>
  )
}

export default ParentLayout