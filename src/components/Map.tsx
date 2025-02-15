import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import { useDraggableLocationActions } from "../stores/draggable-location";
import GameField from "./GameField";
import Player from "./Player";
import DraggablePlayer from "./development/DraggablePlayer";

function Map() {
	const POSITION: LatLngTuple = [49.007043030126354, 12.099156534308015];
	const { setDraggableLocation } = useDraggableLocationActions();

	const handlePlayerMove = (newPosition: [number, number]) => {
		setDraggableLocation(newPosition);
		// Add bounding box check logic here
	};

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

			<Player />

			<DraggablePlayer onPositionChange={handlePlayerMove} />

			<GameField />
		</MapContainer>
	);
}

export default Map;
