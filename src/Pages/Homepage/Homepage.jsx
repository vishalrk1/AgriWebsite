import React from "react";
import * as Styles from "./Homepage.styles";
import { YellowButton } from "../../components/buttons/YellowButton";

import Banner1 from "../../assets/offerBanner/Banner1.jpg";
import Banner2 from "../../assets/offerBanner/Banner2.jpg";
import { theme } from "../../theme";

const Homepage = () => {
  return (
    <main>
      <Styles.BannerSection>
        <Styles.BannerImage>
          <Styles.BannerTitleContainer>
            {/* <h1>Choose the best</h1> */}
            <Styles.BannerTitle>
              {`Choose the best healthier way \n of life`}
            </Styles.BannerTitle>
            <YellowButton title="Explore More" showArrow={true} />
          </Styles.BannerTitleContainer>
        </Styles.BannerImage>
      </Styles.BannerSection>
      <Styles.OfferBannerSection>
        <Styles.offerBanner imgSrc={Banner1}>
          <Styles.offerBannerTitle txtClr={theme.colors.primary.white}>{`Get Garden \n Fresh Fruits`}</Styles.offerBannerTitle>
        </Styles.offerBanner>
        <Styles.offerBanner imgSrc={Banner2} >
          <Styles.offerBannerTitle txtClr={theme.colors.primary.darkBlue}>{`Get 10% off \n on Vegetables`}</Styles.offerBannerTitle>
        </Styles.offerBanner>
      </Styles.OfferBannerSection>
    </main>
  );
};

export default Homepage;
