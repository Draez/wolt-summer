import React from 'react';
import './Restaurants.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Restaurants = (props) => {
	return (
		<Container>
			<Button className="btn filter" onClick={props.sort}>
				Listaa järjestykseen
			</Button>
			<Row>
				{props.restaurants.map((restaurant) => (
					<Col md={4}>
						<img src={restaurant.image} />
						<h2>{restaurant.name}</h2>
						<span>{restaurant.city}</span>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Restaurants;
