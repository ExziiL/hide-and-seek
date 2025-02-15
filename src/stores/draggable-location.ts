import { create } from "zustand";

interface DraggableLocationState {
	draggableLocation: [number, number];
}

export interface DraggableLocationActions {
	actions: {
		setDraggableLocation: (coords: [number, number]) => void;
	};
}

export const useDraggableLocationStore = create<
	DraggableLocationState & DraggableLocationActions
>()((set) => ({
	draggableLocation: [49.007043030126354, 12.099156534308015],

	actions: {
		setDraggableLocation: async (coords) => {
			return set({ draggableLocation: coords });
		},
	},
}));

export const useDraggableLocation = () =>
	useDraggableLocationStore((state) => state.draggableLocation);

export const useDraggableLocationActions = () =>
	useDraggableLocationStore((state) => state.actions);
