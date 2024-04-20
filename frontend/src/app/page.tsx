'use client'
import VideoList from '@/components/VideoList';
import { FetchRapiApi } from '@/utils/fetchRapiApi';
import React, { useEffect, useState } from 'react'

const Home: React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchRapiApi(`search?part=snippet&q=${selectedCategory}`);
        setVideo(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <main>
      <VideoList videos={video} />
    </main>
  )
}

export default Home
