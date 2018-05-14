import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
			test: ""
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users=> this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			const search = new RegExp(this.state.searchfield.toLowerCase(), "g");
			return search.test(robot.name.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1 className="tc">Loading</h1>
		} else {
			return (
				<div className="tc">
					<h1 className="f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<Cardlist robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;