import React from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

interface CardItem {
  image: string;
  link?: string;
  title?: string;
  paragraph?: string;
}

interface CardProps {
  items: CardItem[];
  cardStyle?: string;
  mainCardStyle?: string;
  imgStyle?: string;
  titleStyle?: string;
  cardPStyle?: string;
  cardP2Style?: string;
  btnName?: string;
  btnStyle?: string;
  isCard4?: boolean;
  imageStyle?: string;
}

const Card: React.FC<CardProps> = ({
  items,
  cardStyle,
  mainCardStyle,
  imgStyle,
  titleStyle,
  cardPStyle,
  btnName,
  btnStyle,
  imageStyle,
  isCard4 = false,
  cardP2Style,
}) => {
  return (
    <div className={`${mainCardStyle}`}>
      {items.map((item, index) => (
        <div key={index} className={`${cardStyle}`}>
          <Link to={item.link || "/"} className={`${imgStyle}`}>
            <img
              src={item.image}
              alt={`Card-${index}`}
              className={`${imageStyle}`}
            />
          </Link>
          <div className={`text-center text-[12px] h-[100%] ${titleStyle}`}>
            <h3 className={`text-md ${cardPStyle}`}>{item.title}</h3>
            <p className={`text-md ${cardP2Style}`}>{item.paragraph}</p>
            {item.link && (
              <Link
                to={item.link}
                className={`cursor-pointer flex mt-2 ${btnStyle}`}
              >
                {isCard4 && (
                  <span>
                    <IoMdCart />
                  </span>
                )}
                <span>{btnName}</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
