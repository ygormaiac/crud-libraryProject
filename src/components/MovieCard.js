import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiStar } from "react-icons/bi";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-body">
          <img src={ movie.imagePath } alt={ movie.title } className="movie-card-image" />
          <p className="movie-card-title">{ movie.title }</p>
          <p className="movie-card-subtitle">{ movie.storyline }</p>
          <div className="button-rating">
          <span className="rating">
          <BiStar className="star" />
            { movie.rating }
          </span>
          <Link to={ `/movies/${movie.id}` }>
            <button type="button" className="button-details">VER DETALHES</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
