import CategoryList from '@/Components/CategoryList'
import Header from '@/Components/Header'
import Sidebar from '@/Components/Sidebar'
import React from 'react'

function ParentLayout({ children }) {
  return (
    <>
        <Header/>
          <main className="flex">
            <Sidebar />
        <div className={`bg-[#0f0f0f] text-white flex-1`}>
                  <CategoryList />
                  {children}
              </div>
          </main>
    </>
  )
}

export default ParentLayout