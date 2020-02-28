import React from 'react';
import MallContainer from './containers/MallContainer';
import Login from './components/Login'

const App = () => {
  return (
    <div className="App">
      <Login />
      <MallContainer />
    </div>
  );
}

export default App;
