import status_figure from "../assets/liver/liver.initial.webp"
import { BodyPart } from "../entities/BodyPart"
import { NutritionStorage } from "../entities/NutritionStorage"
import "../styles/StatusDisplay.css"
import BodyPartInfo from "./BodyPartInfo"

function StatusDisplay() {
	var part: BodyPart = {
		name: "Liver",
		nutritions: new NutritionStorage(),
	};

	return <div className="status-display">
		<img src={status_figure} className="status-figure" alt="status figure" />
		<BodyPartInfo part={part}></BodyPartInfo>
		<button onClick={animate}>Show Liver</button>
	</div>
}

function animate() {
	
}

export { StatusDisplay }
