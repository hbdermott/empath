// import Typed from 'react-typed';
import { useState } from 'react';
import Bubble from './Bubble';
import './Speech.css';
var GifPlayer = require('react-gif-player');


function Speech(props) {
	const [pauseGif, setPauseGif] = useState(null);
	const messages = [];
	let image = null;
	if(props.image){
		const png_name = props.image.slice(0, -3).concat("png");
		image = (
			<GifPlayer
				className="image"
				autoplay={true}
				gif={process.env.PUBLIC_URL + props.image}
				still={process.env.PUBLIC_URL + png_name}
				pauseRef={(pause) => setPauseGif(() => pause)}
			/>
		);
		if(!props.writing){
			pauseGif();
		}

	}
	for(let i = 0; i <= props.messages; i++){
		messages.push(
			<Bubble 
				current={props.writing && i === props.messages} 
				key={i}
				text={[props.text[i]]} 
				textColor={props.textColor} 
				backgroundColor={props.color}/>
		);
	}
    return (
		!image ? <div className="narrative">{messages}</div> :
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