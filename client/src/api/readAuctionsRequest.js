const API_URL = `http://localhost:8080`;

export default (walletAddress) => {
  if (walletAddress.queryKey[1]) {
    console.log('wallet address');
    return fetch(`${API_URL}/home/${walletAddress.queryKey[1]}`, {
      method: 'GET',
    }).then((response) => response.json());
  } else {
    console.log('no wallet address');
    return fetch(`${API_URL}/home`, {
      method: 'GET',
    }).then((response) => response.json());
  }
};
