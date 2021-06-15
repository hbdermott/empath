import Typed from 'react-typed';
import './Speech.css';

function Speech(props) {
    return (
			<div className={props.count % 2 === 0 ? "left entry" : "right entry"}>
				{props.count % 2 == 0 && <img className="image" src={props.image} />}
				<div className="bubble">
					{props.writing ? (
						<Typed strings={props.text} typeSpeed={40} showCursor={false} />
					) : (
						props.text
					)}
				</div>
				{props.count % 2 == 1 && <img className="image" src={props.image} />}
			</div>
		);
}

export default Speech;