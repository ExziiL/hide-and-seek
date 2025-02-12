export const fetchGeolocation = (): Promise<[number, number]> => {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error("Geolocation not supported"));
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => resolve([position.coords.latitude, position.coords.longitude]),
			(error) => reject(error),
			{ enableHighAccuracy: true, timeout: 10000 },
		);
	});
};
