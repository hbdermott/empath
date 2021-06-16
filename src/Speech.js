import Typed from 'react-typed';
import './Speech.css';
function Speech(props) {
	const image = props.image ? <img className="image" src={props.image} /> : null;
	const messages = [];
	for(let i = 0; i <= props.messages || (!props.writing && props.text.length > 1) && i < props.text.length; i++){
		messages.push(
			<div className="bubble" style={{ backgroundColor: props.color }}>
				{props.writing && i == props.messages && <span className="background">{props.text[i]}</span>}
				{props.writing && i == props.messages ? (
					<Typed
						className="foreground"
						strings={props.text[i]}
						key={i}
						typeSpeed={props.speed}
						showCursor={true}
					/>
				) : (
					props.text[i]
				)}
			</div>
		);
	}
    return (
			<div className={`entry ${props.count % 2 === 0 ? "left" : "right"}`}>
				{props.count % 2 === 0 && image}
				<div className="messages">
					{messages}
				</div>
				{props.count % 2 === 1 && image}
			</div>
		);
}

export default Speech;