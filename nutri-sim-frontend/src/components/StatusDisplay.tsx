import React from "react"
import status_figure from "../assets/liver/liver.initial.webp"
import Player from "../entities/Player"
import "../styles/StatusDisplay.css"
import BodyPartInfo from "./BodyPartInfo";

interface IProps {
	player?: Player;
}

interface IState {

}

export default class StatusDisplay extends React.Component<IProps, IState> {
	public render(): JSX.Element {
		var player = this.props.player;
		if (player === undefined) return <></>;
		console.log(player);
		return <div className="status-display">
			<ul className="body-part-list">
				<li><BodyPartInfo partName="Blood System" part={player.bloodSystem} /></li>
				<li><BodyPartInfo partName="Body" part={player.body} /></li>
				<li><BodyPartInfo partName="Arms" part={player.arm} /></li>
				<li><BodyPartInfo partName="Legs" part={player.leg} /></li>
				<li><BodyPartInfo partName="Liver" part={player.liver} /></li>
				<li><BodyPartInfo partName="Kidneys" part={player.kidney} /></li>
				<li><BodyPartInfo partName="Bladder" part={player.bladder} /></li>
			</ul>
			<p className="spacing" />
			<img src={status_figure} className="status-figure" alt="status figure" />
		</div>
	}
}
