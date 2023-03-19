import { GeistProvider } from "@geist-ui/core"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<GeistProvider themeType="dark">
				<App />
			</GeistProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
