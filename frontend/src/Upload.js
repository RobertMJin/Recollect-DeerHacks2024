import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setVideoUrl(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', file);
    setIsUploaded(true);

    try {
      // Replace 'your-upload-api-endpoint' with your actual server endpoint for video upload
      const response = await axios.post('your-upload-api-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  let content;
  if (!videoUrl) {
    content = "No video selected";
  }
  else if (videoUrl && !isUploaded) {
    content = "Video selected, click 'Upload Video' to upload";
  }
  else {
    content = 
      <div className="react-player-wrapper">
      <ReactPlayer url={videoUrl} controls width = "100%" height="100%"/>
      </div>
  }
; 

  return (
    <>
    <div className="header">
      <h1>Video Upload and Playback</h1>
    </div>
    <div className="white-box">
      {content}
    </div>
    {/* {videoUrl && <ReactPlayer url={videoUrl} controls />} */}
    <div>
      <Link to="/">
        <button className="button button-top-left">Return to Login</button>
      </Link>
      {!isUploaded && (
      <>
        <input 
          type="file" 
          id="file-input" 
          accept="video/*" 
          onChange={handleFileChange} 
          style={{ display: 'none'}}
      />
      <label htmlFor="file-input" className="custom-file-upload">
        Choose file
      </label>
      {file && <button className="upload-video" onClick={handleUpload}>Upload Video</button>}
      </>
  )}
    </div>
    </>
  );
};

export default Upload;
