import axios from 'axios';

export async function getImage(query, page) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '35851703-1327ea85a263036dc5c6068c0';
  const options = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  };

  const response = await axios.get(URL, options);
  return response;
}
