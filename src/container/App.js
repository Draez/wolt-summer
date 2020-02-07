import React, { Component, Fragment } from 'react';
import './App.css';

import Restaurants from '../components/Restaurants/Restaurants';

class App extends Component {
	// State
	state = {
		data: [],
		loaded: false,
		desc: false
	};

	// Fetch restaurants from JSON file
	componentDidMount() {
		fetch('./restaurants.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					data: data.restaurants,
					loaded: true
				});
				// Work with JSON data here
				console.log(this.state.data);
			})
			.catch((err) => {
				// Do something for an error here
				console.log('Error Reading data ' + err);
			});
	}

	// Sorting data alphabetically
	sortByName() {
		if (!this.state.desc) {
			this.setState({ desc: true });
			const restaurants = [ ...this.state.data ].sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});
			this.setState({ data: restaurants });
		} else {
			this.setState({ desc: false });
			const restaurants = [ ...this.state.data ].sort((a, b) => {
				if (a.name > b.name) return -1;
				if (a.name < b.name) return 1;
				return 0;
			});
			this.setState({ data: restaurants });
		}
	}

	render() {
		if (!this.state.loaded) {
			return <p style={{ textAlign: 'center' }}>Loading...</p>;
		} else {
			return (
				<div className="App">
					<Restaurants
						restaurants={this.state.data}
						sort={this.sortByName.bind(this)}
						desc={this.state.desc}
					/>
				</div>
			);
		}
	}
}

export default App;
