import React, { Component } from 'react'
import Link from 'next/link';
import { inject, observer } from 'mobx-react'


@inject('store')
@observer
class Navbar extends Component {

    state = {
        year: '',
        title: '',
        type: 'movie',
    }

    handleSearchChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSearchButton = () => {
        const { year, title, type } = this.state;
        this.props.store.searchFilm(title, year, type);
    }

    resetFilms = () => {
        console.log('222');

        this.props.store.films = {};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href='/'>
                    <a className='navbar-brand'>Imdb Project</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link href='/other'>
                            <a onClick={this.resetFilms} className='nav-item nav-link'>My Favorites</a>
                        </Link>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input name='title' value={this.state.title} onChange={this.handleSearchChange} className="form-control mr-sm-2" type="search" placeholder="Title" />
                        <input name='year' value={this.state.year} onChange={this.handleSearchChange} className="form-control mr-sm-2" type="text" placeholder="Year" />
                        <select name='type' onChange={this.handleSearchChange} className="form-control mr-sm-2">
                            <option>Movie</option>
                            <option>Series</option>
                            <option>Episode</option>
                        </select>
                        <button onClick={this.handleSearchButton} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}

export default Navbar;