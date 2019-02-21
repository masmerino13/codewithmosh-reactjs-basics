import axios from 'axios';
import config from '../config';

const endpoint = `${config.endpoint}/movies`;

const getMovies = async () => {
    const { data } = await axios(endpoint);
    return data;
}

const saveMovie = async ({ _id, title, genreId, numberInStock, dailyRentalRate }) => {
    const action = _id === 'new' ? 'post' : 'put';

    console.log('action', action);

    const { data } = await axios[action](endpoint, {
        title,
        numberInStock,
        dailyRentalRate,
        genreId,
    });

    return data;
}

const getMovie = async (movieId) => {
    const { data } = await axios.get(`${endpoint}/${movieId}`);

    return data;
}

export {
    getMovies,
    saveMovie,
    getMovie
}