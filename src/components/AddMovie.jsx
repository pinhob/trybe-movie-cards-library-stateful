// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Inspirada na sintaxe do componente MovieForm do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTextInput() {
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title-input"
          id="title-input"
          value={ title }
          onChange={ (event) => this.updateState('title', event.target.value) }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          name="subtitle-input"
          id="subtitle-input"
          value={ subtitle }
          onChange={ (event) => this.updateState('subtitle', event.target.value) }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="image-input"
          id="image-input"
          value={ imagePath }
          onChange={ (event) => this.updateState('imagePath', event.target.value) }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyline } = this.state;

    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          name="storyline"
          id="textarea"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ (event) => this.updateState('storyline', event.target.value) }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;

    return (
      <label htmlFor="number-input" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          name="rating"
          id="number-input"
          value={ rating }
          onChange={ (event) => this.updateState('rating', event.target.value) }
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;

    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero:
        <select
          name="genre"
          id="select-input"
          value={ genre }
          onChange={ (event) => this.updateState('genre', event.target.value) }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTextInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderGenre()}
      </form>
    );
  }
}

export default AddMovie;
