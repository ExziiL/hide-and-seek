import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocationInitializer } from "./components/LocationInitializer";
import Map from "./components/Map";
import { useDraggableLocation } from "./stores/draggable-location";
import { useLocation } from "./stores/location";

const queryClient = new QueryClient();

function App() {
	const location = useLocation();
	const draggableLocation = useDraggableLocation();

	return (
		<QueryClientProvider client={queryClient}>
			<div className=" h-screen p-4">
				<Map />

				<div className="flex w-full flex-row justify-between">
					<div>
						your current possition is:
						<div>Lat: {location[0]}</div> <div>Lng: {location[1]}</div>
					</div>

					<div>
						current draggable position is:
						<div>Lat: {draggableLocation[0]}</div>{" "}
						<div>Lng: {draggableLocation[1]}</div>
					</div>

					<div className="absolute right-4 bottom-1">v0.2.1</div>
				</div>
			</div>
			<LocationInitializer />
		</QueryClientProvider>
	);
}

export default App;
