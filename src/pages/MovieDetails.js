import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => this.setState({ movie: data, loading: false }));
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state

    const { movie: { title, storyline, imagePath,
      genre, rating, subtitle, id }, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div className="movie">
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } className="img-details"/>
        <p className="title-details">{title}</p>
        {/* <p>{subtitle}</p> */}
        <p className="storyline-details">{storyline}</p>
        <p className="genre-details">{genre}</p>
        <p className="rating">{rating}</p>
        <div className="buttons-container">
          <Link to="/">
            <button className="buttons-details">VOLTAR</button>
          </Link>
          <Link to={ `/movies/${id}/edit` }>
            <button className="buttons-details">EDITAR</button>
          </Link>
          <Link to="/" onClick={ this.deleteMovie }>
            <button className="buttons-details">DELETAR</button>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
