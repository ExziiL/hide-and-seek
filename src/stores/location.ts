import { create } from "zustand";

interface LocationState {
	location: [number, number];
}

export interface LocationActions {
	actions: {
		setLocation: (coords: [number, number]) => void;
	};
}

export const useLocationStore = create<LocationState & LocationActions>()((set) => ({
	location: [0, 0],

	actions: {
		setLocation: async (coords) => {
			// if (!navigator.geolocation) {
			// 	console.log("Geolocation not supported");
			// 	return;
			// }

			// try {
			// 	const position = await new Promise<GeolocationPosition>((resolve, reject) => {
			// 		navigator.geolocation.getCurrentPosition(resolve, reject, {
			// 			enableHighAccuracy: true,
			// 			timeout: 5000,
			// 			maximumAge: 0,
			// 		});
			// 	});

			// 	set({ location: [position.coords.latitude, position.coords.longitude] });
			// } catch (error) {
			// 	console.error("Error getting location: ", error);
			// }

			return set({ location: coords });
		},
	},
}));

export const useLocation = () => useLocationStore((state) => state.location);

export const useLocationActions = () => useLocationStore((state) => state.actions);
