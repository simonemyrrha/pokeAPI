import React, {Component} from 'react';
import './Type.css';

class Type extends Component {

  searchPokemonByType = (event) => {
    event.persist();
    let cacheStorage = `${event.target.id}-type-pokemons`;
    caches.open(cacheStorage).then( cache => {
      let url = 'https://pokeapi.co/api/v2/type/' + event.target.id;
      let request = new Request(url);
      cache.match(request).then( response => { 
        if(response === undefined) {
         
          fetch(url).then(response => {
            let responseClone = response.clone();
            caches.open(cacheStorage).then( cache => {
              cache.add(url, responseClone);
            });
            response.json().then(data => {
              let pokemons = data.pokemon.map((pokeObj) => {
                return pokeObj.pokemon.name;
              });
              this.props.callbackFromParent(pokemons);
            });
          });
        } else {
          
          response.json().then(data => {
            let pokemons = data.pokemon.map((pokeObj) => {
              return pokeObj.pokemon.name;
            });
            this.props.callbackFromParent(pokemons);
         });
        }
      });
    });
  }

  render() {
    return (
      <button onClick={this.searchPokemonByType} className={`Type-btn ${this.props.type}`} id={this.props.type}>{this.props.type}</button>
    );
  }
}

export default Type;
