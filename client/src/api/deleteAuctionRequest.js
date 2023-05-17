const API_URL = `http://localhost:8080`;

export default (auction) => {
  console.log('-----------------------------');
  console.log(auction);
  return fetch(`${API_URL}/sell/${auction}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};
