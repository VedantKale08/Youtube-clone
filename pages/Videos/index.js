import Videocard from '@/Components/Videocard';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react'
import VideoSkeleton from '@/Skeletons/videoSkeleton';
import { sidebarState } from '@/Store/sidebarState';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
function index() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState('');
  const isSidebarOpen = sidebarState((state) => state.isSidebarOpen);
  
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
          })
          .catch(err => console.error(err))
      }
      NextData();
    }
  }, [pageToken])

  console.log();
  return (
    <>
      <div className={`grid ${isSidebarOpen ? 'grid-cols-4' : 'grid-cols-5'} px-10 gap-4 w-[95%]`}>
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
    </>
  )
}

export default index 