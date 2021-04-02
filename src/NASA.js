import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NasaData = () => {
  // Setting API data
  const [photoData, setPhotoData] = useState('');

  // H1 styling
  const StyledHeader = styled.h1`
    color: red;
    font-size: 3rem;
    &:hover {
      color: yellow;
      background-color: blue;
    }
  `;

  // Paragraph styling
  const StyledExplanation = styled.p`
    color: blue;
    font-size: 1.5rem;
    &:hover {
      font-style: italic;
    }
  `;

  // Image styling
  const StyledImage = styled.img`
    width: 60%;
    margin: 10px;
    &:hover {
      transform: rotate(180deg);
    }
  `;

  // Effect call for API data
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=7o7Dg7vHLhSczxEwkDUpIff2UAbwzLuRGudxgKis'
      )
      .then((response) => {
        console.log(response.data);
        setPhotoData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Return containing the HTML structure
  return (
    <div className="container">
      <StyledHeader className="APOD date">
        NASA Photo of the day for {photoData.date}
      </StyledHeader>
      <StyledImage
        className="image-container"
        src={photoData.url}
        alt={photoData.title}></StyledImage>
      <StyledExplanation className="picture-explanation">
        {photoData.explanation}
      </StyledExplanation>
    </div>
  );
};

export default NasaData;
