import React from "react";
import * as Styled from "./button.styles";
import { CircleArrowRight } from "lucide-react";
import { theme } from "../../theme";

export const YellowButton = ({
  title,
  showArrow = true,
  onClick = () => {},
}) => {
  return (
    <Styled.YellowButton>
      <Styled.BtnTitle txtcolor={theme.colors.primary.darkBlue}>
        {title}
      </Styled.BtnTitle>
      {showArrow && <CircleArrowRight size={20} />}
    </Styled.YellowButton>
  );
};
