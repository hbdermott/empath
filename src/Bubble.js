import Typed from "react-typed";

import "./Speech.css";
const defaultBackgroundColor = "black";
const defaultTypeSpeed = 60;
const defaultTextColor = "white";


//Mandatory props
//current (is this the "current"/last bubble on screen). T means typing. F means static.
//text (the text to be displayed) in format ["string here"]




function Bubble(props) {
    let backgroundColor = props.backgroundColor ? props.backgroundColor : defaultBackgroundColor;
    let textColor = props.textColor ? props.textColor : defaultTextColor;
    const typeSpeed = props.typeSpeed ? props.typeSpeed : defaultTypeSpeed;
    const loop = props.loop ? props.loop : false;

    if(!props.textColor && !props.backgroundColor){
        backgroundColor = "white";
		textColor = "black";
    }
        
    return (
			<div className="bubble" style={{ backgroundColor: backgroundColor, color: textColor }}>
				{props.current && <span className="background">{props.text}</span>}
                {props.current ? 
                    <Typed
                        className="foreground"
                        strings={props.text}
                        typeSpeed={typeSpeed}
                        loop={loop}
                        showCursor={false}
                        cursorChar="_"
                    />
                    : props.text
                }
			</div>
		);
}

export default Bubble;