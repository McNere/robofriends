import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ""
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			const search = new RegExp(this.state.searchfield.toLowerCase(), "g");
			return search.test(robot.name.toLowerCase());
		});
		return (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Cardlist robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;