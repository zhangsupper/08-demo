import React from 'react';
import NavHeader from './component/navheader';

class App extends React.Component {
  render () {
    return(
      <div>
        <NavHeader />

        {this.props.children}

        footer

      </div>
    )
  }
}

export default App;
