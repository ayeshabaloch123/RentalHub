import React from 'react';
import founder from '../assets/ayesha.png';
import insta from '../assets/insta.png';
import fb from '../assets/facebook.png';
import hfb from '../assets/hfacebook.png';
import hinsta from '../assets/hinsta.png';
import htwitter from '../assets/htwitter.png';
import hlinkedin from '../assets/hlinkedin.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import cofounder from '../assets/shiza.png';
import ceo from '../assets/hira.png';
import cto from '../assets/rabi.png';
import cmo from '../assets/rabi.png';
import cio from '../assets/cio.png';
import ctio from '../assets/ctio.png';
import cso from '../assets/cso.png';
import int1 from '../assets/int1.png';
import int2 from '../assets/int2.png';
import int3 from '../assets/int3.png';

function Team() {
  return (
    <div id='team'>
      <button className='h-[6.933vw] md:h-[3.38vw] font-[500] text-white w-[20.266vw] md:w-[10.15vw] rounded-[12.533vw] text-[2.4vw] md:text-[1.171vw] bg-[#F5AD0D]'>
        Team
      </button>
      <h1 className='text-[5.06vw] font-[500] md:text-[2.994vw] mt-[0.97vw] font-hind  tracking-tight leading-tight'>
        Meet Our Team
      </h1>
      <div className='mt-[10.133vw] md:mt-[3.125vw] md:ml-[3.19vw] space-y-[10.66vw] md:space-y-[2.799vw]'>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-[10.666vw] md:space-y-0 md:space-x-[3.255vw] '>
          {/*Card 01*/}
          <div className='flex flex-row md:flex-col items-center justify-center space-x-[2.665vw] md:space-x-0  md:space-y-[1.171vw] w-[326px] h-[151px] md:h-[23.43vw] md:w-[18.22vw] bg-white shadow-2xl'>
            <img
              src={founder}
              alt=''
              className='w-[30.93vw] h-[31.2vw] md:w-[13.476vw] md:h-[13.411vw]'
            />
            <div className='space-y-[3.466vw] md:space-y-0'>
              <div className='text-left md:text-center md:mb-[1.236vw]'>
                <h1 className='text-[5.33vw] md:text-[1.302vw] font-[600]'>
                  Ayesha Ali
                </h1>
                <p className='text-[3.4666vw] md:text-[0.846vw] font-[400]'>
                  Developer
                </p>
              </div>
              <div className='flex items-center justify-center space-x-[0.745vw]'>
                <a href=''>
                  <img
                    src={fb}
                    alt='fb'
                    className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                  />
                </a>
                <img
                  src={insta}
                  alt='insta'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={linkedin}
                  alt='ln'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={twitter}
                  alt='twitter'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
              </div>
            </div>
          </div>
          {/*Card 02*/}
          <div className='flex flex-row md:flex-col items-center justify-center space-x-[2.665vw] md:space-x-0  md:space-y-[1.171vw] w-[326px] h-[151px] md:h-[23.43vw] md:w-[18.22vw] bg-white shadow-2xl'>
            <img
              src={cofounder}
              alt=''
              className='w-[30.93vw] h-[31.2vw] md:w-[13.476vw] md:h-[13.411vw]'
            />
            <div className='space-y-[3.466vw] md:space-y-0'>
              <div className='text-left md:text-center md:mb-[1.236vw]'>
                <h1 className='text-[5.33vw] md:text-[1.302vw] font-[600]'>
                  Shiza
                </h1>
                <p className='text-[3.4666vw] md:text-[0.846vw] font-[400]'>
                  Graphic Designer
                </p>
              </div>
              <div className='flex items-center justify-center space-x-[0.745vw]'>
                <img
                  src={fb}
                  alt='fb'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={insta}
                  alt='insta'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={linkedin}
                  alt='ln'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={twitter}
                  alt='twitter'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
              </div>
            </div>
          </div>
          {/*Card 03*/}
          <div className='flex flex-row md:flex-col items-center justify-center space-x-[2.665vw] md:space-x-0  md:space-y-[1.171vw] w-[326px] h-[151px] md:h-[23.43vw] md:w-[18.22vw] bg-white shadow-2xl'>
            <img
              src={ceo}
              alt=''
              className='w-[30.93vw] h-[31.2vw] md:w-[13.476vw] md:h-[13.411vw]'
            />
            <div className='space-y-[3.466vw] md:space-y-0'>
              <div className='text-left md:text-center md:mb-[1.236vw]'>
                <h1 className='text-[5.33vw] md:text-[1.302vw] font-[600]'>
                  Hira Amir
                </h1>
                <p className='text-[3.4666vw] md:text-[0.846vw] font-[400]'>
                  UI/UX Designer
                </p>
              </div>
              <div className='flex items-center justify-center space-x-[0.745vw]'>
                <img
                  src={fb}
                  alt='fb'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={insta}
                  alt='insta'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={linkedin}
                  alt='ln'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
                <img
                  src={twitter}
                  alt='twitter'
                  className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw]'
                />
              </div>
            </div>
          </div>
          {/*Card 04*/}
          <div className='flex flex-row md:flex-col items-center justify-center space-x-[2.665vw] md:space-x-0  md:space-y-[1.171vw] w-[326px] h-[151px] md:h-[23.43vw] md:w-[18.22vw] bg-white shadow-2xl'>
            <img
              src={cto}
              alt=''
              className='w-[30.93vw] h-[31.2vw] md:w-[13.476vw] md:h-[13.411vw]'
            />
            <div className='space-y-[3.466vw] md:space-y-0'>
              <div className='text-left md:text-center md:mb-[1.236vw]'>
                <h1 className='text-[5.33vw] md:text-[1.302vw] font-[600]'>
                  Rabia Noor
                </h1>
                <p className='text-[3.4666vw] md:text-[0.846vw] font-[400]'>
                  Content Writer
                </p>
              </div>
              <div className='flex items-center justify-center space-x-[0.745vw]'>
                <a href='https://www.facebook.com/profile.php?id=100008424043672&mibextid=ZbWKwL'>
                  <img
                    src={fb}
                    alt='fb'
                    className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw] hover:scale-110 duration-200'
                  />
                </a>
                <a href='https://www.instagram.com/naveed_kk/'>
                  <img
                    src={insta}
                    alt='insta'
                    className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw] hover:scale-110 duration-200'
                  />
                </a>
                <a href='https://www.linkedin.com/in/naveed-kaimkhani-499450220'>
                  <img
                    src={linkedin}
                    alt='ln'
                    className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw] hover:scale-110 duration-200'
                  />
                </a>
                <a href=''>
                  <img
                    src={twitter}
                    alt='twitter'
                    className='w-[7.2vw] h-[7.2vw] md:w-[1.888vw] md:h-[1.888vw] hover:scale-110 duration-200'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
