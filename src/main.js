const React = require('react');
const ReactDOM = require('react-dom');

const Comp = require('./components/comp');

ReactDOM.render(
  React.createElement(Comp, null),
  document.getElementById('app')
);
