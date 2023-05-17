import readAuctionsRequest from '../api/readAuctionsRequest';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

const Auctions = ({
  setCurrentlyPlayingMusic,
  setCurrentlyPlayingImage,
  setCurrentlyPlayingTitle,
  setCurrentlyPlayingAuthor,
}) => {
  const { isLoading, data: auctions } = useQuery(
    'auctions',
    readAuctionsRequest
  );

  return (
    <>
      <div id='Auctions' className='flex w-full justify-center items-center'>
        <div className='flex md:flex-row justify-center pt-12 md:pt-60  px-4 w-11/12 '>
          <h2 className='text-2xl sm:text-4xl text-white  text-center leading-snug sm:leading-snug'>
            Live auctions
          </h2>
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className=' text-white flex md:flex-row justify-center py-10 md:p-16 px-4 text-md w-10/12 items-center'>
          <h3 className='text-xl sm:text-2xl text-center'>
            All currently live auctions created by the users. Help us build web3
            music innovations in ways the world has never seen before.
          </h3>
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className=' text-white flex flex-col md:flex-row py-10 md:p-16 px-4 text-center  w-10/12 flex-wrap'>
          {isLoading ? (
            <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
              {' '}
              <ClipLoader size={100} />
            </div>
          ) : (
            auctions.map((auction) => (
              <div className='min-w-[270px] w-full md:w-1/2 lg:w-1/4 p-4 '>
                <div className='w-[270px]' key={auction._id}>
                  <div className='relative '>
                    <button
                      onClick={() => {
                        setCurrentlyPlayingMusic(auction.music);
                        setCurrentlyPlayingImage(auction.img);
                        setCurrentlyPlayingTitle(auction.name);
                        setCurrentlyPlayingAuthor(auction.author);
                      }}
                      className='absolute bottom-0 left-0 h-[270px] w-full opacity-70'
                    >
                      <svg
                        className='display:block m-auto'
                        fill='#000000'
                        height='150px'
                        width='150px'
                        version='1.1'
                        id='Capa_1'
                        viewBox='0 0 490 490'
                      >
                        <path d='M0.665,0v490l488.669-245L0.665,0z M15.977,24.806L455.183,245L15.977,465.208V24.806z' />
                      </svg>
                    </button>
                    <img
                      className=' h-[270px] w-[270px]'
                      src={auction.img}
                    ></img>
                  </div>

                  <h4 className='pt-5 text-2xl'>{auction.name}</h4>
                  <h5 className='pt-1'>Created by: {auction.author}</h5>
                  <div className='text-left pt-1 flex mx-3 justify-between'>
                    <h5 className='items-center '>{auction.price}ETH</h5>
                    <button
                      type='button'
                      className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img
              className='w-full pt-5'
              src='https://picsum.photos/200/200?random=1'
            ></img>
            <h4 className='pt-5 text-2xl'>Name of the nft</h4>
            <h5 className='pt-1'>Created by: Antonio Morales</h5>
            <div className='text-left pt-1 flex mx-3 justify-between'>
              <h5 className='items-center '>0.25ETH</h5>
              <button
                type='button'
                className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
              >
                Buy
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Auctions;
