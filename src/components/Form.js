import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input
            data-testid="name-input"
            id="name"
            type="text"
            value="cardName"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="description">
          <input
            data-testid="description-input"
            id="description"
            type="textarea"
            value="cardDescription"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="attr1">
          <input
            data-testid="attr1-input"
            id="attr1"
            type="number"
            valeu="cardAttr1"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="attr2">
          <input
            data-testid="attr2-input"
            id="attr2"
            type="number"
            value="cardAttr2"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="attr3">
          <input
            data-testid="attr3-input"
            id="attr3"
            type="number"
            cardAttr3="cardAttr3"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="image">
          <input
            data-testid="image-input"
            id="image"
            type="text"
            value="cardImage"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="rare">
          <select
            data-testid="rare-input"
            name="cars"
            id="rare"
            value="cardRare"
            onChange="onInputChange"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            id="trunfo"
            type="checkbox"
            checked="cardTrunfo"
            onChange="onInputChange"
          />
        </label>
        <label htmlFor="save">
          <input
            data-testid="save-button"
            id="save"
            type="button"
            disabled="isSaveButtonDisabled"
            onClick="onSaveButtonClick"
          />
        </label>
      </form>
    );
  }
}

export default Form;
