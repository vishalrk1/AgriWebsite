import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;

  padding: 2rem 1rem 1rem 1rem;
  border-radius: 1.6rem;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.neutral.lightGrey};
`;

export const CategoryTag = styled.div`
  width: max-content;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary.darkBlue};

  & p {
    font-size: 12px;
    font-weight: bolder;
    color: white;
    margin: 0;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  object-fit: contain;
  background-color: transparent;
`;

export const ProductTitle = styled.h4`
  white-space: pre-line;
  color: ${(props) => props.theme.colors.primary.darkBlue};
  margin: 1rem 0rem 0rem 0rem;
`;

export const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 8px;
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

export const ProductPrice = styled.h4`
  /* font-size: ${(props) => props.theme.fontSizes.medium}; */
  color: ${(props) => props.color};
  font-weight: bolder;
  text-decoration-line: ${(props) => props.decoration && "line-through"};
  margin: 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
