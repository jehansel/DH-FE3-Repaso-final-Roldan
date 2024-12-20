import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

const Home = () => {
	// Coloco los estados que necesito y se declararon en context
	const {
		state: { chars },
	} = useCharStates();

	return (
		<div>
			<h1>Welcome to Rick y Morti API</h1>
			{console.log("Rederizo HOME")}
			{chars.map((char) => (
				// Le paso el objeto char a Card
				<Card key={char.id} char={char} />
			))}
		</div>
	);
};

export default Home;
