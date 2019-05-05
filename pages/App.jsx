import React from 'react';

import './app.css';

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
        <p>
          <img src={require('../asset/images/calendar-check.png')}/>
        </p>
      </div>
    );
  }
}

export default App;
