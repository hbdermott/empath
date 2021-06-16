import React from "react";
import Speech from './Speech';
import './Page.css';
import page_data from './data/page_data'
import ReactModal from "react-modal";
//TODO pass click event to Speeches with more than one message bubble
//TODO update modal and button styling.
//TODO pause gif animation
//TODO implement side control logic


// ReactModal.setAppElement("#root");
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			options: false
		};
		this.bottomRef = React.createRef();
	}

	componentDidMount() {
		this.bottomRef.current.focus();
		this.scrollToBottom();
	}

	componentDidUpdate() {
		if (this.state.clicks !== page_data.entries.length)
			this.scrollToBottom();
	}

	scrollToBottom = () => {
		this.bottomRef.current.scrollTop = this.bottomRef.current.scrollHeight;
	};

	handleKeyPress = (e) => {
		if (e.keyCode === 32) {
			this.handleClick();
		}
	};

	handleClick = () => {
		if (this.state.clicks !== page_data.entries.length) {
			this.setState({ clicks: this.state.clicks + 1 });
			console.log(this.state.clicks);
		}if(!this.state.options && this.state.clicks >= page_data.entries.length - 1) {
			this.openOptions();
		}
	};

	closeOptions = () => {
		this.setState({ options: false });
	};

	openOptions = () => {
		this.setState({ options: true });
	};

	customStyles = {
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(000, 000, 000, 0.55)",
		},
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};
	render() {
		const entries = [];

		for (
			let i = 0;
			i <= this.state.clicks && i < page_data.entries.length;
			i++
		) {
			entries.push(
				<Speech
					image={page_data.entries[i].img}
					count={i}
					key={i}
					writing={i === this.state.clicks ? true : false}
					text={page_data.entries[i].text}
					speed={page_data.entries[i].speed}
					color={page_data.entries[i].color}
					side={page_data.entries[i].side}
				/>
			);
		}
		return (
			<div
				className="Page"
				tabIndex="0"
				ref={this.bottomRef}
				onClick={() => this.handleClick()}
				onKeyDown={(e) => this.handleKeyPress(e)}
			>
				{entries}
				<ReactModal
					style={this.customStyles}
					isOpen={this.state.options}
					onRequestClose={this.closeOptions}
				>
					{page_data.buttons.map((button, i) => <button key={i}>{button.text}</button>)}
					<button onClick={this.closeOptions}>close</button>
				</ReactModal>
			</div>
		);
	}
}

export default Page;  