import React from 'react';
import mockup from '../assets/mockup.png';
import google from '../assets/google.png';
import appstore from '../assets/appstore.png';
import mockupmd from '../assets/mockupmd.png';

function Get_it() {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center md:space-x-[5.72vw] mt-[85.866vw] md:mt-[2.08vw]'>
      <img src={mockup} alt='' className='hidden md:block' />
      <img
        src={mockupmd}
        alt=''
        className='md:hidden w-[51.73vw] h-[63.466vw]'
      />
      <div className='flex flex-col items-center md:items-start space-y-[1.6vw] md:space-y-[1.236vw]'>
        <h1 className='text-[19px] md:text-[3.255vw] font-[600]'>
          Download App
        </h1>
        <p className='text-[2.66vw] leading-[4.533vw] md:leading-[1.367vw] md:text-[0.976vw] font-[300] text-center md:text-left'>
          Renting has never been so easy, but now with RentalHub, it can be done
          in few mere taps. Download it now and get ready to become a part of
          this family, ASANI SY!
        </p>
        <div className='flex justify-center pt-[4.266vw] md:pt-0 space-x-[0.52vw] md:space-x-[0.71vw]'>
          <img
            src={google}
            alt=''
            className='w-[33.866vw] h-[10.133vw] md:w-[11.91vw] md:h-[3.51vw]'
          />
          <img
            src={appstore}
            alt=''
            className='w-[33.866vw] h-[10.133vw] md:w-[11.91vw] md:h-[3.51vw]'
          />
        </div>
      </div>
    </div>
  );
}

export default Get_it;
