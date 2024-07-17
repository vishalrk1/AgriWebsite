import * as Styles from "./StarRating.styles";

const StarRating = ({ rating }) => {
  // Calculate the number of filled, half-filled, and empty stars
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Styles.StarContainer>
      {[...Array(fullStars)].map((_, index) => (
        <Styles.Star key={index} filled />
      ))}
      {halfStar && <Styles.Star filled={false} />}
      {[...Array(emptyStars)].map((_, index) => (
        <Styles.Star key={index + fullStars + 1} />
      ))}
    </Styles.StarContainer>
  );
};

export default StarRating;
