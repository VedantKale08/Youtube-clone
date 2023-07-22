import React from 'react'
import Categories from '../Json/category.json'
import { sidebarState } from '@/Store/sidebarState';

function CategoryList() {
  const isSidebarOpen = sidebarState((state) => state.isSidebarOpen);
  return (
    <div className={`${isSidebarOpen ? 'md:w-[calc(100vw-280px)]' : 'md:w-[calc(100vw-150px)]'} w-screen pt-2 sticky top-20 bg-[#0f0f0f] pb-3 z-50`}>
      <div className='flex overflow-scroll no-scrollbar scroll-smooth '>
        {
          Categories.map(category => {
            return (
              <h2 key={category.id} className={`font-bold px-3 py-2 ml-3  text-sm cursor-pointer rounded-lg ${category.isActive ? 'bg-white text-[#0f0f0f]' : 'bg-[#2e2e2e]'}`}>{category.name}</h2>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryList