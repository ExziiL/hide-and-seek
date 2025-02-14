import { create } from "zustand";

interface LocationState {
	location: [number, number];
}

export interface LocationActions {
	actions: {
		setLocation: (coords: [number, number]) => void;
	};
}

export const useLocationStore = create<LocationState & LocationActions>()(
	(set) => ({
		location: [0, 0],

		actions: {
			setLocation: async (coords) => {
				return set({ location: coords });
			},
		},
	}),
);

export const useLocation = () => useLocationStore((state) => state.location);

export const useLocationActions = () =>
	useLocationStore((state) => state.actions);
