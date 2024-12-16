import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

// ============== useReducer inicio ==============
import { reducer } from "../Reducers/reducer";
// ============== useReducer fin ==============

// Creo el contexto
const CharStates = createContext();

// Local Storage
// Si la primera opción es null o undefined, opta por la segunda opcion
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
console.log("Valor de localStorage de Favs: ");
console.log(lsFavs);
// Si favs de local storage es null, le asigno un valor vacío
// si no, le dejo el mismo valor (contenido)
// SE SOLICIONÓ EN LA LÍNEA 9 CON OR ||
//lsFavs = lsFavs === null ? [] : lsFavs;

// ============== useReducer inicio ==============
// Estructura de datos inicial del estado
// Después de inicializar no se usa nunca más
const initialState = {
	favs: lsFavs,
	chars: [],
	theme: "",
};
// ============== useReducer fin ==============

// Creo el componente donde voy a declarar los estados globales
// SE VA A UBICAR Context en main para contener toda la App
const Context = ({ children }) => {
	// Estados globales
	// const [favs, setFavs] = useState(lsFavs);
	// const [chars, setChars] = useState([]);

	// Los dos estados anteriores los voy a convertir en un useReducer
	const [state, dispatch] = useReducer(reducer, initialState);

	// URL del API
	const url = "https://rickandmortyapi.com/api/character";

	// Se ejecuta cada vez que se actualiza el estado de favs,
	// es decir, el contenido de FAVS se setea en localStorage
	useEffect(() => {
		console.log(
			"Se actualizó el estado de favs y se ejecuta el localStorage setItem, es decir, el contenido de FAVS se setea en localStorage"
		);
		localStorage.setItem("favs", JSON.stringify(state.favs));
	}, [state.favs]);

	// Se ejecuta una sola vez cuando se carga el componente
	useEffect(() => {
		axios(url).then((res) => {
			console.log(
				"Se ejecuta una sola vez cuando se carga el componente"
			);
			console.log(res.data);
			//setChars(res.data.results);
			// dispatch reemplaza a setChars
			// El dispatch contiene un objeto con dos elementos
			dispatch({ type: "GET_CHARS", payload: res.data.results });
		});
	}, []);

	return (
		// Se comparten los estados a los componentes (children) por medio del atributo value
		<CharStates.Provider value={{ state, dispatch }}>
			{/* Aquí se colocan los componentes a los cuales se les van a compartir los estados globales */}
			{children}
		</CharStates.Provider>
	);
};

export default Context;

// Creo la función que
export const useCharStates = () => useContext(CharStates);
