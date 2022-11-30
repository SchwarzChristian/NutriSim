import React from "react"
import status_figure from "../assets/liver/liver.initial.webp"
import BodyPart from "../entities/BodyPart"
import NutritionStorage from "../entities/NutritionStorage"
import "../styles/StatusDisplay.css"
import BodyPartInfo from "./BodyPartInfo"

export default class StatusDisplay extends React.Component {
	public render(): JSX.Element {
		var liver: BodyPart = {
			name: "Liver",
			nutritions: new NutritionStorage(),
		};
	
		var heart: BodyPart = {
			name: "Heart",
			nutritions: new NutritionStorage(),
		};
	
		return <div className="status-display">
			<ul className="body-part-list">
				<li key={liver.name}><BodyPartInfo part={liver}></BodyPartInfo></li>
				<li key={heart.name}><BodyPartInfo part={heart}></BodyPartInfo></li>
			</ul>
			<p className="spacing" />
			<img src={status_figure} className="status-figure" alt="status figure" />
		</div>
	}

	private animate() {

	}
}
