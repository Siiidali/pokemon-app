import React from "react"

export default function AddPokemon() {
	return (
		<div>
			<h2>Add Pokemon</h2>
			<div>
				<label htmlFor="name">Name :</label>
				<input type="text" name="name" />
				<label htmlFor="category">Category :</label>
				<input type="text" name="category" />
				<label htmlFor="image">Image :</label>
				<input type="text" name="image" />
			</div>
		</div>
	)
}
