import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	// Estado para guardar el valor del API
	const [char, setChar] = useState({});

	// Recibo el ID de la ruta dinámica
	const params = useParams();
	console.log(params);

	// Hago un nuevo llamado a la API con el ID
	const url = "https://rickandmortyapi.com/api/character/" + params.id;

	useEffect(() => {
		axios(url).then((res) => {
			console.log(res.data);
			setChar(res.data);
		});
	}, []);

	// Renderizo la información detallada
	return (
		<div>
			<h2>{char.name}</h2>
			<img src={char.image} alt={char.name} />
			<h4>Status: {char.status}</h4>
			<h4>Especie: {char.species}</h4>
		</div>
	);
};

export default Detail;
