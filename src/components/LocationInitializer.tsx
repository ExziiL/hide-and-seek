import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocationActions, useLocationStore } from "../stores/location";
import { fetchGeolocation } from "../util/location-service";

export const LocationInitializer = () => {
	const { setLocation } = useLocationActions();

	const { data, error, status } = useQuery({
		queryKey: ["geolocation"],
		queryFn: fetchGeolocation,
		enabled: typeof window !== "undefined" && !!navigator.geolocation,
		staleTime: Infinity,
		retry: 1,
	});

	useEffect(() => {
		if (status === "success" && data) {
			setLocation(data);
		}
	}, [status, data, setLocation]);

	useEffect(() => {
		if (error) {
			console.error("Geolocation error:", error);
		}
	}, [error]);

	// Optional: Sync loading state with store if needed
	return null;
};
