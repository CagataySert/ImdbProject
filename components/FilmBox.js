import React, { Component } from 'react'
import '../styles/style.scss';

class FilmBox extends Component {
    render() {
        return (
            <div className='col-md-4 image-box'>
                <div className="card bg-secondary text-white card-width">
                    <img className="card-img-top" width='50px' height='300px' src={this.props.poster} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.year}</p>
                        <a href="#">
                            <i onClick={(event) => this.props.handleAddFavorite(event, this.props.filmId)} className="far fa-star favorite-button"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmBox;
