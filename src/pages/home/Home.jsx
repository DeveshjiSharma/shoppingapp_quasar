import { React, useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;

{
  /* <div className="flex gap-5 justify-center">
        <button className=" bg-gray-300 p-5" onClick={() => addCart()}>
          add
        </button>
        <button className=" bg-gray-300 p-5" onClick={() => deleteCart()}>
          del
        </button>
      </div> */
}
// const addCart = () => {
//   dispatch(addToCart("Shirt"));
// };

// const deleteCart = () => {
//   dispatch(deleteFromCart("shirt"));
// };
