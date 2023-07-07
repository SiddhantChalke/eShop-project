// import { useState, useRef, useEffect } from "react";
// import './Slideshow.css'
// const arr = ["#0088FE", "#00C49F", "#FFBB28"];

// const Slideshow = () => {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(() =>
//         setIndex((prevIndex) =>
//           prevIndex === arr.length - 1 ? 0 : prevIndex + 1
//         ),
//       2500
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {arr.map((backgroundColor, index) => (
//           <div className="slide" key={index} style={{backgroundColor}}></div>
//         ))}
//       </div>
//       <div className="slideshowDots">
//         {arr.map((_, idx) => (
//           <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Slideshow;
import React from 'react'
import { useState } from 'react';

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0) ; 
  const arr = ["#0088FE", "#00C49F", "#FFBB28"];
  const data =[
    "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];  
  const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide-1)
  }
  const nextSlide =()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide+1)
  }
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw )`}}>
            <img src={arr[0]} alt="" />
            <img src={arr[1]} alt="" />
            <img src={arr[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>o</div>
            <div className="icon" onClick={nextSlide}>o</div>
        </div>
    </div>
  )
}

export default Slideshow
