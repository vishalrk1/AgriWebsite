import React from "react";
import * as Styles from "./FeaturedProductsSection.styles";
import ProductCard from "../../../Cards/Product/ProductCard";
import { ProductsData } from "../../../../utils/ProductsData";
import { GreenButton } from "../../../buttons/GreenButton";
import { theme } from "../../../../theme";

const FeaturedProductsSection = () => {
  return (
    <Styles.FeaturedProductSection
      backgroundClr={theme.colors.primary.white}
      iscenter={true}
    >
      <h1>Our Products</h1>
      <Styles.ProductsSection>
        {ProductsData.filter((item) => item.featured).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </Styles.ProductsSection>
      <GreenButton title="Load More" showArrow />
    </Styles.FeaturedProductSection>
  );
};

export default FeaturedProductsSection;
