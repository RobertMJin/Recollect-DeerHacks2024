import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setVideoUrl(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', file);

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

  return (
    <>
    <div className="header">
      <h1>Video Upload and Playback</h1>
    </div>
    <div className="white-box"></div>
    <div>
      <Link to="/">
        <button className="button button-top-left">Return to Login</button>
      </Link>
      <input type="file" id="file-input" accept="video/*" onChange={handleFileChange} style={{ display: 'none'}}/>
      <label htmlFor="file-input" className="custom-file-upload">
        Choose file
      </label>
      {videoUrl && <ReactPlayer url={videoUrl} controls />}
      {file && <button onClick={handleUpload}>Upload Video</button>}
    </div>
    </>
  );
};

export default Upload;
