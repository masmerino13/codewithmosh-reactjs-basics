import axios from 'axios';
import config from '../config';
import http from './httpService';

const endpoint = `${config.endpoint}/movies`;

const getMovies = async () => {
    const { data } = await axios(endpoint);
    return data;
}

const saveMovie = async ({ _id, title, genreId, numberInStock, dailyRentalRate }) => {
    const action = _id === 'new' ? 'post' : 'put';
    const actionUrl = _id === 'new' ? endpoint : `${endpoint}/${_id}`;

    const { data } = await http[action](actionUrl, {
        title,
        numberInStock,
        dailyRentalRate,
        genreId,
    });

    return data;
}

const getMovie = async (movieId) => {
    const { data } = await http.get(`${endpoint}/${movieId}`);

    return data;
}

const deleteMovie = async(movieId) => {
    const { data } = await http.delete(`${endpoint}/${movieId}`);

    return data;
}

export {
    getMovies,
    saveMovie,
    getMovie,
    deleteMovie
}