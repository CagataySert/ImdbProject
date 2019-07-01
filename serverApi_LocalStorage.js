import fetch from 'isomorphic-unfetch'
import { KEY } from './constants/constants.js';

class LocalStorageApi {

    addFilmToFavorite = (filmId) => {
        return new Promise((resolve, reject) => {

            const response = localStorage.getItem(KEY);

            if (!!response) {
                let filmArray = JSON.parse(response);
                filmArray.push(filmId);

                localStorage.setItem(KEY, JSON.stringify(filmArray));
                resolve();
            }
            else {
                localStorage.setItem(KEY, JSON.stringify([filmId]));
                resolve();
            }
        });
    }

}

const local_api = new LocalStorageApi();
export default local_api;