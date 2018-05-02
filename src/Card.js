import React, {Component} from 'react';
import './Card.css';
import './types.css';
import FontAwesome from 'react-fontawesome';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: null
    }
  }

  settingType = function(pokemonData) {
    console.log(pokemonData);
    let typeDiv;
    if (pokemonData) {
      let types = pokemonData.types;
      if (types.length > 1) {
        typeDiv = types.map((type, i) => {
          return <div key={`${type}-${i}`} ref={"type-container" + i} className={`${type} Card-type`}>{type}</div>;
        });
      } else {
        let type = pokemonData.types[0];
        typeDiv = <div ref={"type-container"} className={`${type} Card-type`}>{type}</div>;
      }
    }
    return typeDiv;
  }

  /*settingStats = function(pokemonData) {
    return pokemonData.stats.map((data, i) => {
      return <li key={`${data.stat.name}-${i}`}>{data.stat.name}: <span>{data.base_stat}</span></li>;
    });
  }*/

  render() {
    let pokemonData = this.props.pokemonInfo;
    let backBtn = <button onClick={() => {
          this.props.callbackFromParent(pokemonData.pokemon_id - 1);
        }} className="Card-btnNav Card-btnBack">
        <FontAwesome name="caret-left" size="3x" />
      </button>;

    return <div className="Card-container">
        {pokemonData.pokemon_id === 1 ? "" : backBtn}
        <div className="Card">
          <div ref="Card--title-container" className={`Card--title-container ${pokemonData.types[0]}`}>
            <p className="Card-id">#{pokemonData.pokemon_id}</p>
            <h2 className="Card-title">{pokemonData.pokemon} </h2>
            <p className="Card-genus"> - {pokemonData.genus} Pokemon</p>
          </div>
          <div className="Card--image-container">
            <img src={pokemonData.picture} alt={pokemonData.pokemon} />
          </div>
          <div className="Card-additional-info-container">
            <li>Altura: {pokemonData.height}</li>
            <li>Peso: {pokemonData.weight}</li>
            <li>Felicidade: {pokemonData.height}</li>
            <li>Taxa de captura: {pokemonData.weight}</li>
          </div>

          <div className="Card--type-container">
            {this.settingType(pokemonData)}
          </div>

          <div className="Card--description-container">
            <h2>Descrição</h2>
            <p className="Card-description">{pokemonData.description}</p>
          </div>
        </div>
        <button onClick={() => {
            this.props.callbackFromParent(pokemonData.pokemon_id + 1);
          }} className="Card-btnNav Card-btnForward">
          <FontAwesome name="caret-right" size="3x" />
        </button>
      </div>;
  }
}

export default Card;
