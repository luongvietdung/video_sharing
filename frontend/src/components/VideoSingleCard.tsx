import { VideoCardProps } from '@/types/Video'
import Link from 'next/link'
import React from 'react'

const VideoSingleCard: React.FC<VideoCardProps> = ({ video: { id: { videoId }, snippet, }, }) => {
    return (
        <section className='video-single'>
            <Link rel='noopener noreferrer' target='_blank' href={
                videoId ? `/video/${videoId}` : `/video/3WSezz34YQc`
            }>
                <img src={snippet?.thumbnails?.high?.url} alt={snippet?.channelTitle} />
                <div className="content">
                    <p>
                        {snippet.title || snippet.description}
                    </p>
                    <span className="title">
                        {snippet?.channelTitle}
                    </span>
                </div>
            </Link>
        </section>
    )
}

export default VideoSingleCard
