import React from "react";
import styled from "styled-components";
import garden3 from "./images/gardenplan3.png";
import garden2 from "./images/gardenplan1.png";
import garden4 from "./images/gardenplan2.png";

const GardenPlans = () => {
  return (
    <>
      <Container id='design'>
        <GardenBox>
        <Garden>
            <h1>Let us design your garden</h1>
            <p>
              Starting a garden from scratch may seem daunting! But we've got
              you covered with tons of great ideas and free garden plans for
              every type of yard, whether it's big and sprawling or teeny-tiny.
              For starters, look at the area you want to plant: Does it get full
              sun, which is 6 or more hours per day? Or maybe it gets only part
              sun, which is about half that, or full shade. Watch that space for
              a few days to get a sense of what's happening at what time of day.
              Think about seasonal changes, too. For example, an area that's
              full shade in summer may be full sun in spring.
            </p>
          </Garden>
          <Garden>
            <img src={garden2} alt='garden' />
            <GardenTitle>Design</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden3} alt='garden' />
            <GardenTitle>Space</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden4} alt='garden' />
            <GardenTitle>Detail</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden3} alt='garden' />
            <GardenTitle>Design</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden4} alt='garden' />
            <GardenTitle>Space</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden2} alt='garden' />
            <GardenTitle>Detail</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden2} alt='garden' />
            <GardenTitle>Detail</GardenTitle>
          </Garden>
          
        </GardenBox>
      </Container>
    </>
  );
};

export default GardenPlans;

const Container = styled.div`
  background-color: #f1ddbf;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 80px;
`;
const Garden = styled.div`
  width: 400px;
  min-height: 400px;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #525e75;

  img {
    width: 100%;
  }
`;
const GardenBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const GardenTitle = styled.div`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  padding: 20px;
  color: #525e75;
`;
