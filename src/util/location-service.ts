export const fetchGeolocation = (): Promise<[number, number]> => {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error("Geolocation not supported"));
			return;
		}

		const watchId = navigator.geolocation.watchPosition(
			(position) =>
				resolve([position.coords.latitude, position.coords.longitude]),
			(error) => reject(error),
			{ enableHighAccuracy: true, timeout: 5000 },
		);

		return () => navigator.geolocation.clearWatch(watchId);
	});
};
