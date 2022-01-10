import React from "react";

function Header(props) {
	return(
		<div className="header">
			<div className="header-icon">
				<a href="index.html">
					<img src="./img/pfp.png" alt="logo" />
				</a>
				<a href="index.html">
					<h3>{props.name}</h3>
				</a>
			</div>
			<div className="header-buttons">
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

function LandingCard(props) {
	return(
			<div className="card">
				<img src="./img/pfp.png" alt="photo of me" />
				<div className="card-text">
					<div>
						<p id="title-name">{props.name}</p>
						<p>{props.occupation}</p>
					</div>
					<h1>{props.description}</h1>
				</div>
			</div>
		);
}

export { Header, LandingCard };