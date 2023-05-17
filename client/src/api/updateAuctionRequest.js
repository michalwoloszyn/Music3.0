const API_URL = `http://localhost:8080`;

export default (auction) => {
  console.log(auction);
  return fetch(`${API_URL}/sell/${auction.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: auction.title,
      author: auction.author,
      price: auction.price,
      img: auction.selectedImage,
      music: auction.selectedMusic,
    }),
  }).then((response) => response.json());
};
