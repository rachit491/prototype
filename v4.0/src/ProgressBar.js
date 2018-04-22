import React from 'react';
import { Progress } from 'reactstrap';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);    
  }

	render() {
    const qid = this.props.qid.substr(0, 25);
    const multiplier = 100/this.props.cards;
    let etc = "";
    let className = "progressbar";
    
    if(this.props.qid.length > 25) {
      etc += "...";
    }
    if(this.props.active) {
      className += " active-bar";
    }

		return (
			<div className={className}> 
        <Progress multi>
        	<Progress bar color="warning" value={(this.props.count[0]-this.props.factor)*multiplier}>
            {(this.props.count[0]-this.props.factor)*multiplier}%
          </Progress>
          <Progress bar color="success" value={this.props.count[1]*multiplier}>
            {this.props.count[1]*multiplier}%
          </Progress>
          <Progress bar value={this.props.count[2]*multiplier}>
            {this.props.count[2]*multiplier}%
          </Progress>
          <Progress bar color="danger" value={this.props.count[3]*multiplier}>
            {this.props.count[3]*multiplier}%
          </Progress>
        </Progress>
        <div className="qid">
          {qid}{etc}
        </div>
      </div>
		);
	}
}

export default ProgressBar;