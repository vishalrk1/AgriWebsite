import React from "react";
import * as Styles from "./EcoFriendSection.styles";
import EcoBanner from "../../../../assets/Homepage/EcoFriendlyBanner.png";

const EcoFriendSection = () => {
  return (
    <Styles.EcoSectionWrapper>
      <Styles.EcoImageWrapper>
        <img src={EcoBanner} />
      </Styles.EcoImageWrapper>
      <Styles.EcoContentWrapper>
        <Styles.EcoTitle>
          {`Econis is a Friendly \n Organic Store`}
        </Styles.EcoTitle>
        <Styles.EcoDetailList>
          <Styles.EcoDetailItem>
            <h3>Start with Our Company First</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </Styles.EcoDetailItem>
          <Styles.EcoDetailItem>
            <h3>Learn How to Grow Yourself</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </Styles.EcoDetailItem>
          <Styles.EcoDetailItem>
            <h3>Farming Strategies of Today</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </Styles.EcoDetailItem>
        </Styles.EcoDetailList>
      </Styles.EcoContentWrapper>
    </Styles.EcoSectionWrapper>
  );
};

export default EcoFriendSection;
