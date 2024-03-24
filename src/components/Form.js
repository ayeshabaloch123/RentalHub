import React, { useState } from 'react';

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

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === '' || email === '' || message === '') {
      return;
    }

    try {
      const formRef = firebase.firestore().collection('forms');
      await formRef.add({
        name,
        email,
        message,
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div
      id='contact'
      className='mt-[17.866VW] md:mt-[13.746vw] -mx-[1.9vw] relative'
    >
      <div className='absolute top-[18.133VW] right-0 left-[1.333vw]  md:left-[36.84vw] md:right-[8.07vw] h-[105.46vw] md:h-[33.66vw] w-[88VW] md:w-[53.97vw] md:-top-[10.02vw] rounded-[4VW] md:rounded-[1.04vw] bg-[#F2F6FF] '>
        <form
          onSubmit={handleSubmit}
          className='mt-[5.33VW] md:mt-[4.23vw] md:ml-[2.53vw] '
        >
          <h1 className='hidden md:block text-[2.278vw] font-[500]'>
            Contact Form
          </h1>
          <div className='flex flex-col space-y-[5.866vw] md:space-y-0 md:flex-row md:space-x-[5.143vw] md:mt-[1.171vw]'>
            <div className='flex flex-col items-center justify-center space-y-[1.56vw]'>
              <div className='flex flex-col space-y-[0.52vw] md:space-y-[0.846vw] '>
                <label
                  htmlFor='name'
                  className='text-[2.933vw] md:text-[1.171vw] font-[300]'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={handleNameChange}
                  className='h-[10.66vw] md:h-[3.77vw] w-[83.2vw] md:w-[21.61vw] rounded-[1.066vw] md:rounded-[0.52vw] focus:outline-[#f5ad0d] pl-5'
                />{' '}
              </div>

              <div className='flex flex-col space-y-[0.52vw] md:space-y-[0.846vw] '>
                <label
                  htmlFor='email'
                  className='text-[2.933vw] md:text-[1.171vw] font-[300]'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                  className='h-[10.66vw] md:h-[3.77vw] w-[83.2vw] md:w-[21.61vw] rounded-[1.066vw] md:rounded-[0.52vw] focus:outline-[#f5ad0d] pl-5'
                />{' '}
              </div>
            </div>

            <div>
              <div className='flex flex-col space-y-[0.52vw] md:space-y-[0.846vw] ml-[16px] md:ml-0'>
                <label
                  htmlFor='message'
                  className='text-[2.933vw] md:text-[1.171vw] font-[300]'
                >
                  Message
                </label>
                <input
                  id='message'
                  name='message'
                  value={message}
                  onChange={handleMessageChange}
                  className='h-[144px] md:h-[11.588vw] w-[83.2vw] md:w-[21.61vw] rounded-[1.066vw] md:rounded-[0.52vw] focus:outline-[#f5ad0d] pl-5'
                />{' '}
              </div>
            </div>
          </div>
          {isSubmitted && (
            <p className='feedback-text animate-pulse text-[2.5vw] md:text-[1.1vw] pl-[4vw] pt-[3vw] md:pl-[0.2vw] md:pt-[1vw] text-[#f5ad0d] font-[600]'>
              Response Submitted successfully!
            </p>
          )}
          <div className='flex items-center justify-center md:justify-start'>
            <button
              type='submit'
              className='h-[8.266vw] md:h-[4.03vw] w-[21.33vw] md:w-[10.09vw] text-[2.4vw] md:text-[1.36vw] font-[500] bg-[#F5AD0D] rounded-[0.8vw] md:rounded-[0.716vw] mt-[5.33vw] md:mt-[2.08vw] text-white  group relative inline-flex items-center justify-center shadow-lg outline-none  transition-all duration-200 ease-out hover:text-yellow-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none'
            >
              {/* span::before */}
              <span
                className='absolute h-0 w-0.5 right-0 top-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:h-full'
                aria-hidden='true'
              />
              <span
                className='absolute left-0 bottom-0 bg-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full'
                aria-hidden='true'
              />
              Send
              {/* span::after */}
              <span
                className='absolute left-0 bottom-0 bg-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full'
                aria-hidden='true'
              />
              <span
                className='absolute w-0 h-0.5 right-0 top-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:w-full'
                aria-hidden='true'
              />
            </button>
          </div>
        </form>
      </div>
      <div className='pt-[4vw] h-[52.53vw] md:h-[18.16vw] md:py-[4.43vw] -mx-[5vw] md:mx-0 bg-[#F5AD0D]'>
        <div className='md:ml-[4.947vw] text-center md:text-left'>
          <h1 className='text-[5.06vw] md:text-[3.255vw] font-[500] '>
            Get in touch!
          </h1>
          <p className='mt-[2.4vw] md:mt-[0.846vw] text-[8px] md:text-[1.171vw] font-[300]'>
            Contact us for a quote, help or to join the team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
