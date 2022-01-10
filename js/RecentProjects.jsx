import React from "react";
import Button from "./General";

function Entry(props) {
	if(props.type==="text"){
		return (
			<div className="entry-text">
				<Button type="black" text={props.tag} link="" />
				<a href={props.link}  className="entry-text-title" >
					<h2>{props.title}</h2>
				</a>
				<p>{props.description}</p>
			</div>
		)
	} else if(props.type==="video"){
		return (
			<div className="entry-video">
				<a><img src={props.image} alt="video" /></a>
				<div>
					<Button type="black" text={props.tag} link="" />
					<a href={props.link} className="entry-video-title">
						<h2>{props.title}</h2>
					</a>
					<p>{props.description}</p>
				</div>
			</div>
		)
	}
}

function RecentProjects(props){
	
	var entries = []
	for(const p of props.entries) {
		if(p.type === "text") {
			entries.push(<Entry type={p.type} tag={p.tag} title={p.title} description={p.description} link={p.link} />);
		} else if (p.type === "video") {
			entries.push(<Entry type={p.type} tag={p.tag} title={p.title} description={p.description} image={p.image} link={p.link} />)
		}
	}

	return(
		<div className="recent-projects">
			<h1>Recent Projects</h1>
			<div className="projects-line"></div>
			{entries}
			<Button type="white" text="See More" link="" />
		</div>
	)
}


export default RecentProjects;