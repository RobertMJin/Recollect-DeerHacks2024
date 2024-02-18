import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [played, setPlayed] = useState(0);
  const [arr, setArr] = useState([]);
  const playerRef = useRef(0);

  function makeArr() {
    return arr.map((item, i) => (<ul key={i}>
        <li>Starting Time: {Math.max(item[0]-30, 0)}</li>
        <li>Ending Time: {item[0]}</li>
        <li>URL:{item[1]}</li></ul>
      ))
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setVideoUrl(URL.createObjectURL(selectedFile));
  };

  const handleClip = async () => {
    setPlayed(Math.floor(playerRef.current.getCurrentTime()));
    console.log(played);
    if (played === 0) {
      console.log('No video selected');
      return;
    } else {
      setArr([...arr, [played, videoUrl]]);
      if (played < 30) {
        var data = {
          "startTime": 0,
          "endTime": played,
          "originalVideoPath": "uploads/video.mp4"
        }
      } else {
        data = {
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
    }
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

      {videoUrl && <ReactPlayer url={videoUrl} ref={playerRef} controls />}
      {file && <button onClick={handleClip}>Clip</button>}
      {file && <button onClick={handleUpload}>Confirm Upload</button>}
      {makeArr()}
      { <Link to="/">
        <button className="button">Back</button>
      </Link> }

    </div>
    </>
  );
};

export default Upload;
