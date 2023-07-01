import Header from '@/Components/Header'
import InteractionButtons from '@/Components/InteractionButtons';
import { abbreviateNumber } from '@/Functions/GetAbbreviateNumber';
import ParentLayout from '@/Layouts/ParentLayout'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

function SingleVideo() {
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const router = useRouter();
  const videoId = router.query.id;
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoId) {
      const getChannelData = (videoData) => {
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.snippet?.channelId}&key=${API_KEY}`)
          .then(response => response.json())
          .then(response => {
            setChannelData(response.items[0]);
          })
          .catch(err => console.error(err))
      }

      const fetchData = () => {
        try {
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`
          )
            .then((res) => res.json())
            .then((res) => {
              setVideoData(res?.items[0]);
              getChannelData(res?.items[0]);
            })
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();

      // const videoElement = videoRef.current;
      // let player = null;

      // if(videoElement){
      //   player = videojs(videoElement, {
      //     autoplay:true,
      //     controls:true,
      //     sources:[{
      //       src:`https://www.youtube.com/watch?v=${videoId}`,
      //       type:'video/youtube'
      //     }]
      //   });
      //   return () => {
      //     if(player){
      //       player.dispose();
      //     }
      //   }
      // }
    }
  }, [videoId]);
  return (
    <ParentLayout isClosed={true}>
      <div className='grid grid-cols-1 md:grid-cols-[0.9fr,312px] md:gap-8 md:my-4 p-4 md:p-0'>
        <div className='w-full'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube Video Player"
            frameBorder="0"
            allowFullScreen
            className='w-full h-[712px]'
          ></iframe>
          <p className='py-2 font-bold text-xl'>{videoData?.snippet?.localized?.title}</p>
          <div className='flex items-center'>
            <div className='w-10 h-10 rounded-full bg-[#2e2e2e] mr-2 relative cursor-pointer' >
              <Image src={channelData?.snippet?.thumbnails?.high?.url} fill prioriy alt="channel" className='rounded-full' />
            </div>
            <div className='px-2'>
              <p className='line-clamp-2 font-bold cursor-pointer'>{channelData?.snippet?.title}</p>
              <p className='text-sm text-[#aaa] cursor-pointer hover:text-[#fff]'>{abbreviateNumber(channelData?.statistics?.subscriberCount)} subscribers</p>
            </div>
            <button className='bg-white text-black mx-2 rounded-full text-sm px-4 hover:opacity-80 h-9'>Subscribe</button>
            <InteractionButtons/>
          </div>
        </div>
        <div>
          lorem
        </div>
      </div>
      {/* <div className='flex'>
        <div className='data-js-player'>
          <video ref={videoRef} className='video-js vjs-defualt-skin'></video>
        </div>
      </div>
      <div>
        hh 
        </div> */}
    </ParentLayout>
  )
}

export default SingleVideo