import React from 'react'
import AllSubscriptions from '../Json/subscriptionList.json'
import Live from '../Assets/Svgs/live.svg'
import More from '../Assets/Svgs/down_arrow.svg'
import Image from 'next/image'

function SubscriptionList() {
  return (
    <div>
      <span className='p-3'>Subscriptions</span>
      {
        AllSubscriptions.map((item, index) => {
          return (
            <div key={index}>
              {
                AllSubscriptions.length >= 5 ? (
                  index <= 5 && (
                    <div className = 'p-3 flex cursor-pointer hover:bg-[#2e2e2e] rounded-md'>
                      <Image src={item.url} alt="" className='rounded-full' width="30" height="30" />
                      <span className='ml-4 whitespace-nowrap overflow-hidden text-ellipsis flex-1'>{item.name}</span>
                      {item.is_live ? <Image src={Live} alt="" className='ml-4'></Image> : null}
                    </div>
                  )
                ) : (
                    <div className='p-3 flex cursor-pointer hover:bg-[#2e2e2e] rounded-md'>
                      <Image src={item.url} alt="" className='rounded-full' width="30" height="30" />
                      <span className='ml-4 whitespace-nowrap overflow-hidden text-ellipsis flex-1'>{item.name}</span>
                      {item.is_live ? <Image src={Live} alt="" className='ml-4'></Image> : null}
                    </div>
                )
              }
            </div>
          )
        })
      }
      {
        AllSubscriptions.length >= 5 ? (
          <div className='ext-white flex w-full items-center p-3 rounded-md hover:bg-[#2e2e2e] cursor-pointer'>
            <Image src={More} alt="" className='' />
            <span className='ml-4'>Show {AllSubscriptions.length - 6} More</span>
          </div>
        ) : null
      }
    </div>
  )
}

export default SubscriptionList