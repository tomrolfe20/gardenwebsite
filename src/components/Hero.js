import styled from "styled-components";
import backgroundImg from "../components/images/garden1.png";

function Hero() {
  return (
    <>
      <Container>
        <HeroContent>
          <HeroItems>
            <HeroH1>Garden Design</HeroH1>
            <HeroP>By Ian</HeroP>
          </HeroItems>
        </HeroContent>
      </Container>
    </>
  );
}

export default Hero;

const Container = styled.div`
  background-image: url(${backgroundImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HeroH1 = styled.div`
  font-size: clamp(2.5rem, 10vw, 5rem);
  letter-spacing: 3px;
  font-weight: 600;
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-transform: uppercase;
  color: #f1ddbf;
  padding: 50px;
`;

const HeroP = styled.div`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
`;
