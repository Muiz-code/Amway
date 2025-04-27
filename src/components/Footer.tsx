import { BsChatText } from "react-icons/bs";
import FooterSection from "./FooterSection";
import {
  FaFacebook,
  FaInstagramSquare,
  FaShieldAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

const footerData = [
  {
    title: "Featured Brands",
    links: ["Nutrilite", "Artistry", "XS", "Amway Home", "Satinique"],
  },
  {
    title: "Help Center",
    links: [
      "Shipping & Delivery",
      "Orders & Returns",
      "Guest Order Search",
      "DITTO",
      "See All Topics",
    ],
  },
  {
    title: "Company",
    links: [
      "Our Story",
      "Amway Insider",
      "Events",
      "Careers",
      "Making a Difference",
      "AmwayGlobal.com",
      "WeAreAmway.com",
    ],
  },
  {
    title: "Resources",
    links: [
      "Partner Stores",
      "Mobile Apps",
      "Digital Catalogs",
      "Business Documents",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white mt-4 w-[100%]">
      <div className="container mx-auto px-4">
        <div className="pb-10 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
          <div>
            <div className="flex justify-center mb-2 text-3xl">
              <BsChatText className="text-[#b9b9b9a4] text-[25px] font-light" />
            </div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-[12px]">
              Our support team is here to help by phone or email.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-2 text-3xl">
              <FaShieldAlt className="text-[#b9b9b9a4] text-[25px] font-light" />
            </div>
            <h3 className="font-bold mb-2">AMWAY PROMISE</h3>
            <p className="text-[12px]">
              Satisfaction will always be our goal, and protection—our promise.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-2 text-3xl">
              <IoRocketOutline className="text-[#b9b9b9a4] text-[25px] font-light" />
            </div>
            <h3 className="font-bold mb-2">Start a Business</h3>
            <p className="text-[12px]">
              Sell quality products that people use every day.
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-10 py-5 w-[100%] md:pl-[5.5%] pl-[10%]">
          {footerData.map((section, idx) => (
            <FooterSection
              key={idx}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className=" text-center text-xs text-gray-400 flex flex-col gap-4">
          <div className="flex justify-center gap-4 text-black text-xl">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
          <div className="flex justify-center gap-2 text-black font-light">
            <span>US</span> <span>English</span>
          </div>
          <div className="flex justify-center gap-5 text-black font-light">
            <div>Copyright © 2019-2024 Amway</div>
            <div className="flex justify-center flex-wrap gap-4 text-gray-500">
              <span>SiteMap</span>
              <span>Privacy</span>
              <span>Notice</span>
              <span>Policy & Security</span>
              <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
