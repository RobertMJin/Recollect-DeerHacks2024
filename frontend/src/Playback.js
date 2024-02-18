import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Playback = () => {
    const [videoUrl, setVideoUrl] = useState('https://youtube.com/watch?v=ysz5S6PUM-U');

    const handleFileChange = (e) => {
        setVideoUrl(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div>
            <h1>Video Player</h1>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            {videoUrl && <ReactPlayer url={videoUrl} controls />}
        </div>
    )
};

export default Playback;