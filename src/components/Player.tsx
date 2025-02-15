import { Circle } from "react-leaflet/Circle";
import { useLocation } from "../stores/location";

const Player = () => {
	const location = useLocation();

	return (
		<Circle
			center={location}
			radius={6}
		/>
	);
};

export default Player;
