import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Video Upload and Playback</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoUrl && <ReactPlayer url={videoUrl} controls />}
      {file && <button onClick={handleUpload}>Upload Video</button>}
      <Link to="/">
        <button className="button">Back</button>
      </Link>
    </div>
  );
};

export default Upload;
