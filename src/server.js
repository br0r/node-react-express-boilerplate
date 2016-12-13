const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

const app = express();

const Comp = require('./components/comp');

const template = `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id="app">%APP%</div>
      <script type="text/javascript" src="/bundle.js"></script>
    </body>
  </html>
`;


app.use(express.static('public'));

app.get('/', (req, res) => {
  const el = React.createElement(Comp, null);
  res.send(template.replace('%APP%', ReactDOMServer.renderToString(el)));
});

app.listen(4004, () => {
  console.log('listening');
});
