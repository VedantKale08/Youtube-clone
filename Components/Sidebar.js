import React from 'react'
import Home from '../Assets/Svgs/home.svg'
import Shorts from '../Assets/Svgs/shorts.svg'
import Subscriptions from '../Assets/Svgs/subscription.svg'
import Library from '../Assets/Svgs/library.svg'
import History from '../Assets/Svgs/history.svg'
import YourVideo from '../Assets/Svgs/your_video.svg'
import Liked from '../Assets/Svgs/liked.svg'
import WatchLater from '../Assets/Svgs/watch_later.svg'
import More from '../Assets/Svgs/down_arrow.svg'
import { sidebarState } from '@/Store/sidebarState'
import MenuItem from './MenuItem'
import SubscriptionList from './SubscriptionList'
import { isMobile } from 'react-device-detect';

function Sidebar() {
  const isSidebarOpen = sidebarState((state) => state.isSidebarOpen);
  return (
    <>
      <div className={`bg-[#0f0f0f] h-[calc(100vh-80px)] md:block shrink-0 sticky top-20 ${isSidebarOpen ? 'w-60' : isMobile ? 'hidden' : 'w-20'} p-2 pr-4 overflow-scroll scroll-smooth no-scrollbar text-white `} >
        <MenuItem image={Home} text="Home" active={true}/>
        <MenuItem image={Shorts} text="Shorts" />
        <MenuItem image={Subscriptions} text="Subscriptions" />
        {isSidebarOpen && <hr className='my-3 border-[#2e2e2e]'/>}
        <MenuItem image={Library} text="Library" />
        {
          isSidebarOpen && (
            <>
              <MenuItem image={History} text="History" />
              <MenuItem image={YourVideo} text="Your Videos" />
              <MenuItem image={WatchLater} text="Watch Later" />
              <MenuItem image={Liked} text="Liked Videos" />
              <MenuItem image={More} text="Show More" />

              <hr className='my-3 border-[#2e2e2e]' />
              <SubscriptionList />
            </>
          )
        }
      </div>
    </>
  )
}

export default Sidebar