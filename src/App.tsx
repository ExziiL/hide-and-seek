import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocationInitializer } from "./components/LocationInitializer";
import Map from "./components/Map";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="p-4">
				<Map />
			</div>
			<LocationInitializer />
		</QueryClientProvider>
	);
}

export default App;
