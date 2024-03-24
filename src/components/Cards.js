import React from "react";
import listing from "../assets/listing.png";
import hiring from "../assets/hiring.png";
import renting from "../assets/renting.png";
import listingbg from "../assets/listing-bg.png";

function Cards() {
  return (
    <div className="flex flex-col md:flex-row space-y-[2.933vw] md:space-y-0 mx-auto w-full items-center justify-center md:space-x-[5.8vw] mt-[7.466vw] md:mt-[7.6vw]">
      {/**First Card */}
      <div className="w-[57.866vw] md:w-[22.4vw] flex flex-col items-center justify-center pb-[2.53vw] pr-[1.04vw] pl-[1.4vw] bg-black rounded-[1.95vw]">
        <img src={listingbg} alt="" className="mx-auto mt-[5.06vw] md:mt-[1.56vw] w-[16.8vw] h-[16.8vw] md:w-[6.57vw] md:h-[6.57vw]" />
        <h1 className="mt-[2.4vw] md:mt-[0.911vw] text-[3.73vw] lg:text-[1.43vw] text-white text-center font-[600]">
          Easy Listing
        </h1>
        <p className="text-[2.133vw] md:text-[0.97vw] leading-[3.2vw] md:leading-[1.36vw] font-[300] mt-[2.4vw] md:mt-[1.56vw]  text-white text-center">
        It is one of the most valuable features on RentPayy, allowing users to quickly and easily find properties that meet their specific criteria. Through breaking down the listed products into specific categories, such as location, price, users can more easily filter their search results to find properties that meet their needs. 
        </p>
      </div>
      {/**Second Card */}
      <div className="w-[57.866vw] md:w-[22.4vw] flex flex-col items-center justify-center pb-[2.53vw] pr-[1.04vw] pl-[1.4vw] bg-[#F2F6FF] rounded-[1.95vw] ">
        <img src={hiring} alt="" className="mx-auto mt-[5.06vw] md:mt-[1.56vw] w-[16.8vw] h-[16.8vw] md:w-[6.57vw] md:h-[6.57vw]" />
        <h1 className="mt-[2.4vw] md:mt-[0.911vw] text-[3.73vw] lg:text-[1.43vw] text-black text-center font-[600]">
          Easy Renting
        </h1>
        <p className="text-[2.133vw] md:text-[0.97vw] leading-[3.2vw] md:leading-[1.36vw] font-[300] mt-[2.4vw] md:mt-[1.56vw]  text-black text-center">
        Easy renting in our app can help to reduce stress and hassle for both renters and property owners, making it a valuable tool for us. Our main focus and goal is to totally focus on the renting domain and we tend to make it as much easier as possible. 
        </p>
      </div>
      {/**First Card */}
      <div className="w-[57.866vw] md:w-[22.4vw] flex flex-col items-center justify-center pb-[2.53vw] pr-[1.04vw] pl-[1.4vw] bg-[#F2F6FF] rounded-[1.95vw]">
        <img src={renting} alt="" className="mx-auto mt-[5.06vw] md:mt-[1.56vw] w-[16.8vw] h-[16.8vw] md:w-[6.57vw] md:h-[6.57vw]" />
        <h1 className="mt-[2.4vw] md:mt-[0.911vw] text-[3.73vw] lg:text-[1.43vw] text-black text-center font-[600]">
          Easy Hiring
        </h1>
        <p className="text-[2.133vw] md:text-[0.97vw] leading-[3.2vw] md:leading-[1.36vw] font-[300] mt-[2.4vw] md:mt-[1.56vw]  text-black text-center">
        RentPayy provides users with access a platform where they can hire working professionals, increasing the chances of finding the right person for the job. If you are a working professional, then you are at the right place to list yourself so that others can hire you for their work.</p>
      </div>
    </div>
  );
}

export default Cards;
