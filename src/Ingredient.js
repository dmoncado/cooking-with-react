import React from 'react';

function Ingredient({ name, amount }) {

	return (
		<>
			<span>{name}</span>
			<span>{amount}</span>
		</>
	);
}

export default Ingredient;
