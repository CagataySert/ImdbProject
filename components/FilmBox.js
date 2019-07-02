import React, { Component } from 'react'
import '../styles/style.scss';

class FilmBox extends Component {
    render() {
        const props = this.props;

        return (
            <div className='col-md-4 image-box'>
                <div className="card bg-secondary text-white card-width">
                    <img className="card-img-top" width='50px' height='300px' src={props.poster} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.year}</p>
                        <p className="card-text">IMDb : {props.imdbRating}</p>
                        {
                            props.isFavorited
                                ? <i className="fas fa-star favorite-button"></i>
                                : (
                                    <a href="#">
                                        <i
                                            onClick={(event) => props.handleAddFavorite(event, props.title, props.year, props.poster, props.filmId, props.imdbRating)}
                                            className="far fa-star favorite-button"
                                        />
                                    </a>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmBox;
