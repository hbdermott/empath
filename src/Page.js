import React from "react";
import Speech from './Speech';
import './Page.css';
import blue from './data/blue.gif';
import red from "./data/red.gif";
import yellow from "./data/yellow.gif";

const page_data = {
	id: "10283102938",
	entries: [
		{
			img: blue,
			color: "asdasdasd",
			text: ["Hello World!"],
			speed: 40,
		},
		{
			img: red,
			color: "asdasdasd",
			text: [
				"Hello World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			],
			speed: 40,
		},
		{
			img: yellow,
			color: "asdasdasd",
			text: ["Hello World!"],
			speed: 40,
		},
		{
			img: blue,
			color: "asdasdasd",
			text: ["Hello World!"],
			speed: 40,
		},
		{
			img: red,
			color: "asdasdasd",
			text: [
				"Hello World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			],
			speed: 40,
		},
		{
			img: yellow,
			color: "asdasdasd",
			text: ["Hello World!"],
			speed: 40,
		},
	],
	buttons: [<div>Button</div>, <div>Button</div>, <div>Button</div>],
};

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			// entries: []
		};
		this.bottomRef = React.createRef();
	}

	// addNextEntry(){
	// 	this.setState({
	// 		entries: [
	// 			...this.state.entries,
	// 			<Speech
	// 				image={page_data.entries[this.state.clicks].img}
	// 				count={this.state.clicks}
	// 				writing={true}
	// 				text={page_data.entries[this.state.clicks].text}
	// 				speed={page_data.entries[this.state.clicks].speed}
	// 				color={page_data.entries[this.state.clicks].color}
	// 			/>,
	// 		],
	// 	});
	// }

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
		if(e.keyCode === 32){
			this.handleClick();
		}
	}

	handleClick = () => {
		if (this.state.clicks !== page_data.entries.length) {
			this.setState({ clicks: this.state.clicks + 1 });
			// this.addNextEntry();
		}
		this.scrollToBottom();
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
					writing={i == this.state.clicks ? true : false}
					text={page_data.entries[i].text}
					speed={page_data.entries[i].speed}
					color={page_data.entries[i].color}
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
				{this.state.clicks === page_data.entries.length
					? page_data.buttons
					: null}
			</div>
		);
	}
}

export default Page;  