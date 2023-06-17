import React from 'react'

function videoSkeleton() {
  return (
    <div className='mt-3'>
        <div className='w-full bg-[#2e2e2e] h-[180px] rounded-lg'></div>
        <div className='flex'>
              <div className='w-10 h-10 rounded-full bg-[#2e2e2e] mt-2'></div>
              <div className='w-full'>
                  <div className='w-[80%] h-6 rounded-lg bg-[#2e2e2e] mt-2 ml-8'></div>
                  <div className='w-[60%] h-6 rounded-lg bg-[#2e2e2e] mt-2 ml-8'></div>
              </div>
        </div>
    </div>
  )
}

export default videoSkeleton