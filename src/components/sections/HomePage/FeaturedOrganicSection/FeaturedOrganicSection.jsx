import React from "react";
import * as Styles from "./FeaturedOrganicSection.styles";
import { theme } from "../../../../theme";
import { ProductsData } from "../../../../utils/ProductsData";
import ProductCard from "../../../Cards/Product/ProductCard";
import { YellowButton } from "../../../buttons/YellowButton";

const FeaturedOrganicSection = () => {
  return (
    <Styles.FeaturedProductSection
      backgroundClr={theme.colors.primary.darkBlue}
      iscenter={false}
    >
      <Styles.OrganicProductsTitleContainer>
        <h2>We Offer Organic For You</h2>
        <YellowButton title="View All Products" showArrow />
      </Styles.OrganicProductsTitleContainer>
      <Styles.OrgaincProductSection>
        {ProductsData.filter((item) => item.isFeaturedOrganic).map(
          (product) => (
            <ProductCard product={product} key={product.title} />
          )
        )}
      </Styles.OrgaincProductSection>
    </Styles.FeaturedProductSection>
  );
};

export default FeaturedOrganicSection;
