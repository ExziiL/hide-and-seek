import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import GameField from "./GameField";
import Player from "./Player";
import DraggablePlayer from "./development/DraggablePlayer";

function Map() {
	const POSITION: LatLngTuple = [49.007043030126354, 12.099156534308015];
	const [playerPosition, setPlayerPosition] = useState<[number, number]>([
		49.007043030126354, 12.099156534308015,
	]);

	const handlePlayerMove = (newPosition: [number, number]) => {
		setPlayerPosition(newPosition);
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

			<DraggablePlayer
				onPositionChange={handlePlayerMove}
				position={playerPosition}
			/>

			<GameField />
		</MapContainer>
	);
}

export default Map;
