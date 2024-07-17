import styled from "styled-components";

export const OfferBannerSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 8rem;
  gap: 2rem;
`;

export const OfferBanner = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 12px;
  padding: 1.2rem;

  background-image: url(${(props) => props.imgsrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const OfferBannerTitle = styled.h1`
  color: ${(props) => props.txtcolor};
  font-weight: bolder;
  font-size: 28px;
  white-space: pre-line;
  margin-top: 1rem;
`;
