const React = require('react');

const Component = React.createClass({
  getDefaultProps() {
    return {
      value: 'Hello!',
    };
  },
  _onClick() {
    console.log('test4');
  },
  render() {
    return (
      <div>
        <h1 onClick={this._onClick}>{this.props.value}</h1>
      </div>
    );
  }
});

module.exports = Component;
