import React from 'react';
import { Col } from 'react-bootstrap';
import './Restaurant.css';

const Restaurant = (props) => {
	return (
		<Col md={4} style={{ padding: '40px 20px' }} key={props.restaurant.blurhash}>
			<div className="bg-wrap">
				<div className="bg" style={{ backgroundImage: `url(${props.restaurant.image})` }} />
			</div>

			<h2 className="name">{props.restaurant.name}</h2>
			<p>{props.restaurant.description}</p>
			<span className="city">{props.restaurant.city}</span>
		</Col>
	);
};

export default Restaurant;
