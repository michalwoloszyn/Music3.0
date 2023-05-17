import {
  Navbar,
  Footer,
  Welcome,
  Loader,
  Auctions,
  YourAuctions,
  Add,
} from './components';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [currentlyPlayingMusic, setCurrentlyPlayingMusic] = useState('');
  const [currentlyPlayingImage, setCurrentlyPlayingImage] = useState('');
  const [currentlyPlayingTitle, setCurrentlyPlayingTitle] = useState('');
  const [currentlyPlayingAuthor, setCurrentlyPlayingAuthor] = useState('');

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
        />
        <Routes>
          <Route
            path='/'
            element={[
              <Welcome />,
              <Auctions
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
              />,
              <Footer
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                currentlyPlayingMusic={currentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                currentlyPlayingImage={currentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                currentlyPlayingTitle={currentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
                currentlyPlayingAuthor={currentlyPlayingAuthor}
              />,
            ]}
          />
          <Route
            path='/home'
            element={[
              <Welcome />,
              <Auctions
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
              />,
              <Footer
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                currentlyPlayingMusic={currentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                currentlyPlayingImage={currentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                currentlyPlayingTitle={currentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
                currentlyPlayingAuthor={currentlyPlayingAuthor}
              />,
            ]}
          />
          <Route
            path='/home#Auctions'
            element={[
              <Welcome />,
              <Auctions
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
              />,
              <Footer
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                currentlyPlayingMusic={currentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                currentlyPlayingImage={currentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                currentlyPlayingTitle={currentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
                currentlyPlayingAuthor={currentlyPlayingAuthor}
              />,
            ]}
          />
          <Route
            path='/sell'
            element={[
              <YourAuctions
                walletAddress={walletAddress}
                setEditTitle={setEditTitle}
                setEditAuthor={setEditAuthor}
                setEditPrice={setEditPrice}
                setId={setId}
                setTitle={setTitle}
                setAuthor={setAuthor}
                setPrice={setPrice}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
                setEditMode={setEditMode}
                refetch={refetch}
                setRefetch={setRefetch}
                setSelectedMusic={setSelectedMusic}
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
              />,
              <Add
                walletAddress={walletAddress}
                editTitle={editTitle}
                editAuthor={editAuthor}
                editPrice={editPrice}
                editMode={editMode}
                setEditMode={setEditMode}
                id={id}
                title={title}
                setTitle={setTitle}
                setAuthor={setAuthor}
                setPrice={setPrice}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
                author={author}
                price={price}
                refetch={refetch}
                setRefetch={setRefetch}
                selectedMusic={selectedMusic}
                setSelectedMusic={setSelectedMusic}
              />,
              <Footer
                setCurrentlyPlayingMusic={setCurrentlyPlayingMusic}
                currentlyPlayingMusic={currentlyPlayingMusic}
                setCurrentlyPlayingImage={setCurrentlyPlayingImage}
                currentlyPlayingImage={currentlyPlayingImage}
                setCurrentlyPlayingTitle={setCurrentlyPlayingTitle}
                currentlyPlayingTitle={currentlyPlayingTitle}
                setCurrentlyPlayingAuthor={setCurrentlyPlayingAuthor}
                currentlyPlayingAuthor={currentlyPlayingAuthor}
              />,
            ]}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
