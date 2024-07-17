import React from "react";
import * as Styled from "./button.styles";
import { CircleArrowRight } from "lucide-react";
import { theme } from "../../theme";

export const GreenButton = ({
  title,
  showArrow = true,
  onClick = () => {},
}) => {
  return (
    <Styled.GreenButton>
      <Styled.BtnTitle txtcolor={theme.colors.primary.white}>
        {title}
      </Styled.BtnTitle>
      {showArrow && <CircleArrowRight color="white" size={20} />}
    </Styled.GreenButton>
  );
};
