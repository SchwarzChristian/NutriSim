import React from "react";
import Player from "../entities/Player";
import StatusDisplay from "./StatusDisplay";

interface Props {
	player: Player;
}

export default class MainView extends React.Component<Props> {
	public constructor(props: Props) {
		super(props);
	}

	public render() {
		return <StatusDisplay player={this.props.player} />;
	}
}