import React, { useEffect, useState } from 'react';
import './Hero.css'; // Import your CSS file if you have any styles for
import bt1 from './bt1.jpg';
import bt2 from './bt2.jpg';
import bt3 from './bt3.jpg';
import bt4 from './bt4.jpg'; 

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      slide(activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const slide = (toIndex) => {
    const itemsArray = document.querySelectorAll(".carousel_item");
  
    if (toIndex >= itemsArray.length) {
      toIndex = 0; // Reset index to 0 when reaching the end
    }
  
    const newItemActive = itemsArray[toIndex];
    const itemActive = document.querySelector(".carousel_item__active");
  
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
    }, 20);
  
    newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      setActiveIndex(toIndex);
    }, { once: true });
  }

  return (
    <div className='hero'>
    <div className="carousel">
      <div className="carousel_inner">
        <div className="carousel_item carousel_item__active">
          <img src={bt1} alt="" className="carousel_img" />
          <div className="carousel_caption">
            <h1 className="carousel_title">Apna Zaika</h1>
            <p className="carousel_description">"Savor the essence of culinary excellence at Apna Zaika, where each dish is a masterpiece and every moment is a celebration of flavor and finesse."</p>
          </div>
        </div>
        <div className="carousel_item">
          <img src={bt2} alt="" className="carousel_img" />
          <div className="carousel_caption">
            <h1 className="carousel_title">Apna Zaika</h1>
            <p className="carousel_description">"Savor the essence of culinary excellence at Apna Zaika, where each dish is a masterpiece and every moment is a celebration of flavor and finesse."</p>
          </div>
        </div>
        <div className="carousel_item">
          <img src={bt3} alt="" className="carousel_img" />
          <div className="carousel_caption">
            <h1 className="carousel_title">Apna Zaika</h1>
            <p className="carousel_description">"Savor the essence of culinary excellence at Apna Zaika, where each dish is a masterpiece and every moment is a celebration of flavor and finesse."</p>
          </div>
        </div>
        <div className="carousel_item">
          <img src={bt4} alt="" className="carousel_img" />
          <div className="carousel_caption">
            <h1 className="carousel_title">Apna Zaika</h1>
            <p className="carousel_description">"Savor the essence of culinary excellence at Apna Zaika, where each dish is a masterpiece and every moment is a celebration of flavor and finesse."</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
