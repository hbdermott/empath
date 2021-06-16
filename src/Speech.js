import Typed from 'react-typed';
import './Speech.css';
function Speech(props) {
	const image = props.image ? <img className="image" src={props.image} /> : null;
    return (
			<div className={`entry ${props.count % 2 === 0 ? "left" : "right"}`}>
				{props.count % 2 === 0 && image}
				<div className="messages">
					{props.text.map((text, i) => (
						<div className="bubble" style={{ backgroundColor: props.color }}>
							{props.writing && <span className="background">{text}</span>}
							{props.writing ? (
								<Typed
									className="foreground"
									strings={text}
									key={i}
									typeSpeed={props.speed}
									showCursor={true}
								/>
							) : (
								text
							)}
						</div>
					))}
				</div>
				{props.count % 2 === 1 && image}
			</div>
		);
}

export default Speech;