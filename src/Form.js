import React, {Component} from 'react';
import './Form.css';
import FontAwesome from 'react-fontawesome';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  sendValueToParent = (event) => {
    event.preventDefault();
    this.props.callbackFromParent(this.state.value);
  }

 
  render() {
    return (
      <form id="pokemon-search" onSubmit={this.sendValueToParent}>
        <label>Nome ou Código(ID):
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Digite o nome ou o código (id) do pokémon favorito!"/>
        </label>
        {this.props.loading ? <FontAwesome name="spinner" spin/> : <input type="submit" value="buscar"/>}
      </form>
    );
  }
}

export default Form;
