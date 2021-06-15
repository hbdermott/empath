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
		},
		{
			img: red,
			color: "asdasdasd",
			text: [
				"Hello World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			],
		},
		{
			img: yellow,
			color: "asdasdasd",
			text: ["Hello World!"],
		},
		{
			img: blue,
			color: "asdasdasd",
			text: ["Hello World!"],
		},
	],
	buttons: [<div>Button</div>, <div>Button</div>, <div>Button</div>],
};

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0
		};
	}

	handleClick = () => {
		if (this.state.clicks === page_data.entries.length) return;
		else this.setState({ clicks: this.state.clicks + 1 });
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
				/>
			);
		}

		return (

				<div className="Page" onClick={() => this.handleClick()}>
					{entries}
					{this.state.clicks === page_data.entries.length
						? page_data.buttons
						: null}
				</div>
		);
	}
}

export default Page;