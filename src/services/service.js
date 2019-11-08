import axios from 'axios';

const fetcher = (page, query = 'cat') => {
  const baseURL = `https://pixabay.com/api/?key=14164128-6f513c86b72b6001f0cc0401b&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12`;
  return axios.get(baseURL).then(data => data.data.hits);
};

export default fetcher;
