import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

const searchMovies = async (query) => {
  try {
    const response = await axiosInstance.get('/movies/search', {
      params: {
        title: query,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export { searchMovies };
