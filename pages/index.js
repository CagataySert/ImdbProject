import React from 'react'
import { inject, observer } from 'mobx-react'
import '../styles/style.scss'
import local_api from '../serverApi_LocalStorage';
import FilmBox from '../components/FilmBox';

@inject('store')
@observer
class Page extends React.Component {

    handleAddFavorite = (event, title, year, poster, filmId, imdbRating) => {
        console.log(title, year, poster, filmId, imdbRating);

        local_api.addFilmToFavorite(title, year, poster, filmId, imdbRating)
            .then(() => console.log('eklendi'))
            .catch(error => alert('An Error Occured'));

        event.target.className = 'fas fa-star favorite-button';
    }
    render() {
        const films = this.props.store.films;
        return (
            < div className='container' >
                {
                    this.props.store.films.length === undefined
                        ? <div className='searchSomethingDiv'><h2>Let's search something!</h2></div>
                        : (
                            <div className='row'>
                                {
                                    films.map((film, index) => (
                                        <FilmBox
                                            handleAddFavorite={this.handleAddFavorite}
                                            key={index} filmId={film.imdbID}
                                            title={film.Title}
                                            year={film.Year}
                                            poster={film.Poster}
                                            isFavorited={false}
                                            imdbRating={film.imdbRating}
                                        />
                                    ))
                                }
                            </div>

                        )
                }
            </div>
        )
    }
}

export default Page