import { Link } from "react-router-dom";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Carousel from "../components/Carousel";
import {
  cardItems,
  card2Items,
  card3Items,
  card4Items,
  card5Items,
  caroselItems,
} from "../data/items";
import i from "../assets/i.webp";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Carousel items={caroselItems} interval={6000} height="75vh" />

      {/* Quality Products */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h3 className="text-[#FF90BB] mb-2 text-[12px]">
          Quality Products. Guaranteed.
        </h3>
        <p className="text-center text-[15px] mb-5 w-[85%]">
          Discover products inspired by and created for a healthier, more
          confident life.
        </p>
        <div className="flex items-center justify-center mt-10 mb-10">
          <Card
            items={cardItems}
            cardStyle="w-[100%] sm:w-[100%] md:w-[0%] lg:w-[17%] mb-3 bg-white rounded-lg overflow-hidden
             shadow-sm flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out"
            mainCardStyle="w-[95%] md:w-[90%] mx-auto grid gap-5 grid-cols-2 sm:grid-cols-4 md:flex md:justify-center"
            cardPStyle="font-semibold"
            titleStyle="p-4"
          />
        </div>
      </div>

      {/* Shop By Category */}
      <div className="flex flex-col items-center justify-center mt-5 mb-10">
        <h3 className="text-[#FF90BB] mb-[15%] md:mb-[5%] text-[12px] ]">
          Shop By Category
        </h3>
        <div
          className="flex justify-center overflow-auto  w-[95%] md:w-[85%] mb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Card2 items={card2Items} />
        </div>
      </div>
      {/* Our Exclusive Amway™ Brands*/}
      <div className="flex flex-col items-center justify-center mt-5 mb-10">
        <h3 className="text-[#FF90BB] mb-[15%] md:mb-[5%] text-[12px] ]">
          Our Exclusive Amway™ Brands
        </h3>
        <div
          className="flex justify-center overflow-x-auto  mb-10 w-[95%] md:w-[85%]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Card
            items={card3Items}
            mainCardStyle="flex gap-5 w-[100%]"
            cardStyle="w-[100%] sm:w-[50%] md:w-[100%] lg:w-[100%] mb-3 bg-white rounded-lg shadow-sm flex flex-col items-center 
            border-b-1 w-[100%] border-[#82818141] border-l-1 border-r-1  rounded-b-lg"
            imgStyle="w-[240px] flex items-center justify-center"
            imageStyle="w-[100%] object-cover rounded-tl-lg rounded-tr-lg"
            titleStyle=" p-4 text-center text-[10px] flex flex-col items-center"
            cardPStyle="text-[12px] font-light "
            btnName="Learn More"
            btnStyle="mt-2 text-[#FF90BB] rounded-lg transition duration-300 ease-in-out cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
      {/* Recommended for You. */}
      <div className="flex flex-col items-center justify-center mt-10 font-medium">
        <h3 className="text-[#FF90BB]  mb-[15%] md:mb-[5%] text-[12px]">
          Recommended for You.
        </h3>

        <div
          className="flex justify-center overflow-x-auto  mb-10 w-[95%] md:w-[85%]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Card
            items={card4Items}
            isCard4={true}
            mainCardStyle="flex gap-5 w-[100%] md:w-[90%] mx-auto grid gap-5 grid-cols-2 sm:grid-cols-4 md:flex md:justify-center"
            cardStyle="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[50%] mb-3 bg-white rounded-lg shadow-sm 
            flex flex-col items-center  border-b-1 border-[#82818141] border-l-1 border-r-1  rounded-b-lg"
            imgStyle="w-[100%] flex items-center justify-center"
            imageStyle="w-[100%] object-cover rounded-tl-lg rounded-tr-lg"
            titleStyle="text-center text-[12px] flex flex-col items-center w-[100%]"
            cardPStyle="text-[12px] font-light "
            btnName="Add to Cart"
            btnStyle=" text-[#000] text-[15px] border-t border-[#82818141] py-4  w-[100%] cursor-pointer flex items-center justify-center gap-2  hover:bg-[#82818141] transition duration-300 ease-in-out"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-center justify-center mt-10 font-medium">
        <div
          className="flex justify-center overflow-x-auto  mb-10 w-[100%] md:w-[100%]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Card
            items={card5Items}
            mainCardStyle="grid md:flex w-[100%] "
            cardStyle="w-[100%] sm:w-[50%] md:w-[100%] lg:w-[100%] mb-3 bg-white flex flex-col items-center "
            imgStyle="w-[100%] flex items-center justify-center"
            titleStyle="text-center text-[20px] flex flex-col items-center w-[100%] gap-5 mt-5"
            cardPStyle="text-[20px] font-semibold"
            cardP2Style="text-[15px] font-light w-[95%] md:w-[70%]"
            btnName="Get Started"
            btnStyle=" text-[#000] text-[9px] py-1  w-[100%] flex items-center justify-center gap-2 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
      {/* Amway Insider */}

      <div className="flex flex-col items-center justify-center mt-10 font-medium bg-[#b9b9b929] py-5">
        <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] mb-10">
          <h3 className="text-[#FF90BB] mb-[5%] md:mb-[2%] text-[12px]">
            Amway Insider
          </h3>
          <p className="mb-5 text-center text-[16px] text-light">
            Read news, stories, answers to questions, and facts about Amway..
          </p>
          <Link
            to={"/"}
            className="border border-[#b9b9b963] rounded-full text-[10px] px-4 py-2"
          >
            Learn More
          </Link>
        </div>
        <div className="md:flex grid items-center justify-center w-[100%] md:w-[85%] mt-5 mb-10 gap-[12px] md:gap-[80px]">
          <div className="w-[100%] flex items-center justify-center ">
            <img
              src={i}
              alt="picture is loading"
              className="w-[95%] md:w-[90%] h-[45vh] md:h-[48vh] rounded-lg"
            />
          </div>
          <div className="text-center w-[100%] md:w-[70%] flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-5 ">This is Amway</h3>
            <p className="mb-5 text-[16px] w-[95%] md:w-[75%] font-light">
              Learn about the company, history and how Amway has empowered
              entrepreneurs with business opportunities for over 60 years.
            </p>
            <Link
              to={"/"}
              className="border border-[#b9b9b963] rounded-full text-[10px] px-4 py-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-10 font-medium  py-5">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
