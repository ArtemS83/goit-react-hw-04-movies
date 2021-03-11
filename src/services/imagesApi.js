import axios from 'axios';

const key = '19717497-dac00bc00e9230cbef98621a0';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `?q=${searchQuery}&per_page=${perPage}&page=${currentPage}&image_type=photo&orientation=horizontal&key=${key}`,
    )
    .then(response => response.data);
};

export default { fetchImages };
