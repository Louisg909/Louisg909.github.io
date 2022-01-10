import React from "react";

function Button(props){
	if(props.type==="black"){
		return(
			<a className="button-black" href={props.link}>{props.text}</a>
		)
	} else if(props.type==="white"){
		return(
			<a className="button-white" href={props.link}>{props.text} </a>)
	}
}

export default Button;