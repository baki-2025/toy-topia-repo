


import FeaturedSellers from "./FeaturedSellers";
import NewArrivals from "./NewArrivals";
import PopularToys from "./PopularToys";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularToys />
      <NewArrivals></NewArrivals>
      <FeaturedSellers></FeaturedSellers>
      
    </div>
  );
};

export default Home;

