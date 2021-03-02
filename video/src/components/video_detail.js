import React from 'react';

export default function VideoDetail({video}) {
  if(! video) {
    return(<div className='text-center'>No Video</div>)
  }
  console.log(video);
  return(
    <div>
      <div className='title mb-3'>
        <h2 className='title text-left'><span className="badge badge-success">NOW</span> {video.title}</h2>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="video" 
          src={`https://www.youtube.com/embed/${video.id}`} 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
    
  );
}
