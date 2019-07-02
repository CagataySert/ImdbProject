import fetch from 'isomorphic-unfetch'
import { KEY } from './constants/constants.js';

class LocalStorageApi {

    addFilmToFavorite = (title, year, poster, filmId, imdbRating) => {
        return new Promise((resolve, reject) => {

            const response = localStorage.getItem(KEY);

            if (!!response) {

                let filmArray = JSON.parse(response);
                filmArray.push({ title, year, poster, filmId, imdbRating });


                localStorage.setItem(KEY, JSON.stringify(filmArray));
                resolve();
            }
            else {
                localStorage.setItem(KEY, JSON.stringify([{ title, year, poster, filmId, imdbRating }]));
                resolve();
            }
        });
    }

    getFavorites = () => {
        return new Promise((resolve, reject) => {
            const response = localStorage.getItem(KEY);
            const filmArray = JSON.parse(response);

            !!response === true
                ? resolve(filmArray)
                : resolve(null);
        });
    }

}

const local_api = new LocalStorageApi();
export default local_api;