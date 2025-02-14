import { useEffect } from "react";
import { useGeolocation } from "../hooks/use-geolocation";
import { useLocationActions } from "../stores/location";

export const LocationInitializer = () => {
	const { position } = useGeolocation();
	const { setLocation } = useLocationActions();

	useEffect(() => {
		console.log("position: ", position);
		if (position) {
			setLocation([position.latitude, position.longitude]);
		}
	}, [position, setLocation]);

	// Optional: Sync loading state with store if needed
	return null;
};
