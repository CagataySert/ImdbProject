import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link';
import FilmBox from '../components/FilmBox';
import local_api from '../serverApi_LocalStorage';

@inject('store')
@observer
class Other extends React.Component {

    state = {
        films: null
    }

    componentDidMount() {
        local_api.getFavorites()
            .then((data) => this.setState({ films: data }))
            .catch(error => alert('An Error Occured'));
    }


    render() {
        return (
            <div className='container'>
                {
                    this.state.films === null
                        ? (
                            <div className='searchSomethingDiv'>
                                <h2>You do not have any favorite yet..</h2>
                            </div>
                        )
                        : (
                            <div className='row'>
                                {
                                    this.state.films.map((film, index) => (
                                        <FilmBox
                                            key={index}
                                            filmId={film.filmId}
                                            title={film.title}
                                            year={film.year}
                                            poster={film.poster}
                                            isFavorited={true}
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

export default Other;