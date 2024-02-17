import React, { useState } from 'react';

function SingleFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const result = await fetch("https://http://localhost:3000/", {
            method: "POST",
            body: formData
        });

      const data = await result.json();
      console.log(data);
      } catch(error) {
        console.log(error);
      }
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
