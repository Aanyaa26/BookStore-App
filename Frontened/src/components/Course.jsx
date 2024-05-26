import React from "react";
import Cards from "./Cards";
import list from '../../public/list.json';
import {Link} from 'react-router-dom';
function Course() {
  return( 
  <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-20 items-center justify-center text-center">
        <h1 className="text-3xl md:test-4xl">
            We're delighted to have you <span className="text-pink-500"> Here!</span>
            </h1>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Laborum maxime impedit quidem similique facilis, tempore velit magnam amet 
                nesciunt illum libero in enim doloremque 
                hic neque temporibus quis aliquam perspiciatis.
                </p>
                <a href ="/">
                <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">Back</button>

                </a>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item)=>(
                <Cards key ={item.id} item={item}/>
            ))
        }
    </div>
  </div>
  </>
  );
}

export default Course;
