import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  render() {
    return (
      <div className="app" >
        <Header message={this.state.pageHeader} />
        {this.state.contests.map(contest =>
          <ContestPreview key={contest.id} {...contest}></ContestPreview>
        )}
      </div>
    );
  }
}

export default App;
