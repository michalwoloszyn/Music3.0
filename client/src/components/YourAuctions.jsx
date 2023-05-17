import readAuctionsRequest from '../api/readAuctionsRequest';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';
import deleteAuctionRequest from '../api/deleteAuctionRequest';

const YourAuctions = ({
  walletAddress,
  setId,
  setEditTitle,
  setEditAuthor,
  setEditPrice,
  setTitle,
  setAuthor,
  setPrice,
  setEditMode,
  refetch,
  setRefetch,
  setSelectedImage,
  selectedImage,
  setSelectedMusic,
  setCurrentlyPlayingMusic,
  setCurrentlyPlayingImage,
  setCurrentlyPlayingTitle,
  setCurrentlyPlayingAuthor,
}) => {
  const { isLoading, data: auctions } = useQuery(
    ['auctions', walletAddress],
    readAuctionsRequest,
    {
      refetchInterval: () => (refetch ? 1000 : false),
      onSettled: () => {
        setRefetch(false);
      },
    }
  );

  const { mutate: deleteAuction } = useMutation((auction) =>
    deleteAuctionRequest(auction, {
      onSettled: () => {
        queryClient.invalidateQuerries('auctions');
      },
    })
  );

  return (
    <>
      <div id='Auctions' className='flex w-full justify-center items-center'>
        <div className='flex md:flex-row justify-start pt-10  px-4 w-10/12 '>
          <h2 className='text-2xl sm:text-4xl text-white  text-center leading-snug sm:leading-snug'>
            Your auctions
          </h2>
        </div>
      </div>

      <div className='flex w-full justify-center items-center'>
        <div className=' text-white flex flex-col md:flex-row py-2 md:p-2 px-4 text-center  w-10/12 flex-wrap'>
          {walletAddress && isLoading && (
            <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
              {' '}
              <ClipLoader size={100} />
            </div>
          )}
          {walletAddress &&
            !isLoading &&
            auctions.map((auction) => (
              <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                <div className='w-[270px]' key={auction._id}>
                  <img className='h-[270px] w-[270px]' src={auction.img}></img>
                  <h4 className='pt-5 text-2xl'>{auction.name}</h4>
                  <h5 className='pt-1'>Created by: {auction.author}</h5>
                  <div className='text-left pt-1 flex mx-3 justify-between'>
                    <h5 className='items-center '>{auction.price}ETH</h5>
                    <button
                      // key={auction._id}
                      onClick={() => {
                        deleteAuction(auction._id);
                      }}
                      type='button'
                      className=' buy-button px-3 py-1 mx-2 rounded-xl cursor-pointer '
                    >
                      Delete
                    </button>
                    <button
                      key={auction._id}
                      onClick={() => {
                        setEditMode(true);
                        setId(auction._id);
                        setEditAuthor(auction.author);
                        setEditTitle(auction.name);
                        setEditPrice(auction.price);
                        setTitle(auction.name);
                        setAuthor(auction.author);
                        setPrice(auction.price);
                        setSelectedImage(auction.img);
                        console.log(auction.img);
                        console.log(selectedImage);
                      }}
                      type='button'
                      className=' buy-button px-6 py-1 rounded-xl cursor-pointer '
                    >
                      Edit
                    </button>
                  </div>
                  <audio controls className='py-2'>
                    <source type='audio/mpeg' src={auction.music}></source>
                  </audio>
                </div>
              </div>
            ))}
          {/* {isLoading ? (
            <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
              {' '}
              <ClipLoader size={100} />
            </div>
          ) : (
            auctions.map((auction) => (
              <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                <div key={auction._id}>
                  <img
                    className='w-full pt-5'
                    src='https://picsum.photos/200/200?random=1'
                  ></img>
                  <h4 className='pt-5 text-2xl'>{auction.name}</h4>
                  <h5 className='pt-1'>Created by: {auction.author}</h5>
                  <div className='text-left pt-1 flex mx-3 justify-between'>
                    <h5 className='items-center '>{auction.price}ETH</h5>
                    <button
                      type='button'
                      className=' buy-button px-12 py-1 rounded-xl cursor-pointer '
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          )} */}
        </div>
      </div>
    </>
  );
};
export default YourAuctions;
