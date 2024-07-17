import styled from "styled-components";

export const FeaturedProductSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.iscenter ? "center" : "start")};
  background-color: ${(props) => props.backgroundClr};
  padding: 4rem 0rem;

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
