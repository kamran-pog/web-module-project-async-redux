import './App.css';
import React, { useEffect } from 'react';
import CharacterList from './components/CharacterList'

import { connect } from 'react-redux'
import * as actions from './action-types/action-creators'

function App(props) {

  useEffect(()=> {
    props.getCharacters()
  }, [])

  return (
    <div className="App">
      <div classname="header">Rick and Morty Characters</div>
      <CharacterList/>
    </div>
  );
}

export default connect(st => st, actions)(App);