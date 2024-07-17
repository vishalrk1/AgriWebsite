import styled from "styled-components";
import HeroBg from "../../assets/Homepage/BannerBg.png";
import HeroImg from "../../assets/Homepage/BannerImage.png";

export const HomepageMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const HeroSection = styled.div`
  background-image: url(${HeroBg});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 500px;
`;

export const HeroImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 500px;
  background-image: url(${HeroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

export const HeroTitleContainer = styled.div`
  height: 20rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12rem;
`;
export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary.darkBlue};
  font-size: 40px;
  margin: 0.5rem 0rem;
  font-weight: bolder;
  white-space: pre-line;
`;

export const AboutUsSection = styled.section`
  padding: 2rem 8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutral.veryLightGreen};
`;

export const AboutUSWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AboutUsBg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

export const TextContent = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2rem;
  white-space: pre-line;
  color: ${(props) => props.theme.colors.primary.darkBlue};
  margin: 0px;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary.green};
  margin: 0px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.accent.darkGrey};
  margin: 0.5rem 0;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 0.5rem;

  & img {
    margin-right: 0.5rem;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 0.3rem;
  }

  & h3 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary.darkBlue};
    margin: 0px;
  }

  & p {
    font-size: 12px;
    color: ${(props) => props.theme.colors.neutral.darkGrey};
    margin: 0px;
  }
`;
