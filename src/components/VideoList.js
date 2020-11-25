import React from 'react';
import SingleVideo from './SingleVideo';

const VideoList = (props)=>{
    const display_list = props.list_of_videos.map(a=>{
        return <SingleVideo key={Math.random()} data={a} grab_video={props.grab_video} />
    })
    return (
        <div className='VideoList'>
            {display_list}
        </div>
    )
}

export default VideoList