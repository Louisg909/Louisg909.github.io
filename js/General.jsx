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

function Footer() {
	return(
		<div className="footer">
			<div className="copyright-ting">
				<img src="./img/pfp.png" alt="logo" className="footer-image"/>
				<p className="footer-copyright">Copyright ©, 2022 Louis George</p>
			</div>
			<div className="footer-buttons">
				<a href="index.html" id="header-button-selected">Home</a>
				<a>Programming</a>
				<a>Music</a>
				<a>Art</a>
				<a>About</a>
				<a>Contact</a>
			</div>
		</div>
	);
}

export { Button , Footer};