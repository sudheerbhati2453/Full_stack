import shop1 from "./shop1.png";
import shop2 from "./shop2.png";
import shop3 from "./shop3.png";
import shop4 from "./shop4.png";
import new8 from "./new8.png";
import new1 from "./new1.png";
import new2 from "./new2.png";
import new3 from "./new3.png";
import new4 from "./new4.png";
import new5 from "./new5.png";
import new6 from "./new6.png";
import new7 from "./new7.png";
import shoew1 from "./shoew1.jpg";
import nw5 from "./nw5.jpg";
import shoew3 from "./shoew3.jpg";
import shoew4 from "./shoew4.jpg";
import shoew5 from "./shoew5.jpg";
import shoew6 from "./shoew6.jpg";
import shoew7 from "./shoew7.jpg";
import shoew8 from "./shoew8.jpg";
import nw6 from "./nw6.jpg";
import nw7 from "./nw7.jpg";
import nw3 from "./nw3.jpg";
import nw4 from "./nw4.jpg";
import ch1 from "./ch1.jpg";
import ch13 from "./ch13.jpg";
import ch3 from "./ch3.jpg";
import ch4 from "./ch4.jpg";
import ch14 from "./ch14.jpg";
import ch6 from "./ch6.jpg";
import ch7 from "./ch7.jpg";
import ch8 from "./ch8.jpg";
import ch9 from "./ch9.jpg";
import ch10 from "./ch10.jpg";
import ch11 from "./ch11.jpg";
import ch12 from "./ch12.jpg";

let all_product = [
  {
    id: 1,
    name: "Baby Thali",
    category: "men",
    image: shop1,
    new_price: 70,
    old_price: 80,
  },
  {
    id: 2,
    name: "Punjabi Thali",
    category: "men",
    image: shop2,
    new_price: 80,
    old_price: 90,
  },
  {
    id: 3,
    name: "Mountain Trekking Shoe",
    category: "men",
    image: shop3,
    new_price: 1060.0,
    old_price: 1100.5,
  },
  {
    id: 4,
    name: "White Sneakers",
    category: "men",
    image: shop4,
    new_price: 1100.0,
    old_price: 1150.0,
  },
  {
    id: 5,
    name: "Black Sports Shoe",
    category: "men",
    image: new8,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 6,
    name: "Black Sneakers",
    category: "men",
    image: new1,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 7,
    name: "Golden-Yellow Sneakers",
    category: "men",
    image: new2,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 8,
    name: "Green Sneakers",
    category: "men",
    image: new3,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 9,
    name: "Blue Sneakers",
    category: "men",
    image: new4,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 10,
    name: "Violet Sneakers",
    category: "men",
    image: new5,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 11,
    name: "Plain White Sneakers",
    category: "men",
    image: new6,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 12,
    name: "Neon-Green Sneakers",
    category: "men",
    image: new7,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 13,
    name: "Dahi Bhalla",
    category: "women",
    image: shoew1,
    new_price: 50,
    old_price: 60,
  },
  {
    id: 14,
    name: "Fried Rice",
    category: "women",
    image: nw5,
    new_price: 80,
    old_price: 90,
  },
  {
    id: 15,
    name: "Tea With Samosa",
    category: "women",
    image: shoew3,
    new_price: 25,
    old_price: 30,
  },
  {
    id: 16,
    name: "Cheese Pizza",
    category: "women",
    image: shoew4,
    new_price: 150,
    old_price: 190,
  },
  {
    id: 17,
    name: "Lemon Rice With Special Seasoning",
    category: "women",
    image: shoew5,
    new_price: 110,
    old_price: 130,
  },
  {
    id: 18,
    name: "Idly",
    category: "women",
    image: shoew6,
    new_price: 35,
    old_price: 40,
  },
  {
    id: 19,
    name: "Mendu Vada",
    category: "women",
    image: shoew7,
    new_price: 40,
    old_price: 50,
  },
  {
    id: 20,
    name: "Daal Baati",
    category: "women",
    image: shoew8,
    new_price: 45,
    old_price: 50,
  },
  {
    id: 21,
    name: "Vada Pav",
    category: "women",
    image: nw6,
    new_price: 55,
    old_price: 60,
  },
  {
    id: 22,
    name: "Light-Violet Shoe",
    category: "women",
    image: nw7,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 23,
    name: "Brownish-Red Shoe",
    category: "women",
    image: nw3,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 24,
    name: "Black Sneakers",
    category: "women",
    image: nw4,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 25,
    name: "Black-Mocktail",
    category: "kids",
    image: ch1,
    new_price: 50,
    old_price: 60,
  },
  {
    id: 26,
    name: "Blue-Green-Mocktail",
    category: "kids",
    image: ch13,
    new_price: 45,
    old_price: 55,
  },
  {
    id: 27,
    name: "Aperol-Mocktail",
    category: "kids",
    image: ch3,
    new_price: 65,
    old_price: 55,
  },
  {
    id: 28,
    name: "Lemon-Mocktail",
    category: "kids",
    image: ch4,
    new_price: 50,
    old_price: 60,
  },
  {
    id: 29,
    name: "Orange-Mocktail",
    category: "kids",
    image: ch14,
    new_price: 65,
    old_price: 75,
  },
  {
    id: 30,
    name: "Mint-Mocktail",
    category: "kids",
    image: ch6,
    new_price: 40,
    old_price: 50,
  },
  {
    id: 31,
    name: "Multicolour-Dark-Green Shoe",
    category: "kids",
    image: ch7,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 32,
    name: "Multicolour-Light-Violet Shoe",
    category: "kids",
    image: ch8,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 33,
    name: "Multicolour-Dark-Blue-Pink Shoe",
    category: "kids",
    image: ch9,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 34,
    name: "Multicolour-Sky-Blue Shoe",
    category: "kids",
    image: ch10,
    new_price: 1085.0,
    old_price: 1120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: ch11,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: ch12,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
