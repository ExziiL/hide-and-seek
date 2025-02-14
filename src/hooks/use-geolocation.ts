import { useQuery } from "@tanstack/react-query";
import { fetchGeolocation } from "../util/location-service";

export const useGeolocation = () => {
	const { data: position, error } = useQuery({
		queryKey: ["geolocation"],
		queryFn: fetchGeolocation,
		staleTime: Infinity,
	});

	return { position, error };
};
