import React from "react";
import { render } from "react-dom";

import { Header, LandingCard } from "./Header";
import RecentProjects from "./RecentProjects";
import recents from "../json/recents.json";

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
			</div>
		)
	}
}


render(<App />, document.getElementById("dickApp"));
