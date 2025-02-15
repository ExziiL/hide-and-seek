import { LatLngBoundsExpression } from "leaflet";
import { useState } from "react";
import { Rectangle } from "react-leaflet";

const GameField = () => {
	const [boundingBox, setBoundingBox] = useState<LatLngBoundsExpression>([
		[49.00716, 12.09855],
		[49.00756, 12.09918],
	]);

	return (
		<div>
			<Rectangle
				bounds={boundingBox}
				pathOptions={{ color: "black" }}
			/>
		</div>
	);
};

export default GameField;
