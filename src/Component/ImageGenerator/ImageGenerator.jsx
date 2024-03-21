import React, { useState ,useRef} from 'react';
import './ImageGenerator.css';
import image from '../Assests/default_image.svg';

const ImageGenerator = () => {

const [image_url,setImage_url]  = useState("/");

let inputRef = useRef(null);


// const generateImage = async ()=>{

//   if (inputRef.current.value === ""){


//   }

//   const response = await fetch('https://api.openai.com/v1/images/generations',

//   {

//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//         // Authorization:
//         // "Bearer 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",
//         "User-Agent":"Chrome",
//     },
//     body:JSON.stringify({

//           prompt:`${inputRef.current.value}`,
//           n:1,
//           size:"512x512",

//     }),

//   }
//   );

// let data = await response.json();

// console.log(data);
  
// }
  return (
    
      <div className='image-container'>

        <div className='header'> AI Image <span>generator</span></div>

        <div className='img-loading'>

<div className='image'>

<img src={image_url ==="/"?image:image_url}></img>

  </div>
        </div>

      <div className='search-box'>

        <input type='text' ref={inputRef} className='search-text' placeholder='Describe your Image'/>
        <div className='generate-btn' onClick={()=>{generateImage()}}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
