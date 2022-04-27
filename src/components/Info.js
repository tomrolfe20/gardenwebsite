import styled from "styled-components";
import React from "react";
import gardenBackground from "./images/garden5.png";
import gardener from "./images/oldman.png";

const Info = () => {
  return (
    <>
      <Container id='story'>
        <InfoBox>
          <Photo>
            <img src={gardener} alt='gardener' />
          </Photo>
          <InfoText>
            <h1>About</h1>
            <p>
              Growing up on the Isle of Wight, I've always had a love for the
              outdoors and feel most comfortable when surrounded by nature. My
              grandad ran a successful tomato and salad farm on the island, so
              as a young child I would often be found in the vegetable patch
              helping to grow our own fresh produce or in the borders, weeding
              with my grandma. ​ I decided to study horticulture in 2017 at the
              Isle of Wight College gaining my level 2 in horticulture and
              becoming very enthusiastic about plants. During this time I
              started work at Ventnor Botanic Garden as a gardener, as well as
              salad and vegetable grower for their restaurant. In 2018 I moved
              to Bristol to attend the Bristol Garden Design School, run by
              renowned and award winning landscape architect, Robin Templar
              Williams. I graduated in 2019 with a Distinction! ​ My aim is to
              listen closely to the wishes and requirements of my clients, to
              turn their dream garden into a reality. My main focus is to marry
              the design elements with the existing architecture and surrounding
              landscape of the property. I can customise my skills to suit a
              variety of styles to create a design that is completely bespoke
              and personal to each space.
            </p>
          </InfoText>
        </InfoBox>
      </Container>
    </>
  );
};

export default Info;

const Container = styled.div`
  background-image: url(${gardenBackground});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.div`
  background-color: #f1ddbf;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 500px;
    padding: 30px;

    @media screen and (max-width: 768px) {
      width: 300px;
    }
  }
`;
