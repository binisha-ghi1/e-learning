import React from 'react'




const getYouTubeVideoId = (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return videoId;
    } catch (error) {
      console.error("Invalid video URL:", url);
      return null;
    }
  };

const Resources = () => {
  return (
    <div>
      ckfk
    </div>
  )
}

export default Resources
