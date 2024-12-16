// React
import { Outlet } from "react-router-dom";

// Componentes
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
	return (
		<div>
			{/* Renderiza tanto el(los) componente(s) (Navbar y Footer) como la ruta (Oulet) */}
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
