import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


import list from "../../public/list.json";

function Freebook() {
    
    console.log("Imported list:", list); // Check if the list is imported correctly

    const filterData = list.filter((data)=>data.category==="Free") ; // Filter data function is used to filter the array.Here it is used filter only books which are free (category wise)
    console.log(filterData); // inorder to check what data are we getting

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: calculateSlidesToShow(),
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed:1000

        
      };

      function calculateSlidesToShow() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            return 3; // Show 3 slides for larger screens
        } else if (screenWidth >= 768) {
            return 2; // Show 2 slides for medium screens
        } else {
            return 1; // Show 1 slide for smaller screens
        }
    }

  return (
   <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit omnis quo alias quam esse aspernatur repudiandae tempora, nostrum deserunt totam ab, quas sequi, doloribus debitis! Expedita, officia. Accusamus, dolorem?</p>
    </div>
  
  <div>
  <Slider {...settings}> 
  {/* Mapping our cards directly into the slider */}
  {/* React props ("properties") are a way to pass data from a parent component to a child component ---> here parent is freebook and child is card
   It allows components to be dynamic and flexible, once they receive different data and render accordingly*/}
       {filterData.map((item)=>(
        <Cards item ={item} key ={item.id}/>
       ))}
      </Slider> 
  </div>
  </div>
  </>
  );
}
export default Freebook;
