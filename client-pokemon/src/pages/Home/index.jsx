import React, { useEffect, useState } from "react"
import PokemonCard from "../../components/PokemonCard"
import classes from "./index.module.css"

export default function Home() {
	const [pokemons, setPokemons] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchPokemons = async () => {
			const response = await fetch(
				"https://pokemons-9g2q.onrender.com/api/pokemons",
			)
			const data = await response.json()
			setIsLoading(false)
			setPokemons(data)
		}
		fetchPokemons()
	}, [])
	return (
		<main>
			<div className={classes.heroSection}>
				<img className={classes.girafe} src="/images/girafe.png" alt="" />
				<div className={classes.heroContainerImg}>
					<img src="/images/carapuce.png" alt="" />
				</div>
				<div>
					<h1>Welcome To Your Pokemon Shop !</h1>
					<p>
						The perfect place to fulfill all your Pokemon needs. Our collection
						includes everything from collectible cards to trendy accessories.
						Shop with us and discover the magic of the Pokemon world today.
					</p>
				</div>
			</div>
			<h1 id="Pokemons">Pokemons</h1>
			<div className={classes.PokemonsContainer}>
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					pokemons.map((pokemon) => (
						<PokemonCard key={pokemon._id} {...pokemon} />
					))
				)}
			</div>
		</main>
	)
}
