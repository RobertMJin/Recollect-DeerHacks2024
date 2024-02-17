import React, { useState } from 'react';

function SingleFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      // Perform file upload operation
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <h1>Single File Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default SingleFileUploader;
