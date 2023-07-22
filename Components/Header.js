import React from 'react'
import Menu from '../Assets/Svgs/menu.svg'
import YoutubeIcon from '../Assets/Svgs/Youtube logo.svg'
import Search from '../Assets/Svgs/search.svg'
import Mike from '../Assets/Svgs/Mike.svg'
import AddVideo from '../Assets/Svgs/addVideo.svg'
import Notification from '../Assets/Svgs/notf.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { sidebarState } from '@/Store/sidebarState'

function Header() {
    const router = useRouter()
    const setSidebarOpen = sidebarState((state) => state.setSidebarOpen);
    const isSidebarOpen = sidebarState((state) => state.isSidebarOpen);
    return (
        <>
            <div className='w-full text-white bg-[#0f0f0f] p-4 flex sticky top-0 z-50'>
                <div className='flex p-1'>
                    <div className='rounded-full hover:bg-[#2e2e2e] w-10 h-10 flex items-center justify-center cursor-pointer' onClick={() => setSidebarOpen(!isSidebarOpen)}>
                        <Image src={Menu} alt="" className='w-6' />
                    </div>
                    <Image src={YoutubeIcon} alt="" className='ml-4 cursor-pointer' onClick={() => router.push('/')} />
                </div>
                <div className='md:flex flex-1 justify-center hidden'>
                    <input type='text' placeholder='Search' className='p-1.5 pl-4 w-[35%] bg-[#121212] border border-[#2e2e2e] rounded-s-full focus:border-blue-700 focus:outline-none' />
                    <div className='bg-[#2e2e2e] rounded-r-full w-16 grid items-center place-items-center cursor-pointer'>
                        <Image src={Search} alt='' />
                    </div>
                    <div className='ml-2 bg-[#2e2e2e] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-1'>
                        <Image src={Mike} alt='' />
                    </div>
                </div>
                <div className='flex items-center w-[50%] justify-end md:w-auto'>
                    <div className='rounded-full hover:bg-[#2e2e2e] w-10 h-10 flex items-center justify-center mr-3 cursor-pointer'>
                        <Image src={AddVideo} alt='' />
                    </div>
                    <div className='hidden rounded-full hover:bg-[#2e2e2e] w-10 h-10 md:flex items-center justify-center mr-3 cursor-pointer'>
                        <Image src={Notification} alt='' />
                    </div>
                    <div className='cursor-pointer md:mr-6 border border-[#2e2e2e] rounded-full w-8 h-8 bg-[#2e2e2e]' />
                </div>
            </div>
        </>
    )
}

export default Header