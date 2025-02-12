import { LatLngExpression } from "leaflet";

export interface Player {
	id: string;
	username: string;
	isInProximity?: boolean;
	gameRole?: "hider" | "seeker";
	location: LatLngExpression;
	isCurrent: boolean;
}
