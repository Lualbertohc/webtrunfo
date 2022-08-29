import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardImage,
      cardRare, cardTrunfo, cardAttr1,
      cardAttr2, cardAttr3, onInputChange,
      isSaveButtonDisabled, onSaveButtonClick, hasTrunfo,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            id="name"
            name="name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        Descrição:
        <label htmlFor="description">
          <input
            data-testid="description-input"
            id="description"
            name="description"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        Atributo 1:
        <label htmlFor="attr1">
          <input
            data-testid="attr1-input"
            id="attr1"
            name="attr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        Atributo 2:
        <label htmlFor="attr2">
          <input
            data-testid="attr2-input"
            id="attr2"
            name="attr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        Atributo 3:
        <label htmlFor="attr3">
          <input
            data-testid="attr3-input"
            id="attr3"
            name="attr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            id="image"
            name="image"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select
            data-testid="rare-input"
            id="rare"
            name="options"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {
          hasTrunfo === true ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="confirm">
                Trunfo:
                <input
                  data-testid="trunfo-input"
                  id="confirm"
                  name="confirm"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>)
        }
        <button
          data-testid="save-button"
          type="button"
          name="btn"
          disabled={ isSaveButtonDisabled }
          onClick={
            () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardImage,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardRare,
              isSaveButtonDisabled,
              cardTrunfo,
            })
          }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
