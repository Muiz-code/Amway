/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface CarouselItem {
  image: string;
  image2: string;
  title: string;
  description1: string;
  description2: string;
  moreStyle1?: string;
  moreStyle2?: string;
  pStyle1?: string;
  pStyle2?: string;
  hStyle?: string;
  btnStyle?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, interval);

    return () => clearInterval(timer);
  }, [current, items.length, interval]);

  const slideNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-[100%] md:h-[75vh] h-[50vh] overflow-hidden shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className={`absolute top-0 left-0 w-[100%] h-full `}
        >
          <img
            src={items[current].image}
            alt={`slide-${current}`}
            className="w-full h-full object-cover"
          />

          <div
            className={`absolute inset-0 bg-opacity-40 flex flex-col text-white p-4 ${items[current].moreStyle1}`}
          >
            <div
              className={`md:w-[40%] w-[100%] flex flex-col ${items[current].moreStyle2}`}
            >
              <img src={items[current].image2} className="w-[9%] mb-3" />
              <p className={` ${items[current].pStyle1}`}>
                {items[current].description1}
              </p>
              <h2 className={` ${items[current].hStyle}`}>
                {items[current].title}
              </h2>
              <p className={`${items[current].pStyle2}`}>
                {items[current].description2}
              </p>
              <Link to="/" className="mt-4">
                <button
                  className={`border-1 text-[13px] border-dashed rounded-full px-2 py-2 ${items[current].btnStyle}  cursor-pointer hover:scale-110 transition duration-300 ease-in-out`}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
