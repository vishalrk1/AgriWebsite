import styled from "styled-components";

// Styled component for the star
export const Star = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  background-color: ${({ filled }) =>
    filled ? "#FFD700" : "#e0e0e0"}; // Gold for filled stars, gray for empty
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

export const StarContainer = styled.div`
  display: flex;
`;
