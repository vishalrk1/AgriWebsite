import styled from "styled-components";
import BannerBg from "../../assets/Homepage/BannerBg.png";
import BannerImg from "../../assets/Homepage/BannerImage.png";

import Banner1 from "../../assets/offerBanner/Banner1.jpg";
import Banner2 from "../../assets/offerBanner/Banner2.jpg";

export const BannerSection = styled.div`
  background-image: url(${BannerBg});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 600px;
`;

export const BannerImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 600px;
  background-image: url(${BannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`;

export const BannerTitleContainer = styled.div`
  height: 20rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12rem;
`;
export const BannerTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary.darkBlue};
  font-size: 44px;
  font-weight: bolder;
  white-space: pre-line;
`;

export const OfferBannerSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 8rem;
  gap: 2rem;
  /* background-color: black; */
`;

export const offerBanner = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 12px;
  padding: 1.2rem;

  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const offerBannerTitle = styled.h1`
  color: ${(props) => props.txtClr};
  font-weight: bold;
  white-space: pre-line;
  margin-top: 1rem;
`;
