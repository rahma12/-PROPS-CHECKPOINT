import React from 'react';
import './App.css';
import Wrapper from './Wrapper'
import Photo from './Photo'
import logo from './logo.svg';
import Title from './Title'

function App() {
  return (
    <div className="App">
      <Wrapper>
          <Photo rahma={logo} />
          <Title>My Name here</Title>
               <Title small>My job here</Title>}


      </Wrapper>
    
    </div>
  );
}

export default App;
