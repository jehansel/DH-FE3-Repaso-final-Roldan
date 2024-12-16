import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

// Recibo el objeto char por medio de las props
const Card = ({ char }) => {
	const {
		dispatch,
		state: { favs },
	} = useCharStates();

	// Si encuentra el objeto en favs, lo consologuea
	// Si no lo encuentra, consologeua UNDEFINED
	// Es decir, si el objeto en favs se encuentra en ésta card, lo consologuea
	// El método find a la primera que se cumple la condición, detiene la búsqueda
	const findFav = favs.find((fav) => fav.id === char.id);
	console.log(findFav);

	const addFav = () => {
		// El favs del callback son los chars que ya teníamos previamente
		console.log("Card -> addFav -> ");
		console.log(char);
		// setFavs((favs) => [...favs, char]);

		// Si el fav está en favs, al apretar el botón se borra

		// if (findFav) {
		// 	dispatch({ type: "DELETE_FAV", payload: char });
		// } else {
		// 	// Si el fav NO está en favs, al apretar el botón se agrega
		// 	dispatch({ type: "ADD_FAV", payload: char });
		// }

		dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
	};

	return (
		<div className="card">
			{console.log("Rederizo CARD")}
			{/* Se le agrega una redirección dinámica to={`/detail/${char.id}`} */}
			{/* Link nos lleva a la ruta del detalle con el id de la card a la que se le dio click */}
			<Link to={`/detail/${char.id}`}>
				<img src={char.image} alt={char.name} />
				<h3>{char.name}</h3>
			</Link>
			<button
				className={findFav ? "favButton delete" : "favButton"}
				onClick={addFav}
			>
				{findFav ? "💀" : "⭐"}
			</button>
		</div>
	);
};

export default Card;
