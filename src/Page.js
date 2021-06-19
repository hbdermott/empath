import React from "react";
import Speech from './Speech';
import './Page.css';
import page_data from './data/page_data'
import ReactModal from "react-modal";
//TODO update modal and button styling.
//TODO fix gif state warning
//TODO implement side control logic


ReactModal.setAppElement("#root");
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: 0,
			messages: 0,
			options: false,
			id: window.localStorage.getItem("id") ? window.localStorage.getItem("id") : "0"
		};
		this.bottomRef = React.createRef();
	}

	componentDidMount() {
		this.bottomRef.current.focus();
		this.scrollToBottom();
	}

	componentDidUpdate() {
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

	updatePage = (new_id) => {
		window.localStorage.setItem("id", new_id);
		this.setState({ messages: 0, entries: 0, options: false, id: new_id});
	}

	handleClick = () => {
		if (this.state.entries >= page_data[this.state.id].entries.length){
			if(!this.state.options){
				this.openOptions();
			}
		}
		else if (this.state.messages < page_data[this.state.id].entries[this.state.entries].text.length - 1) {
			this.setState({ messages: this.state.messages + 1 });
			console.log(`entries: ${this.state.entries}`);
			console.log(`messages: ${this.state.messages}`);
		} else if (this.state.entries < page_data[this.state.id].entries.length) {
			this.setState({ entries: this.state.entries + 1 });
			this.setState({ messages: 0 });
			console.log(`entries: ${this.state.entries}`);
			console.log(`messages: ${this.state.messages}`);
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
			i <= this.state.entries && i < page_data[this.state.id].entries.length;
			i++
		) {
			entries.push(
				<Speech
					image={page_data[this.state.id].entries[i].img}
					count={i}
					key={i}
					writing={i === this.state.entries ? true : false}
					text={page_data[this.state.id].entries[i].text}
					messages={i === this.state.entries ? this.state.messages : page_data[this.state.id].entries[i].text.length - 1}
					speed={page_data[this.state.id].entries[i].speed}
					color={page_data[this.state.id].entries[i].color}
					side={page_data[this.state.id].entries[i].side}
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
					{page_data[this.state.id].buttons.map((button, i) => <button onClick={() => this.updatePage(button.id)} key={i}>{button.text}</button>)}
					<button onClick={this.closeOptions}>close</button>
				</ReactModal>
			</div>
		);
	}
}

export default Page;  