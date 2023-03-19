import { Button, Checkbox, Input } from "@geist-ui/core"
import { useEffect, useState } from "react"
import classes from "./style.module.css"

export default function AddPokemon() {
	const [categories, setCategories] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = new FormData(e.target)
		const data = Object.fromEntries(form)
		data.categories = categories

		fetch("https://pokemons-9g2q.onrender.com/api/pokemons", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
	}
	const handleCategories = (e) => {
		setSelectedCategories(e)
	}
	useEffect(() => {
		const fetchCategories = async () => {
			const response = await fetch(
				"https://pokemons-9g2q.onrender.com/api/categories",
			)
			const data = await response.json()
			setCategories(data)
		}
		fetchCategories()
	}, [])

	return (
		<form onSubmit={handleSubmit} className={classes.container}>
			<h2>Add Pokemon</h2>
			<div>
				<div>
					<Input width="100%" placeholder="Poki" name="name">
						<h3> Name</h3>
					</Input>
					<Input maxLength={1000} width="100%" placeholder="Poki" name="avatar">
						<h3>Image</h3>
					</Input>
					<h3> Categories</h3>
					<Checkbox.Group
						value={selectedCategories}
						onChange={handleCategories}
					>
						{categories.map((categorie) => (
							<Checkbox scale={3} value={categorie._id} name="categorie">
								{categorie.name}
							</Checkbox>
						))}
					</Checkbox.Group>
				</div>
				<div>
					Attack:
					<input type="range" name="attack" />
					Defense:
					<input type="range" name="defence" />
					Speed:
					<input type="range" name="speed" />
				</div>
			</div>
			<Button type="success" htmlType="submit">
				Submit
			</Button>
		</form>
	)
}
