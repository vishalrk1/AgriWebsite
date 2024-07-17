import styled from "styled-components";

export const FeaturedProductSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.iscenter ? "center" : "start")};
  background-color: ${(props) => props.backgroundClr};
  padding-bottom: 4rem;
  & h1 {
    font-size: ${(props) => props.theme.fontSizes.sectionHeading};
    font-weight: bolder;
    color: ${(props) => props.theme.colors.primary.darkBlue};
    margin: 0px;
  }
`;

export const ProductsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 100%;
  overflow-x: hidden;
`;

export const OrganicProductsTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 6rem 1rem 6rem;

  & h2 {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    font-weight: bolder;
    color: ${(props) => props.theme.colors.primary.white};
    margin: 0px;
  }
`;

export const WhiteTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: bolder;
  color: ${(props) => props.theme.colors.primary.white};
  margin: 0px;
  padding: 6rem 1rem 1rem 6rem;
`;

export const OrgaincProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 1rem 1rem 1rem 6rem;
  max-width: 100%;
  overflow-x: hidden;
`;
