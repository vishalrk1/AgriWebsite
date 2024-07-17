import React from "react";
import * as Styles from "./ProductCard.styles";
import { theme } from "../../../theme";
import StarRating from "../../StarRating/StarRating";

const ProductCard = ({ product }) => {
  return (
    <Styles.ProductCardWrapper>
      <Styles.CategoryTag>
        <p>{product.category}</p>
      </Styles.CategoryTag>
      <Styles.ProductImage src={product.imgsrc} />
      <Styles.ProductTitle>{product.title}</Styles.ProductTitle>
      <Styles.Divider />
      <Styles.ProductDetailWrapper>
        {product.new_price ? (
          <Styles.ProductPriceWrapper>
            <Styles.ProductPrice
              color={theme.colors.accent.grey}
              decoration={true}
            >{`$${Number(product.price).toFixed(2)}`}</Styles.ProductPrice>
            <Styles.ProductPrice
              color={theme.colors.primary.darkBlue}
            >{`$${Number(product.new_price).toFixed(2)}`}</Styles.ProductPrice>
          </Styles.ProductPriceWrapper>
        ) : (
          <Styles.ProductPrice
            color={theme.colors.primary.darkBlue}
          >{`$${Number(product.price).toFixed(2)}`}</Styles.ProductPrice>
        )}
        <StarRating rating={product.rating} />
      </Styles.ProductDetailWrapper>
    </Styles.ProductCardWrapper>
  );
};

export default ProductCard;
