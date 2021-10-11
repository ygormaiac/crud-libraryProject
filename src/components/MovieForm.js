import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;

    return (
      <div className="movie-form">
        <label htmlFor="movie_title" className="label-form">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
        <label htmlFor="movie_subtitle" className="label-form">
          Subtítulo
          <input
            className="validate"
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
        <label htmlFor="movie_image" className="label-form">
          Imagem
          <input
            className="validate"
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
        <label htmlFor="movie_storyline" className="label-form">
          Sinopse
          <textarea
            className="textarea-form"
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
        <label htmlFor="movie_genre" className="label-form">
          Gênero
          <select
            className="validate"
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
        <label htmlFor="movie_rating" className="label-form">
          Avaliação
          <input
            className="validate"
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
        <button
          className="button-form"
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="form-movie">
       
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
