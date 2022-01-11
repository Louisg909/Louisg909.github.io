import React from "react";
import { Button } from "./General";

function Entry(props) {
	return(
		<div className="subject-entry">
			<a href={props.link}><h1>{props.title}</h1></a>
			<p>{props.description}</p>
			<Button text={props.subcatagory} type="white" link="" />
		</div>
	)
}


class Subjects extends React.Component {
	constructor(props) {
		super(props);
		this.state={ option:"programming" };
		this.renderOption = this.renderOption.bind(this);
	}
	renderOption(option){
		var icons=[];
		var proccesedEntries=[];
		if(option === "music"){
			const entries = this.props.entries["music"];
			console.log(entries)
			for(const e of entries){
				proccesedEntries.push(<Entry link={e.link} title={e.title} description={e.description} subcatagory={e.subcatagory} />)
			}
			var iconsinput=["../assets/icons/video.png","../assets/icons/sibalius.png","../assets/icons/theory.png"];
			for(const icon of iconsinput){
				icons.push(<a><img src={icon} alt="icon"/></a>)
			}
		} else if(option === "programming"){
			const entries = this.props.entries["programming"];
			for(const e of entries){
				proccesedEntries.push(<Entry link={e.link} title={e.title} description={e.description} subcatagory={e.subcatagory} />)
			}
			var iconsinput=["../meta/icons/python.png","../meta/icons/pi.png","../meta/icons/c.png"];
			for(const icon of iconsinput){
				icons.push(<a><img src={icon} alt="icon" className="icon-ic"/></a>)
			}
		}else if(option === "art"){
			const entries = this.props.entries["art"];
			for(const e of entries){
				proccesedEntries.push(<Entry link={e.link} title={e.title} description={e.description} subcatagory={e.subcatagory} />)
			}
			var iconsinput=["../assets/icons/photoshop.png","../assets/icons/pen.png","../assets/icons/desmos.png"];
			for(const icon of iconsinput){
				icons.push(<a><img src={icon} alt="icon"/></a>)
			}
		}
		return(
			<div className="subject-display">
				<div className="subject-icons">
					{icons}
				</div>
				<div className="subject-fuckery">
					<div className="subject-entries">
						{proccesedEntries[0]}
						{proccesedEntries[1]}
					</div>
					<div className="subject-entries">
						{proccesedEntries[2]}
						{proccesedEntries[3]}
					</div>
				</div>
				<Button text ="See More" link="" type="black"/>

			</div>
		)
	}
	render() {
		return(
			<div className="subjects-background">
				<div className="subjects-buttons">
					<button onClick={ () => { this.setState({ option: "music" })}} 
					className= {(this.state.option === "music") ? "subject-button-selected" : "" }>Music</button>
					<button onClick={ () => { this.setState({ option: "programming" })}} 
					className= {(this.state.option === "programming") ? "subject-button-selected" : "" }>Programming</button>
					<button onClick={ () => { this.setState({ option: "art" })}} 
					className= {(this.state.option === "art") ? "subject-button-selected" : "" }>Art</button>
				</div>
				{this.renderOption(this.state.option)}
			</div>
		)
	}
}


export default Subjects;