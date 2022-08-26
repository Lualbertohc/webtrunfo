import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    attr1: '',
    attr2: '',
    attr3: '',
    options: 'normal',
    confirm: false,
    btn: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleButton());
  };

  handleButton = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;

    const validateNotEmpty = name.length > 0
      && description.length > 0
      && image.length > 0;

    const maxNumerSum = 210;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    const valudateSum = sum <= maxNumerSum;

    const maxNumer = 90;
    const verifyAttr1LessMax = attr1 <= maxNumer;
    const verifyAttr2LessMax = attr2 <= maxNumer;
    const verifyAttr3LessMax = attr3 <= maxNumer;
    const ferifyImputsAttr = verifyAttr1LessMax
    && verifyAttr2LessMax
    && verifyAttr3LessMax;

    const attr1GreaterZero = attr1 >= 0;
    const attr2GreaterZero = attr2 >= 0;
    const attr3GreaterZero = attr3 >= 0;
    const verifyAttr3GreaterZero = attr1GreaterZero
     && attr2GreaterZero
     && attr3GreaterZero;

    const verifyBtn = validateNotEmpty
    && valudateSum
    && verifyAttr3GreaterZero
    && ferifyImputsAttr;

    this.setState({
      btn: !verifyBtn,
    });
  };

  render() {
    const { name, description, image, confirm, options } = this.state;
    const { attr1, attr2, attr3 } = this.state;
    const { btn } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ options }
          cardTrunfo={ confirm }
          isSaveButtonDisabled={ btn }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleButton }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ options }
          cardTrunfo={ confirm }
        />
      </div>
    );
  }
}

export default App;
