import { useContext } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from '../context/FilmsContext';

function FilmCard({ film }) {
  const { toggleFavorite } = useContext(FilmsContext);
  return (
    <figure key={ film.id }>
      <img src={ film.image } alt={ film.title } />
      <figcaption>
        <h2>{film.title}</h2>
        <p>{film.description}</p>
      </figcaption>
      <button type="button" onClick={ () => toggleFavorite(film) }>
        Favoritar
      </button>
    </figure>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default FilmCard;
