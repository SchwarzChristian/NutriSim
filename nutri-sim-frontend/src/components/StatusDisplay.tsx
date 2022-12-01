import React from "react"
import status_figure from "../assets/liver/liver.initial.webp"
import Player from "../entities/Player"
import "../styles/StatusDisplay.css"
import BodyPartInfo from "./BodyPartInfo";

interface IProps {
	player?: Player;
}

export default class StatusDisplay extends React.Component<IProps> {
	public render(): JSX.Element {
		var player = this.props.player;
		if (player === undefined) return <></>;
		console.log(player);
		return <div className="status-display">
			<ul className="body-part-list">
				<BodyPartInfo partName="Blood System" part={player.bloodSystem} />
				<BodyPartInfo partName="Body" part={player.body} />
				<BodyPartInfo partName="Arms" part={player.arm} />
				<BodyPartInfo partName="Legs" part={player.leg} />
				<BodyPartInfo partName="Liver" part={player.liver} />
				<BodyPartInfo partName="Kidneys" part={player.kidney} />
				<BodyPartInfo partName="Bladder" part={player.bladder} />
			</ul>
			<p className="spacing" />
			<img src={status_figure} className="status-figure" alt="status figure" />
		</div>
	}
}
