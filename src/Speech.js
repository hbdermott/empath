import Typed from 'react-typed';
import './Speech.css';

function Speech(props) {
	const image = <img className="image" src={props.image} />;
    return (
			<div className={props.count % 2 === 0 ? "left entry" : "right entry"}>
				{props.count % 2 == 0 && image}
				<div className="bubble">
					{props.writing && <span className="background">{props.text}</span>}
					{props.writing ? (
						<Typed
							className="foreground"
							strings={props.text}
							typeSpeed={props.speed}
							showCursor={false}
						/>
					) : (
						props.text
					)}
				</div>
				{props.count % 2 == 1 && image}
			</div>
		);
}

export default Speech;