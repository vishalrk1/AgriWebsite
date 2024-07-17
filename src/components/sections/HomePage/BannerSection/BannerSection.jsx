import React from "react";
import * as Styles from "./BannerSection.styles";
import { theme } from "../../../../theme";

import Banner1 from "../../../../assets/offerBanner/Banner1.jpg";
import Banner2 from "../../../../assets/offerBanner/Banner2.jpg";

const BannerSection = () => {
  return (
    <Styles.OfferBannerSection>
      <Styles.OfferBanner imgsrc={Banner1}>
        <Styles.OfferBannerTitle
          txtcolor={theme.colors.primary.white}
        >{`Get Garden \n Fresh Fruits`}</Styles.OfferBannerTitle>
      </Styles.OfferBanner>
      <Styles.OfferBanner imgsrc={Banner2}>
        <Styles.OfferBannerTitle txtcolor={theme.colors.primary.darkBlue}>
          {`Get 10% off \n on Vegetables`}
        </Styles.OfferBannerTitle>
      </Styles.OfferBanner>
    </Styles.OfferBannerSection>
  );
};

export default BannerSection;
