import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

const Favs = () => {
	// Coloco los estados que necesito y se declararon en context
	const {
		state: { favs },
	} = useCharStates();

	return (
		<div>
			{favs.map((char) => (
				<Card key={char.id} char={char} />
			))}
		</div>
	);
};

export default Favs;
