import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';
import SortButton from '../SortButton/SortButton';

const Restaurants = (props) => {
	return (
		<Container>
			<SortButton sort={props.sort} direction={props.desc} />
			<Row>{props.restaurants.map((restaurant) => <Restaurant restaurant={restaurant} />)}</Row>
		</Container>
	);
};

export default Restaurants;
