import axios from 'axios';
import config from '../config';

const getGenres = async () => {
    const { data } = await axios.get(`${config.endpoint}/genres`);
    return data;
}

export {
    getGenres
}