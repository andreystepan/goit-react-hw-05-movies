import axios from 'axios';

const API_KEY = '1655efc44e2c2a44b1dc8c7538f09ed3';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getPopularMovies = async() => {
    const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`).then(data => data.data.results);
     return data;
}

export const getSearchMovies = async query => {
    const data = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
 return data.data;
}

export const getByIdMovies = async id => {
    const data = await axios.get(`movie/${id}?api_key=${API_KEY}`)
    return data.data;
}

export const getCreditsMovies = async id => {
    const data = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`)
    return data.data;
}

export const getReviewsMovies = async id => {
    const data = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return data.data;
}