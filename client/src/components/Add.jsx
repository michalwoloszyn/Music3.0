import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createAuctionRequest from '../api/createAuctionRequest';
import updateAuctionRequest from '../api/updateAuctionRequest';

const Add = ({
  walletAddress,
  id,
  editTitle,
  editAuthor,
  editPrice,
  title,
  setTitle,
  author,
  setAuthor,
  price,
  setPrice,
  editMode,
  setEditMode,
  setRefetch,
  refetch,
  selectedImage,
  setSelectedImage,
  selectedMusic,
  setSelectedMusic,
}) => {
  const queryClient = useQueryClient();

  const { mutate: createAuction } = useMutation((newAuction) =>
    createAuctionRequest(newAuction, {
      onSettled: () => {
        queryClient.invalidateQuerries('auctions');
      },
    })
  );

  const { mutate: updateAuction } = useMutation((auction) => {
    updateAuctionRequest(auction, {
      onSettled: () => {
        queryClient.invalidateQuerries('auctions');
      },
    });
  });
  const convertToBase64Music = async (file) => {
    const base64 = await convertToBase64Promise(file);
    setSelectedMusic(base64);
  };
  const convertToBase64 = async (file) => {
    const base64 = await convertToBase64Promise(file);
    setSelectedImage(base64);
  };
  //coverts an image file to base64 standard
  //returns a promise
  function convertToBase64Promise(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <>
      <div className='flex w-full justify-center items-center'>
        <div className=' text-white flex md:flex-row justify-center py-10 md:p-16 px-4 text-md w-10/12 items-center }'>
          <h3 className='text-2xl sm:text-3xl text-center'>
            Add new music for sale
          </h3>
        </div>
      </div>
      <div className='flex justify-center items-center pb-10 '>
        <form
          id='addAuction'
          onSubmit={(e) => {
            e.preventDefault();

            if (editMode) {
              updateAuction({
                id,
                title,
                author,
                price,
                editTitle,
                editAuthor,
                editPrice,
                selectedImage,
              });
            } else {
              createAuction({
                title,
                author,
                price,
                walletAddress,
                selectedImage,
                selectedMusic,
              });
            }
            setSelectedImage(null);
            setSelectedMusic(null);
            setTitle('');
            setAuthor('');
            setPrice('');
            setEditMode(false);
            setRefetch(true);
          }}
          className='buy-button rounded-lg w-9/12 md:w-1/2 lg:w-1/3 flex items-center justify-center pt-10 pb-5 flex-wrap'
        >
          <div className='border- border-solid border-2  w-[225px] h-[225px] flex items-center justify-center overflow-hidden'>
            <div className='justify-center flex items-center'>
              {selectedImage && (
                <div>
                  <img alt='' className='w-full h-full ' src={selectedImage} />
                </div>
              )}
              <label
                className='rounded-sm text-white text-xs border-white border-solid border-2 cursor-pointer absolute'
                for='imageUpload'
              >
                Upload cover photo
              </label>
              <input
                id='imageUpload'
                className='hidden'
                accept='image/*'
                type='file'
                name='myImage'
                onChange={(event) => {
                  convertToBase64(event.target.files[0]);
                }}
              />
            </div>
          </div>

          <div className='w-full flex items-center justify-center pt-5'>
            <label
              className={`rounded-sm text-white text-xs border-white border-solid border-2 cursor-pointer z-10 ${
                selectedMusic && 'opacity-0'
              }`}
              for='musicUpload'
            >
              Upload music file
            </label>

            <input
              id='musicUpload'
              className='hidden'
              accept='audio/*'
              type='file'
              name='myMusic'
              onChange={(event) => {
                convertToBase64Music(event.target.files[0]);
              }}
            />
            {selectedMusic && (
              <p className='text-white text-xs absolute '>
                {document.getElementById('musicUpload').files[0].name}
              </p>
            )}
          </div>
          <div className='flex w-3/5 flex-wrap items-center justify-center  pt-3'>
            <label
              for='title'
              className='text-white text-lg flex justify-start w-full pb-1'
            >
              Title
            </label>
            <input
              required
              id='title'
              className='border-2 border-solid border-white rounded-xl bg-transparent text-sm p-1 pl-2  flex text-white w-full'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              for='author'
              className='text-white text-lg flex justify-start w-full pb-1'
            >
              Author
            </label>
            <input
              required
              id='author'
              className='border-2 border-solid border-white rounded-xl bg-transparent text-sm p-1 pl-2  flex text-white w-full'
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label
              for='price'
              className='text-white text-lg flex justify-start w-full pb-1'
            >
              Price
            </label>
            <input
              required
              id='price'
              className='border-2 border-solid border-white rounded-xl bg-transparent text-sm p-1 pl-2  flex text-white w-full'
              type='text'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              type='submit'
              form='addAuction'
              value='Submit'
              className=' buy-button px-6 py-2 rounded-xl cursor-pointer mt-4 text-white text-xs'
            >
              {editMode ? <div>Save</div> : <div>Put for sale</div>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Add;
