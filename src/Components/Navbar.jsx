import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			{/* Aquí se define la navegación */}
			<Link to="/">Home</Link>
			<Link to="/favs">Favs</Link>
		</div>
	);
};

export default Navbar;
