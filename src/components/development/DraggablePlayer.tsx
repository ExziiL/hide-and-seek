import L from "leaflet";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import { useDraggableLocation } from "../../stores/draggable-location";

interface DraggablePlayerProps {
	onPositionChange?: (position: [number, number]) => void;
}

const DraggablePlayer = ({ onPositionChange }: DraggablePlayerProps) => {
	const draggableLocation = useDraggableLocation();
	const circleRef = useRef<L.Circle | null>(null);
	const map = useMap();

	useEffect(() => {
		if (!circleRef.current) {
			const circle = L.circle(draggableLocation, {
				radius: 6,
				fillColor: "#3388ff",
				fillOpacity: 0.7,
				color: "#3388ff",
				weight: 2,
			});

			circle.addTo(map);

			circle.on("mousedown", function (event) {
				map.dragging.disable();

				// @ts-ignore
				let { lat: circleStartingLat, lng: circleStartingLng } = circle._latlng;
				let { lat: mouseStartingLat, lng: mouseStartingLng } = event.latlng;

				map.on("mousemove", (event) => {
					let { lat: mouseNewLat, lng: mouseNewLng } = event.latlng;
					let latDifference = mouseStartingLat - mouseNewLat;
					let lngDifference = mouseStartingLng - mouseNewLng;

					let center = [
						circleStartingLat - latDifference,
						circleStartingLng - lngDifference,
					];
					// @ts-ignore
					circle.setLatLng(center);
					// @ts-ignore
					onPositionChange?.(center);
				});
			});

			map.on("mouseup", () => {
				map.dragging.enable();
				map.removeEventListener("mousemove");
			});

			circle.on("dragend", (e) => {
				console.log("e: ", e);
				const newPos = e.target.getLatLng();
				onPositionChange?.([newPos.lat, newPos.lng]);
			});

			circleRef.current = circle;
		}

		return () => {
			if (circleRef.current) {
				circleRef.current.remove();
				circleRef.current = null;
			}
		};
	}, [map, draggableLocation, onPositionChange]);

	return null;
};

export default DraggablePlayer;
