import { useState } from 'react';

const Footer = ({
  setCurrentlyPlayingMusic,
  currentlyPlayingMusic,
  setCurrentlyPlayingImage,
  currentlyPlayingImage,
  setCurrentlyPlayingTitle,
  currentlyPlayingTitle,
  setCurrentlyPlayingAuthor,
  currentlyPlayingAuthor,
}) => {
  const audio = document.getElementById('audio');

  return (
    <footer className='bg-[#041938] col-span-6 p-4 grid grid-cols-3 gap-6'>
      <div className='flex items-center'>
        <img
          className='h-14 w-14 mr-4 flex-shrink-0'
          src={currentlyPlayingImage}
          alt=''
        />
        <div className='mr-4'>
          <div className='text-sm text-white text-line-clamp-1 font-light'>
            {currentlyPlayingTitle}
          </div>
          <div className='text-xs text-gray-100 text-line-clamp-1'>
            <span> {currentlyPlayingAuthor}</span>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center justify-center mb-3'>
          {/* previous song button */}
          {/* <button className='w-5 h-5 text-gray-100 mr-6 '>
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M4 5h3v10H4V5zm12 0v10l-9-5 9-5z' />
            </svg>
          </button> */}
          {/* <button
            onClick={() => {
              console.log(audio.duration);
              console.log('m:' + (parseInt(audio.duration / 60) % 60));
              console.log('s:' + parseInt(audio.duration % 60));
            }}
            className='w-8 h-8 border border-gray-300 rounded-full flex text-gray-100 mr-6'
          >
            <svg
              className='fill-current h-5 w-5 m-auto'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M5 4h3v12H5V4zm7 0h3v12h-3V4z' />
            </svg>
          </button> */}
          {/* next song button */}
          {/* <button className=' w-5 h-5 text-gray-100 mr-6'>
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M13 5h3v10h-3V5zM4 5l9 5-9 5V5z' />
            </svg>
          </button> */}
        </div>

        <audio
          controls
          controlsList='nodownload noplaybackrate'
          src={currentlyPlayingMusic}
          id='audio'
        >
          Your browser does not support the <code>audio</code> element.
        </audio>

        {/* <div className='flex items-center'>
          <span className='text-xs text-gray-100 font-light'>4:18</span>
          <div className='overflow-hidden relative flex-1 mx-2 rounded'>
            <div className='border-b-4 border-gray-400 rounded'></div>
            <div className='absolute inset-x-0 top-0 -translate-x-48 border-b-4 border-gray-100 rounded transform hover:border-green-200'></div>
          </div>
          <span className='text-xs text-gray-100 font-light'>
            {currentlyPlayingMusic
              ? parseInt((audio.duration / 60) % 60)
              : '0:00'}
            {currentlyPlayingMusic && ':' + parseInt(audio.duration % 60)}
          </span>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;
