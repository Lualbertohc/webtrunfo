import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ value.cardImage } alt={ value.cardName } />
        <p data-testid="description-card" cardDescription={ value.cardDescription }>.</p>
        <h2 data-testid="attr1-card" cardAttr1={ value.cardAttr1 }>.</h2>
        <h2 data-testid="attr2-card" cardAttr1={ value.cardAttr2 }>.</h2>
        <h2 data-testid="attr3-card" cardAttr1={ value.cardAttr3 }>.</h2>
        <h1 data-testid="rare-card" cardRare={ value.cardRare }>.</h1>
      </div>
    );
  }
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Card;
