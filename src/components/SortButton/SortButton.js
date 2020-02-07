import React from 'react';

import { Button } from 'react-bootstrap';
import './SortButton.css';

const SortButton = (props) => {
	return (
		<Button className="btn filter" onClick={props.sort}>
			{props.direction ? 'Sort Alphabetically (Descending)' : 'Sort Alphabetically (Ascending)'}
		</Button>
	);
};

export default SortButton;
