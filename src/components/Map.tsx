import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Circle, MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import { useLocation } from "../stores/location";
import GameField from "./GameField";

function Map() {
	const POSITION: LatLngTuple = [49.007043030126354, 12.099156534308015];
	const location = useLocation();

	return (
		<MapContainer
			className="h-[420px] w-full rounded-md"
			center={POSITION}
			zoom={17}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Circle
				center={location}
				radius={6}
			/>

			<GameField />
		</MapContainer>
	);
}

export default Map;
