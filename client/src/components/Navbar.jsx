import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiFillWindows, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll';

function delayedScroll() {
  function scroll() {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }
  setTimeout(scroll, 100);
}

function shortenAddress(address) {
  return `${address.slice(0, 7)}...${address.slice(address.length - 4)}`;
}

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <Link
      onClick={title == 'Market' && delayedScroll}
      to={title == 'Market' ? 'Home' : title}
    >
      {title}
    </Link>
  </li>
);

const Navbar = ({ walletAddress, setWalletAddress }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum != 'undefined') {
      //metamask installed
      console.log('installed');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setWalletAddress(accounts[0]);
    }
  };

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='text-3xl text-white md:flex-[0.15]  flex-initial justify-center items-center'>
        <Link to={'Home'}>Logo</Link>
      </div>
      <ul className=' md:flex-[0.7] text-white md:flex hidden list-none flex-row justify-start items-center flex-initial'>
        {['Home', 'Market', 'Sell'].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      {!walletAddress && (
        <button onClick={connectWallet}>
          <div className='text-white text-sm gradient-button py-2 px-7 mx-4 rounded-lg cursor-pointer'>
            Connect Wallet
          </div>
        </button>
      )}
      {walletAddress && (
        <div className='text-white text-xs'>
          Connected wallet: {shortenAddress(walletAddress)}
        </div>
      )}

      <div className='flex relative'>
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className='text-x1 w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Home', 'Market', 'Sell'].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops='my-2 text-lg'
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
