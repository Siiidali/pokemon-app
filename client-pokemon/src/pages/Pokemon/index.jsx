import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import classes from "./style.module.css"

export default function Pokemon() {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState()
	const [loading, setLoading] = useState(true)
	console.log(pokemon)

	useEffect(() => {
		fetch(`https://pokemons-9g2q.onrender.com/api/pokemons/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemon(data)
				setLoading(false)
			})
	}, [id])

	return (
		<div className={classes.container}>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className={classes.innerContainer}>
					<div>
						<h1>{pokemon.name}</h1>
						<img src={pokemon.avatar} alt="" />
						<p>{pokemon.description}</p>
					</div>
					<div></div>
				</div>
			)}
		</div>
	)
}
