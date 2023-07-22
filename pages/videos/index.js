/* eslint-disable react-hooks/rules-of-hooks */
import Videocard from '@/Components/Videocard';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react'
import VideoSkeleton from '@/Skeletons/videoSkeleton';
import { sidebarState } from '@/Store/sidebarState';
import ParentLayout from '@/Layouts/ParentLayout';
import { isMobile } from 'react-device-detect'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
function index() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState('');
  const isSidebarOpen = sidebarState((state) => state.isSidebarOpen);
  const setSidebarOpen = sidebarState((state) => state.setSidebarOpen);
  
  useEffect(() => {
    if(isEmpty(data)) {
      const getData = () => {
        setLoading(true);
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}`)
          .then(response => response.json())
          .then(response => {
            setData(response?.items);
            setPageToken(response?.nextPageToken);
            setLoading(false)
          })
          .catch(err => console.error(err))
      }
      getData();
    }
  }, [])


  useEffect(() => {
    if(!isEmpty(pageToken)){
      const NextData = () => {
        setLoading(true);
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?pageToken=${pageToken}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}`)
          .then(response => response.json())
          .then(response => {
            setData(prev => [...prev, ...response.items]);
            setLoading(false)
            setPageToken('');
          })
          .catch(err => console.error(err))
      }
      NextData();
    }
  }, [pageToken])

  useEffect(() => {
    if (isMobile){
      setSidebarOpen(false)
    }
  }, [isMobile])
  

  return (
    <ParentLayout>
      <div className={`grid ${isSidebarOpen ? 'md:grid-cols-4' : 'md:grid-cols-5'} grid-cols-1 px-2 md:px-10 gap-4 md:w-[95%]`}>
          {
          !isEmpty(data) && 
            data?.map((item,index) => {
              return <Videocard key={index} item={item} />
            })
          }
          {
            isLoading && (
              <>
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
              </>
            )
          }
      </div>
    </ParentLayout>
  )
}

export default index 