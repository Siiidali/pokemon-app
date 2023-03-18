import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"

export default function Router() {
	return useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		// {
		// 	path: "/pokemons",
		// 	element: <Pokemons />,
		// },
		{
			path: "/pokemons/:id",
			element: <Pokemon />,
		},
		// {
		// 	path: "/addPokemon",
		// 	element: <AddPokemon />,
		// },
	])
}
