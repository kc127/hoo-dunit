/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './ReviewsAverageOverviewStars.css';
// import images from '/static/images';

const ReviewsAverageOverviewStars = (props) => {
  //const { ratings } = props;
  const ratings = 3.4;
  const solidStars = Math.floor(ratings);
  const starDifference = ratings - solidStars;
  let partialStars;
  const remainingStars = 4 - solidStars;
  if (starDifference > 0 && starDifference <= 0.12) {
    // Unfilled star
    partialStars = <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" />;
  } else if (starDifference > 0.12 && starDifference <= 0.37) {
    // Quarter filled star
    partialStars = <img src="/images/QuarterStar.png" className={styles.stars} alt="Quarter Filled Star" />;
  } else if (starDifference > 0.37 && starDifference <= 0.62) {
    // Half filled star
    partialStars = <img src="/images/HalfStar.png" className={styles.stars} alt="Half Filled Star" />;
  } else if (starDifference > 0.62 && starDifference <= 0.87) {
    // 3/4 filled star
    partialStars = <img src="/images/ThreeQuarterStar.png" className={styles.stars} alt="Three Quarters Filled Star" />;
  } else if (starDifference > 0.87 && starDifference < 1) {
    // Solid star
    partialStars = <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" />;
  } else {
    // Unfilled star
    partialStars = <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" />;
  }

  return (
    <div>
      {
        [...Array(solidStars)].map((star, index) => <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" key={`Solid Star: ${index} ${star}`} />)
      }
      {partialStars}
      {
        [...Array(remainingStars)].map((star, index) => <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" key={`Unfilled Star: ${index} ${star}`} />)
      }
    </div>
  );
};

export default ReviewsAverageOverviewStars;

// Notes and experiments:

// const ReviewsAverageOverviewStars = (props) => {
//   const { ratings } = props;
//   const solidStars = Math.floor(ratings);
//   let halfAndRemainingStars;
//   const remainingStars = 4 - solidStars;
//   if (solidStars !== ratings) {
//     halfAndRemainingStars = <FaStarHalfAlt size={25} />;
//   } else {
//     halfAndRemainingStars = <FaRegStar size={25} />;
//   }

//   return (
//     <div>
//       {
//         [...Array(solidStars)].map(() => <FaStar size={25} />)
//       }
//       {halfAndRemainingStars}
//       {
//         [...Array(remainingStars)].map(() => <FaRegStar size={25} />)
//       }
//     </div>
//   );
// };
