import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// eslint-disable-next-line react/prop-types
const App = ({ name }) => (
  <div>{`Hello ${name}`}</div>
);

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="World!" />, mountNode);
