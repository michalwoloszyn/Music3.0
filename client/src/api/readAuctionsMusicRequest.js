const API_URL = `http://localhost:8080`;

export default (id) => {
  console.log(`${id}`);
  return fetch(`${API_URL}/home/${id}`, {
    method: 'GET',
  }).then((response) => response.json());
};
