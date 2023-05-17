import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll';

const Welcome = () => {
  return (
    <>
      <div className='flex w-full justify-center items-center'>
        <div className='flex md:flex-row justify-center pt-12 md:pt-24 px-4 w-11/12 '>
          <h1 className='text-3xl sm:text-5xl text-white  text-center leading-snug sm:leading-snug'>
            Discover, collect and sell rare NFTs. The gateway to new era of
            music.
          </h1>
        </div>
      </div>
      <div className=' text-white flex md:flex-row justify-center gap-x-12 py-10 md:p-20  px-4 text-md'>
        <LinkRoll
          to={'Auctions'}
          spy={true}
          smooth={true}
          offset={200}
          duration={500}
        >
          <button
            type='button'
            className=' gradient-button2 p-3 md:px-10 rounded-lg cursor-pointer'
          >
            Explore
          </button>
        </LinkRoll>
        <Link to={'/Sell'}>
          <button
            type='button'
            className=' gradient-button2 p-3 pr-4 md:px-10 rounded-lg cursor-pointer '
          >
            Create
          </button>
        </Link>
      </div>
    </>
  );
};
export default Welcome;
