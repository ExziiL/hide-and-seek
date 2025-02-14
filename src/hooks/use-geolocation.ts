import { useEffect, useState } from "react";

export interface Position {
	latitude: number;
	longitude: number;
}

export const useGeolocation = () => {
	const [position, setPosition] = useState<Position | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isPermissionGranted, setIsPermissionGranted] = useState(false);

	useEffect(() => {
		if (!navigator.geolocation) {
			setError("Geolocation is not supported by your browser");
			return;
		}

		const watchId = navigator.geolocation.watchPosition(
			(pos) => {
				setIsPermissionGranted(true);

				setPosition({
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude,
				});
			},
			(err) => {
				setError(err.message);
				setIsPermissionGranted(false);
			},
			{ enableHighAccuracy: true, timeout: 27000 },
		);

		return () => navigator.geolocation.clearWatch(watchId);
	}, []);

	return { position, error, isPermissionGranted };
};
