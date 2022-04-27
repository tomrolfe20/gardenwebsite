import React from "react";
import styled from "styled-components";
import garden2 from "./images/garden2.png";
import garden3 from "./images/garden3.png";
import garden4 from "./images/garden4.png";

const Gardens = () => {
  return (
    <>
      <Container id='inspire'>
        <GardenBox>
          <Garden>
            <img src={garden2} alt='garden' />
            <GardenTitle>Design</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden3} alt='garden' />
            <GardenTitle>Style</GardenTitle>
          </Garden>
          <Garden>
            <img src={garden4} alt='garden' />
            <GardenTitle>Detail</GardenTitle>
          </Garden>
        </GardenBox>
      </Container>
    </>
  );
};

export default Gardens;

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
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  justify-content: center;
`;

const GardenTitle = styled.div`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  padding: 20px;
  color: #525E75;
`;
