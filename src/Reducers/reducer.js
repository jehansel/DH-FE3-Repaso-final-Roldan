// Es una función que se ejecuta cuando el dispatcher lo dice
export const reducer = (state, action) => {
	switch (action.type) {
		case "GET_CHARS":
			console.log("GET_CHARS");
			return { ...state, chars: action.payload };
		case "ADD_FAV":
			console.log("ADD_FAV");
			return { ...state, favs: [...state.favs, action.payload] };
		case "DELETE_FAV":
			console.log("DELETE_FAV");
			// El método filter crea un arreglo sin el id del char que recibió, es decir, lo borra
			const filterFavs = state.favs.filter(
				(fav) => fav.id !== action.payload.id
			);
			return { ...state, favs: filterFavs };
		case "TOGGLE_THEME":
			// console.log("TOGGLE_THEME");
			return { ...state, theme: "" };
	}
};
