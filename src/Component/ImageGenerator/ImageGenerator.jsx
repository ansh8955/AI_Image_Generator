import React, { useState, useRef } from 'react';
import './ImageGenerator.css';
import image from '../Assests/default_image.svg';

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(image);
  const inputRef = useRef(null);

  const accessKey = 'ZK6vHdAgjORAqaM7lJpvBKttu-t3kMAUfYMBNZctJw4'; // Replace with your Unsplash API access key

  const generateImage = async () => {
    const query = inputRef.current.value.trim();

    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${accessKey}`);
      const data = await response.json();
      const firstImage = data.results[0];
      if (firstImage) {
        setImageUrl(firstImage.urls.regular);
      } else {
        setImageUrl(image);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      setImageUrl(image);
    }
  };

  return (
    <div className='image-container'>
      <div className='header'> AI Image <span>generator</span></div>
      <div className='img-loading'>
        <div className='image'>
          <img src={imageUrl} alt="Generated Image"></img>
        </div>
      </div>
      <div className='search-box'>
        <input type='text' ref={inputRef} className='search-text' placeholder='Describe your Image' />
        <div className='generate-btn' onClick={generateImage}>Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
