import React from "react";
import * as Styles from "./Homepage.styles";
import { YellowButton } from "../../components/buttons/YellowButton";

import BannerSection from "../../components/sections/HomePage/BannerSection/BannerSection.jsx";
import AboutBgImg from "../../assets/AboutUs/HomePageImg.png";
import OrganicIcon from "../../assets/icons/OrganicFood.svg";
import QualityStandardsIcon from "../../assets/icons/QualityStandards.svg";
import { GreenButton } from "../../components/buttons/GreenButton.jsx";
import { ProductsData } from "../../utils/ProductsData.js";
import { theme } from "../../theme.js";
import ProductCard from "../../components/Cards/Product/ProductCard.jsx";
import FeaturedProductsSection from "../../components/sections/HomePage/FeaturedProducts/FeaturedProductsSection.jsx";
import FeaturedOrganicSection from "../../components/sections/HomePage/FeaturedOrganicSection/FeaturedOrganicSection.jsx";

const Homepage = () => {
  return (
    <Styles.HomepageMain>
      <Styles.HeroSection>
        <Styles.HeroImage>
          <Styles.HeroTitleContainer>
            {/* <h1>Choose the best</h1> */}
            <Styles.HeroTitle>
              {`Choose the best healthier way \n of life`}
            </Styles.HeroTitle>
            <YellowButton title="Explore More" showArrow={true} />
          </Styles.HeroTitleContainer>
        </Styles.HeroImage>
      </Styles.HeroSection>
      {/* Offer Banners */}
      <BannerSection />
      {/* About us Section */}
      <Styles.AboutUsSection>
        <Styles.AboutUSWrapper>
          <Styles.AboutUsBg src={AboutBgImg} />
          <Styles.TextContent>
            <Styles.Title>
              {`We Believe in Working \n Accredited Farmers`}
            </Styles.Title>
            <Styles.Description>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to be the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </Styles.Description>
            <Styles.FeaturesList>
              <Styles.FeatureItem>
                <img src={OrganicIcon} alt="OrganicIcon" />
                <div>
                  <h3>Orgainc Foods Only</h3>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </Styles.FeatureItem>
              <Styles.FeatureItem>
                <img src={QualityStandardsIcon} alt="QualityStandardsIcon" />
                <div>
                  <h3>Quality Standards</h3>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </Styles.FeatureItem>
              <GreenButton title="Shop Now" showArrow={true} />
            </Styles.FeaturesList>
          </Styles.TextContent>
        </Styles.AboutUSWrapper>
      </Styles.AboutUsSection>

      {/* Products Section */}
      <FeaturedProductsSection />

      {/* organic products */}
      <FeaturedOrganicSection />
    </Styles.HomepageMain>
  );
};

export default Homepage;
