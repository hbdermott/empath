import React from "react";
import Speech from './Speech';
import './Page.css';
const page_data = {
	id: "10283102938",
	entries: [
		{
			img: "asdasdasd",
			color: "asdasdasd",
			text: ["Hello World!"],
		},
		{
			img: "asdasdasd",
			color: "asdasdasd",
			text: [
				"Hello World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			],
		},
		{
			img: "asdasdasd",
			color: "asdasdasd",
			text: ["Hello World!"],
		},
		{
			img: "asdasdasd",
			color: "asdasdasd",
			text: ["Hello World!"],
		},
	],
	buttons: [<div>Button</div>, <div>Button</div>, <div>Button</div>],
};

class Page extends React.Component {

	constructor(props) {
		super(props);
		this.state = {clicks: 0};
	}

    handleClick = () => {
        if (this.state.clicks === page_data.entries.length)
            return;
        else
            this.setState({clicks: this.state.clicks + 1});
    }

    render() {
        const entries = [];

        for(let i = 0; i <= this.state.clicks && i < page_data.entries.length; i++){
            entries.push(<Speech count={i} writing={i == this.state.clicks ? true : false} text={page_data.entries[i].text}/>)
        }


        return(
            <div className="Page" onClick={() => this.handleClick()} disabled="true">
               {entries}
               {this.state.clicks === page_data.entries.length ? page_data.buttons : null}
            </div>
        );
    }
        
}

export default Page;