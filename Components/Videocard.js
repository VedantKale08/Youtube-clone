import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {getTime} from '../Functions/GetTime'
import { abbreviateNumber } from '../Functions/GetAbbreviateNumber'
import { getDuration } from '../Functions/getDuration'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

function Videocard({ item }) {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item?.snippet?.channelId}&key=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
          setChannelData(response.items);
        })
        .catch(err => console.error(err))
    }
    getData();
  }, [item])

  return (
    <div>
      <div className='w-full max-w-[380px] aspect-[70/45] relative rounded-lg cursor-pointer'>
        <Image src={item?.snippet?.thumbnails?.maxres?.url} alt="" fill objectFit='contain' />
        <p className='absolute bottom-0 right-0 px-2 py-1 mb-5   mr-1 text-[10px] rounded-md bg-[rgb(0,0,0,0.8)]'>{getDuration(item?.contentDetails?.duration)}</p>
      </div>
      <div className='flex'>
        <div className='w-10 h-10 rounded-full bg-[#2e2e2e] mr-2 relative cursor-pointer'>
          <Image src={channelData[0]?.snippet?.thumbnails?.high?.url} fill prioriy alt="channel" className='rounded-full'/>
        </div>
        <div className='flex-1'>
          <p className='line-clamp-2 cursor-pointer'>{item?.snippet?.title}</p>
          <p className='text-sm text-[#aaa] cursor-pointer hover:text-[#fff]'>{item?.snippet?.channelTitle}</p>
          <div className='flex text-sm text-[#aaa]'>
            <p >{abbreviateNumber(item?.statistics?.viewCount)} views</p>
            <p className='mx-1'>&#x2022;</p>
            <p>{getTime(item?.snippet?.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Videocard