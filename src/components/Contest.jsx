import React, {Component, PropTypes} from 'react';

class Contest extends Component {
  render() {
    return(
      <div className="contest">

        <div className="home-link link"
          onClick={this.props.contestListClick}>
          &lt; Contest List
        </div>
        
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">  Name one ...</li>
              <li className="list-group-item">  Name two ...</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;
