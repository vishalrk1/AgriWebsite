import styled from "styled-components";

export const EcoSectionWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`;

export const EcoImageWrapper = styled.div`
  width: 50%;
  height: 50%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const EcoContentWrapper = styled.div`
  position: absolute;
  right: 40px;
  left: 45%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 50%;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
`;

export const EcoTitle = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  margin: 0px 0px 32px 40px;
  white-space: pre-line;
  color: ${(props) => props.theme.colors.primary.darkBlue};
`;

export const EcoDetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px 0px 0px 40px;
  padding: 0px;
`;

export const EcoDetailItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1.5rem 0rem;
  gap: 0.3rem;

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
    margin: 0px;
    max-width: 60%;
    color: ${(props) => props.theme.colors.neutral.darkGrey};
  }
`;
