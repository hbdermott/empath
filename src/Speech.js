import Typed from 'react-typed';
import './Speech.css';
const { ResizableBox } = require("react-resizable");

function Speech(props) {
    return (
			// <div class="row">
				<div className={props.count % 2 === 0 ? "left bubble" : "right bubble"}>
					{props.writing ? (
						<Typed strings={props.text} typeSpeed={40} showCursor={false} />
					) : (
						props.text
					)}
				</div>
		);
}

export default Speech;