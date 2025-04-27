import React from "react";
import { Link } from "react-router-dom";

interface Card2Item {
  image: string;
  title: string;
}

interface Card2Props {
  items: Card2Item[];
}

const Card2: React.FC<Card2Props> = ({ items }) => {
  return (
    <div className="flex gap-5 w-[100%]">
      {items.map((item, index) => (
        <Link
          to="/"
          key={index}
          className="flex-shrink-0 w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] mb-3 flex flex-col items-center justify-center hover:scale-105 transition duration-300 ease-in-out"
        >
          <div className="w-full rounded-full flex items-center justify-center">
            <img
              src={item.image}
              alt={`IconCard-${index}`}
              className="w-full object-contain"
            />
          </div>
          <div className="text-center text-[11px] mt-2">
            <h3 className="font-semibold">{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card2;
