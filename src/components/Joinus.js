import React, { useState } from 'react';
import logo from '../assets/footerLogo.png';
import facebook from '../assets/ffacebook.png';
import insta from '../assets/finsta.png';
import linkedin from '../assets/flinkedin.png';
import twitter from '../assets/ftwitter.png';

import firebase from 'firebase/compat/app'; // Change the import statement
import 'firebase/compat/firestore'; // Add this import statement for Firestore

const firebaseConfig = {
  apiKey: 'AIzaSyBEUyQs_suSnXIs_sfaU6BBumt0Pe91A8s',
  authDomain: 'rentalhub-83a6e.firebaseapp.com',
  projectId: 'rentalhub-83a6e',
  storageBucket: 'rentalhub-83a6e.appspot.com',
  messagingSenderId: '744314700297',
  appId: '1:744314700297:web:39866aa4113e7757426ed8',
};

firebase.initializeApp(firebaseConfig);

function Joinus() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const emailsRef = firebase.firestore().collection('emails');
      await emailsRef.add({
        email: email,
      });
      setIsSubmitted(true);
      setEmail('');
      setSubscriptionMessage('You have successfully subscribed!');
      setTimeout(() => setSubscriptionMessage(''), 5000); // Hide the message after 3 seconds
    } catch (error) {
      console.error('Error adding email to Firestore: ', error);
      // Handle error
    }
  };

  return (
    <div className='bg-white '>
      <div className='h-[13.02vw] bg-[#F5AD0D] -mx-[1.9vw]  relative hidden md:block'>
        <div className='flex flex-col items-center justify-center space-y-[0.65vw] pt-[0.64vw]'>
          <h1 className='text-[3.255vw] font-[500]'>Join Us</h1>
          <p className='text-[1.171vw] font-[300]'>
            Stay up-to-date with our new openings, upcoming events and
            promotions
          </p>
          <div className='absolute top-[9.17vw] w-[65.1vw] flex items-center justify-between'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              className='w-[51.43vw] h-[5.729vw] focus:outline-black rounded-[1.302vw] placeholder:text-[1.171vw] placeholder:font-[300] shadow-md shadow-[#c7c7c7] focus:outline-none pl-5'
              placeholder='Write your email address'
            />

            <button
              type='submit'
              onClick={handleSubmit}
              className='w-[12.955vw] h-[5.729vw] rounded-[1.302vw] text-[1.43vw] font-[500] text-white shadow-md shadow-[#c7c7c7]  group relative inline-flex items-center justify-center outline-none bg-gradient-to-br from-black to-black text-lg transition-all duration-200 ease-out hover:text-black hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none'
            >
              Sign me up!
            </button>
          </div>
        </div>
      </div>

      {subscriptionMessage && (
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black p-4 rounded-md text-white'>
          {subscriptionMessage}
        </div>
      )}

      <div className='-mt-[6.51vw] md:mt-[6.51vw] md:ml-[1.106vw]'>
        <div className='flex items-center justify-center md:justify-start mb-8 md:mb-0'>
          <img
            src={logo}
            alt=''
            className='w-[34.66vw] h-[9.33vw] md:w-[11.71vw] md:h-[3.19vw]'
          />
        </div>
        <div className='mt-[0.846vw] hidden  items-center justify-center space-x-[4.492vw]'>
          <div className='flex flex-col items-start justify-center space-y-[0.651vw] '>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                Our Teams
              </li>
            </p>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                About Us
              </li>
            </p>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                Contact Us
              </li>
            </p>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                Privacy Policy
              </li>
            </p>
          </div>

          <div className='flex flex-col items-start justify-center space-y-[0.651vw]'>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                Our Teams
              </li>
            </p>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                About Us
              </li>
            </p>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                Contact Us
              </li>
            </p>
            <p>
              <li className='text-[0.781vw] md:text-[1.367vw] font-[300]'>
                Privacy Policy
              </li>
            </p>
          </div>

          <div className='hidden md:flex flex-col items-start justify-center space-y-[0.651vw]'>
            <p>
              <li className='text-[1.367vw] font-[300]'>Our Teams</li>
            </p>
            <p>
              <li className='text-[1.367vw] font-[300]'>About Us</li>
            </p>
            <p>
              <li className='text-[1.367vw] font-[300]'>Contact Us</li>
            </p>
            <p>
              <li className='text-[1.367vw] font-[300]'>Privacy Policy</li>
            </p>
          </div>
        </div>
        <h1 className='hidden md:block mt-[30.66vwvw] md:mt-[4.231vw] text-[1.888vw] font-[600] text-center'>
          Get Connected
        </h1>
        <div className='mt-[30.66vw] md:mt-[27px] flex items-center justify-center space-x-[5.33vw] md:space-x-[1.822vw]'>
          <a href='http://facebook.com'>
            <img
              src={facebook}
              alt=''
              className='w-[13.33vw] h-[13.33vw] md:w-[4.622vw] md:h-[4.622vw] hover:scale-105 duration-200'
            />
          </a>
          <a href='http://instagram.com'>
            <img
              src={insta}
              alt=''
              className='w-[13.33vw] h-[13.33vw] md:w-[4.622vw] md:h-[4.622vw] hover:scale-105 duration-200'
            />
          </a>
          <a href='https://lnkd.in'>
            <img
              src={linkedin}
              alt=''
              className='w-[13.33vw] h-[13.33vw] md:w-[4.622vw] md:h-[4.622vw] hover:scale-105 duration-200'
            />
          </a>
          <a href='http://twitter.com'>
            <img
              src={twitter}
              alt=''
              className='w-[13.33vw] h-[13.33vw] md:w-[4.622vw] md:h-[4.622vw] hover:scale-105 duration-200'
            />
          </a>
        </div>
      </div>
      <div className='bg-[#F5AD0D] -mx-[7vw] md:-mx-[1.9vw] mt-[3.06vw]'>
        <h1 className='text-[4.8vw] md:text-[1.171vw] font-[500] text-center pt-[1.497vw]'>
          Crafted with ♥ in Pakistan
        </h1>
        <p className='text-[3.733vw] md:text-[0.911vw] font-[400] text-center pb-[1.562vw]'>
          ©2022-2023 RentalHub All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Joinus;
