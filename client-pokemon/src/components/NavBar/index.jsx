import React from "react"
import classes from "./index.module.css"

export default function NavBar() {
	return (
		<nav>
			<img src="./images/profil.png" alt="" />
			<div className={classes.midNav}>
				<a href="/#">Home</a>
				<a href="#Pokemons">Pokemons</a>
				<a href="/#">Contact</a>
			</div>
			<div>
				<span>Add Pokemons</span>
			</div>
		</nav>
	)
}
