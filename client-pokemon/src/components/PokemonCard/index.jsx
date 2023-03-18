import React from "react"
import { Link } from "react-router-dom"

export default function PokemonCard({ avatar, name, _id }) {
	return (
		<div>
			<div>
				<img src={avatar} alt="" />
			</div>
			<h3>
				<Link to={`/pokemons/${_id}`}>{name}</Link>
			</h3>
		</div>
	)
}
