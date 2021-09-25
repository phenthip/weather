import React from 'react'
import styled from '@emotion/styled';

const Icon = (props) => {

    const Icon = styled.img`
        width:40%;
    `
    var icon = '';
  switch (props.condition) {
    case "Clouds":
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
    case "Clear":
      icon = `./img/Mostly Sunny-2x.png`;
      break;
    case "Haze":
      icon = `./img/Haze-2x.png`;
      break;
    case "Hail":
      icon = `./img/Hail-2x.png`;
      break;
    case "Fog":
      icon = `./img/Fog-2x.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-2x.png`;
      break;
    case "Dust":
      icon = `./img/Dust-2x.png`;
      break;
    case "Mist":
      icon = `./img/night.png`;
      break;
    case "Snow":
      icon = `./img/snow.png`;
      break;
    case "Rain":
      icon = `./img/rain.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `./img/rain.png`;
      break;
    default:
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
  }
    return ( 
        <Icon className= "icon" src= {icon} alt="Weather Icon"/>
     );
}
 
export default Icon;