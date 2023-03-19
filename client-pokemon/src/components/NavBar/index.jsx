import React from "react"
import { Link } from "react-router-dom"
import classes from "./index.module.css"

export default function NavBar() {
	return (
		<nav>
			<img src="./images/profil.png" alt="" />
			<div className={classes.midNav}>
				<a href="/">Home</a>
				<a href="#Pokemons">Pokemons</a>
				<a href="/">Contact</a>
			</div>
			<div>
				<span>
					<Link to="/addPokemon"> Add Pokemons</Link>
				</span>
			</div>
		</nav>
	)
}
