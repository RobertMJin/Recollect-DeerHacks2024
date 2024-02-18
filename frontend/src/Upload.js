import React, { useState, useRef } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setVideoUrl(URL.createObjectURL(selectedFile));
  };

  const handleClip = () => {
    setPlayed(Math.floor(playerRef.current.getCurrentTime()));
  };

  const handleClipUpload = async () => {
    console.log(played);
    if (played == 0) {
      console.log('No video selected');
      return;
    } else if (played < 30) {
      var data = {
        "startTime": 0,
        "endTime": played,
        "originalVideoPath": "uploads/video.mp4"
      }
    } else {
      var data = {
        "startTime": played - 30,
        "endTime": played,
        "originalVideoPath": "uploads/video.mp4"
      }
    }
    console.log(data);
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/clip', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Clip successful:', response.data);
    } catch (error) {
      console.error('Error Clipping video:', error);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h1>Video Upload and Playback</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoUrl && <ReactPlayer url={videoUrl} ref={playerRef} controls />}
      {file && <button onClick={handleClip}>Clip</button>}
      {file && <button onClick={handleClipUpload}>Finish Clipping</button>}
      {file && <button onClick={handleUpload}>Upload Video</button>}
      { <Link to="/">
        <button className="button">Back</button>
      </Link> }
    </div>
  );
};

export default Upload;
