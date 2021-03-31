import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaData = () => {
  // Setting API data
  const [photoData, setPhotoData] = useState('');

  // Effect call for API data
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=7o7Dg7vHLhSczxEwkDUpIff2UAbwzLuRGudxgKis'
      )
      .then((response) => {
        // console.log(response.data); logged data to look at structure
        setPhotoData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Return containing the HTML structure
  return (
    <div className="container">
      <h1 className="APOD date">NASA Photo of the day for {photoData.date}</h1>
      <img
        className="image-container"
        src={photoData.url}
        alt={photoData.title}></img>
      <p className="picture-explanation">{photoData.explanation}</p>
    </div>
  );
};

export default NasaData;
