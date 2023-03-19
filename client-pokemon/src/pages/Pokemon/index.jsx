import { Badge, Slider } from "@geist-ui/core"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import classes from "./style.module.css"

export default function Pokemon() {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:5000/api/pokemons/${id}`)
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
					<div className={classes.info}>
						<div>
							<h2>Stats</h2>
							<div>
								<label for="attack">Attack {pokemon.attack}</label>
								<Slider
									min="1"
									max="100"
									type="success"
									value={pokemon.attack}
									name="attack"
								/>
							</div>
							<div>
								<label for="attack"> Defense {pokemon.defence}</label>
								<Slider
									type="success"
									min="1"
									max="100"
									value={pokemon.defence}
									name="attack"
								/>
							</div>
							<div>
								<label for="attack">Speed {pokemon.speed}</label>
								<Slider
									type="success"
									min="1"
									max="100"
									value={pokemon.speed}
									name="attack"
								/>
							</div>
						</div>
						<div>
							<h2>Categories</h2>
							<div>
								{pokemon.categories.map((category, i) => (
									<Badge key={i} type="warning" scale={4}>
										{category.name}
									</Badge>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
