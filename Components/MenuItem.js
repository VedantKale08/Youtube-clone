import React from 'react'
import Image from 'next/image'
import { sidebarState } from '@/Store/sidebarState'

function MenuItem({ image, text, active }) {
    const isSidebarOpen = sidebarState((state) => state.isSidebarOpen);
    return (
        <div className={`text-white  w-full flex ${!isSidebarOpen && 'justify-center flex-col'} items-center p-3 ${active ? 'bg-[#2e2e2e]' : ''} rounded-md hover:bg-[#2e2e2e] cursor-pointer`}>
            <Image src={image} alt="" className='' />
            <span className={`${isSidebarOpen ? 'ml-6' : 'text-[10px]'}`}>{text}</span>
        </div>
    )
}

export default MenuItem