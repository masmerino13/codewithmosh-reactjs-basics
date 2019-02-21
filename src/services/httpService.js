import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logService';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    console.log('e', error.response, expectedError);

    if(expectedError) {
        toast.error('Something went wrong, Try later.');
        logger.log(error);
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}