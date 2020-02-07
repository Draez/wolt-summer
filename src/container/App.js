import React, { Component, Fragment } from 'react';
import './App.css';
import Restaurants from '../components/Restaurants/Restaurants';

class App extends Component {
	state = {
		data: [],
		loaded: false
	};
	/*
		Fetch Restaurants
	*/
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

	sortByName() {
		const restaurants = [ ...this.state.data ].sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
		this.setState({ data: restaurants });
	}

	render() {
		if (!this.state.loaded) {
			return <p>Loading...</p>;
		} else {
			return (
				<div className="App">
					<Restaurants restaurants={this.state.data} sort={this.sortByName.bind(this)} />
				</div>
			);
		}
	}
}

export default App;
