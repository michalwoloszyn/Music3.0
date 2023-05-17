const API_URL = `http://localhost:8080`;

export default (auction) => {
  // console.log(
  //   JSON.stringify({
  //     name: auction.title,
  //     author: auction.author,
  //     price: auction.price,
  //     address: auction.walletAddress,
  //     img: auction.selectedImage,
  //     music: auction.selectedMusic,
  //   })
  // );
  return fetch(`${API_URL}/sell`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: auction.title,
      author: auction.author,
      price: auction.price,
      address: auction.walletAddress,
      img: auction.selectedImage,
      music: auction.selectedMusic,
    }),
  }).then((response) => response.json());
};
