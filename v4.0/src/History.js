import React from 'react';
import './css/History.css';

class History extends React.Component {
	constructor(props) {
		super(props);
		this.size = 75;
		this.historyData = [];
		this.idx = [];
		this.prevIndex = 0;
		for(var i=0; i<props.count; ++i) {
			this.historyData.push([]);
			this.idx.push(0);
		}
		this.itemsizeData = this.itemsizeData.bind(this);
		this.updateScroll = this.updateScroll.bind(this);
	}

	updateScroll() {
    var element = document.getElementsByClassName("history-main")[0];
    element.scrollTop = element.scrollHeight;
	}

	itemsizeData(bh, from, to) {
		++this.idx[this.props.activeIndex];
		this.historyData[this.props.activeIndex].push(
			<div key={this.idx[this.props.activeIndex]} className="history-data">
				<div className="box hist" style={{height: bh, width: bh, backgroundColor: from}}>{this.props.cardName}</div>
				<div className="dir"></div>
				<div className="box hist" style={{height: bh, width: bh, backgroundColor: to}}>{this.props.cardName}</div>
			</div>
		);
		this.updateScroll();
	}

	render() {
		const bh = this.size * this.props.ratio;
		const from = this.props.from;
		const to = this.props.to;
		
		if(from.localeCompare(to) !== 0 && this.prevIndex === this.props.activeIndex)
			this.itemsizeData(bh, from, to);

		this.prevIndex = this.props.activeIndex;

		return (
				<div className="history-wrapper">
					{this.historyData[this.props.activeIndex]}
				</div>
			);
	}
}

export default History;