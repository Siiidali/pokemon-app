import "./App.css"
import Router from "./Router"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function App() {
	return (
		<div className="App">
			<NavBar />
			<Router />
			<Footer />
		</div>
	)
}

export default App
