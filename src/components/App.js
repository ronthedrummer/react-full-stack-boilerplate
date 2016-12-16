import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  render() {
    return (
      <div className="app"  >
        <Header message={this.state.pageHeader} />
        ...
      </div>
    );
  }
}

export default App;
