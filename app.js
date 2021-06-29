import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
const App = (props) => {
  return (
    <div>
      <p>Hello there!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
