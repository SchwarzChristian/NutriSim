import { Center, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import React from "react";
import Player from "../entities/Player";
import GameApi from "../utils/backendApi/GameApi";

interface Props {
	onLoadGame: (player: Player) => void;
}

export default class Login extends React.Component<Props> {
	private loadGameInput?: HTMLInputElement | null;
	private gameApi: GameApi = new GameApi();

	public constructor(props: Props) {
		super(props);

		this.loadGame = this.loadGame.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	public render() {
		return <Center height="100%">
			<InputGroup width="fit-content">
				<Input
					ref={ref => this.loadGameInput = ref}
					type="text"
					placeholder="Player Name"
					width="300pt"
					onKeyUp={this.onKeyPress}
				/>
				<InputRightElement width="fit-content">
					<Button onClick={this.loadGame}>
						Create / Load
					</Button>
				</InputRightElement>
			</InputGroup>
		</Center>;
	}

	private onKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === "Enter") this.loadGame();
	}

	private loadGame(): void {
		if (this.loadGameInput === undefined || this.loadGameInput === null) {
		  	throw new Error("load game input field not found");
		}
	
		var playerName = this.loadGameInput.value;
		this.gameApi.loadGame(playerName)
			.then(player => this.props.onLoadGame(player));
	  }
}