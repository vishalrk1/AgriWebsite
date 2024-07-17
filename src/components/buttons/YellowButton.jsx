import React from "react";
import * as Styled from "./button.styles";
import { CircleArrowRight } from "lucide-react";

export const YellowButton = ({title, showArrow=true, onClick=()=>{}}) => {
  return (
    <Styled.YellowButton>
      <Styled.BtnTitle>{title}</Styled.BtnTitle>
      {
        showArrow && <CircleArrowRight />
      }
    </Styled.YellowButton>
  );
};
