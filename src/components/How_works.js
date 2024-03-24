import React from 'react';
import list_icon1 from '../assets/list_icon1.png';
import list_icon2 from '../assets/list_icon2.png';
import list_icon3 from '../assets/list_icon3.png';
import vectors from '../assets/vectors.png';
import listing from '../assets/listing.png';
import hiring from '../assets/hiring.png';
import renting from '../assets/renting.png';

function How_works() {
  return (
    <div className='mt-[10.4vw] md:mt-[8.13vw] relative '>
      <img
        src={vectors}
        alt=''
        className='absolute top-[14vw] right-[2.6vw] hidden md:block w-[35%] h-[70%]'
      />
      <button className='h-[6.66vw] w-[20.266vw] md:h-[3.38vw] font-[500] text-white md:w-[10.15vw] rounded-[40.455vw] text-[2.4vw] md:text-[1.17vw] bg-[#F5AD0D]'>
        How it works?
      </button>

      <h1 className='text-[5.066vw] md:text-[2.99vw] mt-[4vw] font-hind font-semibold tracking-tight leading-tight'>
        Want to rent an Hostel? <br /> Let see how with
        <span className='text-[#F5AD0D]'> RentalHub</span> works!
      </h1>
      <div className='flex flex-col items-start justify-center space-y-[12.8vw] md:space-y-[3.9vw] my-[4.75vw] md:pl-[5.07vw] px-[20vw] md:px-0 md:max-w-[58.3vw]'>
        {/**Card 1 */}
        <div className='flex flex-col md:flex-row md:space-x-[1.697vw] items-center justify-center'>
          <img src={list_icon1} alt='' className='hidden md:block' />
          <img src={listing} alt='' className='md:hidden' />
          <div className='flex flex-col items-center md:items-start justify-center space-y-[0.455vw] max-w-xl'>
            <h1 className='text-[3.733vw] md:text-[1.236vw] font-[600]'>
              List your property
            </h1>
            <p className='text-[2.133vw] md:text-[0.976vw] font-[300] text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/**Card 2 */}
        <div className='flex flex-col md:flex-row md:space-x-[1.697vw] items-center justify-center'>
          <img src={list_icon2} alt='' className='hidden md:block' />
          <img src={hiring} alt='' className='md:hidden' />
          <div className='flex flex-col items-center md:items-start justify-center space-y-[0.455vw] max-w-xl'>
            <h1 className='text-[14px] md:text-[1.236vw] font-[600]'>
              List your property
            </h1>
            <p className='text-[8px] md:text-[0.976vw] font-[300] text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/**Card 3 */}
        <div className='flex flex-col md:flex-row md:space-x-[1.697vw] items-center justify-center'>
          <img src={list_icon3} alt='' className='hidden md:block' />
          <img src={renting} alt='' className='md:hidden' />
          <div className='flex flex-col items-center md:items-start justify-center space-y-[0.455vw] max-w-xl'>
            <h1 className='text-[14px] md:text-[1.236vw] font-[600]'>
              List your property
            </h1>
            <p className='text-[8px] md:text-[0.976vw] font-[300] text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How_works;
