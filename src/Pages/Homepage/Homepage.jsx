import React from "react";
import * as Styles from "./Homepage.styles";
import { YellowButton } from "../../components/buttons/YellowButton";
import { GreenButton } from "../../components/buttons/GreenButton.jsx";

import BannerSection from "../../components/sections/HomePage/BannerSection/BannerSection.jsx";
import AboutBgImg from "../../assets/AboutUs/HomePageImg.png";
import OrganicIcon from "../../assets/icons/OrganicFood.svg";
import QualityStandardsIcon from "../../assets/icons/QualityStandards.svg";
import FeaturedProductsSection from "../../components/sections/HomePage/FeaturedProducts/FeaturedProductsSection.jsx";
import FeaturedOrganicSection from "../../components/sections/HomePage/FeaturedOrganicSection/FeaturedOrganicSection.jsx";
import EcoFriendSection from "../../components/sections/HomePage/EcoDetailSection/EcoFriendSection.jsx";

import JuiceCatImg from "../../assets/Homepage/JuiceCat.jpg"
import OrganicCatImg from "../../assets/Homepage/OrganicFoodCat.jpg"
import CookieCatImg from "../../assets/Homepage/CookieCat.jpg"

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
      {/* Eco Friendly section */}
      <EcoFriendSection />
      {/* Category Section */}
      <Styles.CategoriesSection>
        <Styles.CategoryCard>
          <Styles.CategoryImage src={JuiceCatImg}/>
          <Styles.CatButton>Organic Juice</Styles.CatButton>
        </Styles.CategoryCard>
        <Styles.CategoryCard>
          <Styles.CategoryImage src={OrganicCatImg}/>
          <Styles.CatButton>Organic Food</Styles.CatButton>
        </Styles.CategoryCard>
        <Styles.CategoryCard>
          <Styles.CategoryImage src={CookieCatImg}/>
          <Styles.CatButton>Nut Cookies</Styles.CatButton>
        </Styles.CategoryCard>
      </Styles.CategoriesSection>
    </Styles.HomepageMain>
  );
};

export default Homepage;
