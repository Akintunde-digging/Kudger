import "./herosection.css";
import { useState, useEffect, useRef } from "react";
import FarmerImg from "../../assets/FarmerImg.jpg";
import ShopOwnerImg from "../../assets/ShopOwnerImg.jpg";
import ArtisanImg from "../../assets/ArtisanImg.jpg";
import NGOImg from "../../assets/NGOImg.jpg";


const slides = [
        {id: 1, image: FarmerImg, spanText: "Farmer", },
        {id: 1, image: ShopOwnerImg, spanText: "Shop Owner", },
        {id: 1, image: ArtisanImg, spanText: "Artisan", },
        {id: 1, image: NGOImg, spanText: "NGO", },
    ];

function Herosection(){
    
    const total = slides.length;
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const isAnimating = useRef(false);
    
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setTransitioning(true);
 
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setTransitioning(false);
        isAnimating.current = false;
      }, 600);
    }, 3000);
 
    return () => clearInterval(interval);
  }, [total]);
 
  const prevIndex     = (current - 1 + total) % total;
  const nextIndex     = (current + 1) % total;
  const nextNextIndex = (current + 2) % total;
 
 
  const leftImage   = transitioning ? slides[current].image  : slides[prevIndex].image;
  const centerImage = slides[current].image;
  const rightImage  = transitioning ? slides[nextIndex].image : slides[nextIndex].image;
 
  const leftClass   = "slide side";
  const centerClass = transitioning ? "slide side"   : "slide active";
  const rightClass  = transitioning ? "slide active" : "slide side";

    return(
        <div className="heroSection">
            <div className="textAndButtons">
                <div className="text">
                    <h1>eNaira Offline Access for Every Nigerian{" "} <br /> <span key={current} className="dynamicSpan">{slides[current].spanText}</span></h1>
                    <p>No smartphone? No internet? No problem. Kudger makes digital payments possible for all — using simple NFC technology.</p>
                </div>
                <div className="buttons">
                    <button>Get Started</button>
                    <button>Get Kudger NFC Device</button>
                </div>
            </div>
            <div className="slider">
                <div className="sliderTrack">
                <div className={leftClass}>
                    <img src={slides[prevIndex].image} alt="" />
                </div>
                <div className={centerClass}>
                    <img src={centerImage} alt="" />
                </div>
                <div className={rightClass}>
                    <img src={rightImage} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Herosection;