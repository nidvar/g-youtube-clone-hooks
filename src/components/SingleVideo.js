import React from 'react';

const SingleVideo = (props)=>{
    const x = props.data.snippet.title;
    const y = x.replace('&#39;', "'").replace('&amp;','&').replace(/&quot;/g, '"');

    return(
        <div className='SingleVideo' onClick={()=>{props.grab_video(props.data)}} >
            <img src={props.data.snippet.thumbnails.medium.url} />
            <p>{y}</p>
        </div>
    )
}

export default SingleVideo