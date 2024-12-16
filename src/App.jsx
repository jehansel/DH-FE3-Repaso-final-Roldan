// IMPORTs
// CSS
import "./App.css";

// React
import { Routes, Route } from "react-router-dom";

// Ruta padre
import Layout from "./Layouts/Layout";

// Rutas hijas
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";

function App() {
	return (
		// <>
		<Routes>
			{/* Padre de las rutas anidadas */}
			<Route path="/" element={<Layout />}>
				{/* Rutas anidadas hijas */}
				<Route path="/" element={<Home />} />
				<Route path="/favs" element={<Favs />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Route>
		</Routes>
		// </>
	);
}

export default App;
