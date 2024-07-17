// src/button.styles.js
import styled from "styled-components";

export const YellowButton = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0.1rem 2rem;
  border: 0;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.primary.yellow};
  color: ${(props) => props.theme.colors.primary.darkBlue};
`;

export const GreenButton = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0.1rem 1rem;
  border: 0;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.primary.darkBlue};
  color: white;
`;

export const BtnTitle = styled.p`
  color: ${(props) => props.txtcolor};
  font-size: small;
  font-weight: bold;
  white-space: pre-line;
`;
