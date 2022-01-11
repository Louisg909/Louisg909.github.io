import React from "react";
import { render } from "react-dom";

import { Header, LandingCard } from "./Header";
import RecentProjects from "./RecentProjects";
import recents from "../json/recents.json";
import projects from "../json/top-projects.json";
import { Footer } from "./General"
console.log(projects)

import Subjects from "./Subjects";

const recent = recents["entries"];

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { dickOut: true }
	}
	render() {
		return(
			<div>
				<Header name="Louis George" />
				<LandingCard name="Louis George" occupation="Physics Student" description="I post about a range of subjects that interest me" />
				<RecentProjects entries={recent} />
				<Subjects entries={projects} />
				<Footer />
			</div>
		)
	}
}


render(<App />, document.getElementById("dickApp"));
