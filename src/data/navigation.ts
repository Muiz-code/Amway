export interface LinkItem {
  path: string;
  label: string;
}

export interface DropdownGroup {
  category: string;
  links: LinkItem[];
}

export interface NavLinkType {
  label: string;
  path?: string;
  dropdown?: DropdownGroup[];
}

export const navLinks = [
  {
    label: "Shop Products",
    dropdown: [
      {
        category: "Nutrition",
        links: [
          { path: "/products/vitamins", label: "Vitamins & Supplements" },
          { path: "/products/weight", label: "Weight Management" },
          { path: "/products/sport", label: "Sport Nutrition" },
          { path: "/products/energy", label: "Energy Drinks" },
          {
            path: "/products/wellness-recommender",
            label: "Wellness Recommender",
          },
          { path: "/products/wellness-needs", label: "Wellness Needs" },
          { path: "/products/all-nutrition", label: "Shop all nutrition" },
        ],
      },
      {
        category: "Beauty",
        links: [
          { path: "/products/skincare", label: "Skin Care" },
          { path: "/products/makeup", label: "Makeup" },
          { path: "/products/fragrance", label: "Fragrance" },
          { path: "/products/artistry", label: "Artistry Beauty App" },
          { path: "/products/all-beauty", label: "Shop all beauty" },
        ],
      },
      {
        category: "Personal Care",
        links: [
          { path: "/products/bath", label: "Bath & Body Care" },
          { path: "/products/hair", label: "Hair Care" },
          { path: "/products/oral", label: "Oral Care" },
          { path: "/products/all-personal", label: "Shop all personal care" },
        ],
      },
      {
        category: "Home",
        links: [
          { path: "/products/air", label: "Air Treatment" },
          { path: "/products/cookware", label: "Cookware" },
          { path: "/products/dish", label: "Dish" },
          { path: "/products/disinfectant", label: "Disinfectant Cleanser" },
          { path: "/products/laundry", label: "Laundry" },
          { path: "/products/surface", label: "Surface Cleanser" },
          { path: "/products/water", label: "Water Treatment" },
          { path: "/products/all-home", label: "Shop all home" },
        ],
      },
      {
        category: "More",
        links: [
          { path: "/products/new", label: "New Product" },
          { path: "/products/special", label: "Special Offer" },
          { path: "/products/wellness", label: "Wellness Solution" },
          { path: "/products/gifts", label: "Gifts" },
          { path: "/products/agriculture", label: "Agriculture" },
          { path: "/products/catalogs", label: "Digital Catalogs" },
        ],
      },
    ],
  },
  {
    label: "Shop By Needs",
    dropdown: [
      {
        category: "Wellness Needs",
        links: [
          { path: "/", label: "Everyday Nutrition" },
          { path: "/", label: "Digestion" },
          { path: "/", label: "Immunity" },
          { path: "/", label: "Sleep" },
          { path: "/", label: "Energy" },
          {
            path: "/products/wellness-needs",
            label: "View all wellness needed",
          },
          { path: "/products/all-nutrition", label: "Shop all nutrition" },
        ],
      },
      {
        category: "Wellness Solutions",
        links: [
          { path: "/", label: "Reset 30" },
          { path: "/", label: "Everyday Nutrition Solution" },
          {
            path: "/",
            label: "Inner + Outer Core Beauty Solution",
          },
          {
            path: "/",
            label: "View all wellness needed",
          },
        ],
      },
    ],
  },

  { path: "/c", label: "Discover" },
  { path: "/b", label: "Start A Business" },
  { path: "/a", label: "Amway Insider" },
];
