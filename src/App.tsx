import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocationInitializer } from "./components/LocationInitializer";
import Map from "./components/Map";
import { useLocation } from "./stores/location";

const queryClient = new QueryClient();

function App() {
	const location = useLocation();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="p-4">
				<Map />

				<div>
					your current possition is:
					<div>Lat: {location[0]}</div> <div>Lng: {location[1]}</div>
				</div>

				<div>v0.2</div>
			</div>
			<LocationInitializer />
		</QueryClientProvider>
	);
}

export default App;
