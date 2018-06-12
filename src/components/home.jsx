import React from 'react';
import Weatherboard from './weatherboard';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div>
        <Weatherboard />
      </div>
    );
  }
}

export default Homepage;
