import { Link } from 'react-router-dom';
import restaurantFoodImage from '../../assets/images/restaurant-food.jpg';
import './Hero.css';
import pages from '../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p> Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img className="hero-image" src={restaurantFoodImage} alt="Restaurant food" />
      </div>
    </section>
  );
};

export default Hero;
