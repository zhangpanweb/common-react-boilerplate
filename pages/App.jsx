import React from 'react';

import './app.less';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        {this.state.count}
      </div>
    );
  }
}

export default App;
