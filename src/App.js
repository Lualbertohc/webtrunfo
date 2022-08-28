import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    options: 'normal',
    confirm: false,
    btn: true,
    trunfo: '',
    save: [],
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

  handleClick = (myInfo) => {
    const { cardName, cardDescription, cardImage, cardRare, cardTrunfo } = myInfo;
    const { cardAttr1, cardAttr2, cardAttr3 } = myInfo;
    const card = {
      name: cardName,
      description: cardDescription,
      image: cardImage,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      options: cardRare,
      confirm: cardTrunfo,
    };
    console.log(myInfo.save);
    this.setState((prevState) => ({

      save: [...prevState.save, card],

    }), () => {
      this.setState({
        name: '',
        description: '',
        image: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        options: 'normal',
        confirm: false,
      });
    });
  };

  render() {
    const { name, description, image, confirm, options } = this.state;
    const { attr1, attr2, attr3 } = this.state;
    const { btn } = this.state;
    const { save } = this.state;
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
          hasTrunfo={ save.some((e) => e.confirm === true) }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleClick }
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
        {
          save.map((e, i) => (
            <Card
              key={ i }
              cardName={ e.name }
              cardDescription={ e.description }
              cardImage={ e.image }
              cardAttr1={ e.attr1 }
              cardAttr2={ e.attr2 }
              cardAttr3={ e.attr3 }
              cardRare={ e.options }
              cardTrunfo={ e.confirm }
            />))
        }
      </div>
    );
  }
}
export default App;
