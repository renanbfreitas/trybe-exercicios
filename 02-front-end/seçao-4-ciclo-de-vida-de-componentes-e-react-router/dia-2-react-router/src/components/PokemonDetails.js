import React from 'react';
import PropTypes from 'prop-types';
import pokemonList from '../data';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const { computedMatch } = this.props;
    const { params } = computedMatch;
    const pokemonFound = pokemonList.find((pok) => pok.id === +params.id);

    return (
      <section className="pokemon-details">
        <h1>
          {`${pokemonFound.name} details`}
        </h1>
        <Pokemon pokemon={ pokemonFound } />
        <h2>Sumário:</h2>
        <p>{pokemonFound.summary}</p>
        <h2>Hábitat:</h2>
        <section className="pokemon-habitat">
          { pokemonFound.foundAt.map((location) => (
            <section key={ location.location }>
              <span>{ location.location }</span>
              <img src={ location.map } alt="mapa do pokemon" />
            </section>
          )) }
        </section>
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  computedMatch: PropTypes.objectOf.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default PokemonDetails;
