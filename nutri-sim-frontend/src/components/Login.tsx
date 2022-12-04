import { Center, InputGroup, Input, InputRightElement, Button, VStack, Card, CardBody, Heading, Divider } from "@chakra-ui/react"
import React from "react";
import Player from "../entities/Player";
import PlayerApi from "../utils/backendApi/PlayerApi";
import { fu } from "../utils/componentUtils";

interface Props {
	onLoadGame: (player: Player) => void;
}

export default class Login extends React.Component<Props> {
	private loadGameInput?: HTMLInputElement | null;
	private gameApi: PlayerApi = new PlayerApi();
	private gameNames: string[] = [];
	private isNamesRequested: boolean = false;

	public constructor(props: Props) {
		super(props);

		this.loadGame = this.loadGame.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	public render() {
		if (!this.isNamesRequested) {
			this.gameApi.getPlayerNames().then(games => this.gameNames = fu(this, games));
			this.isNamesRequested = true;
		}
		
		return <Center height="100%"><Card width="100%"><CardBody width="100%">
			<VStack width="100%">
				<Heading size="xl">Login</Heading>
				<Divider />
				{this.gameNames.map(game =>
					<Button
						key={game}
						width="100%"
						onClick={() => this.loadGame(game)}
					>{game}</Button>
				)}
				<InputGroup width="fit-content">
					<Input
						ref={ref => this.loadGameInput = ref}
						type="text"
						placeholder="Player Name"
						width="300pt"
						onKeyUp={this.onKeyPress}
					/>
					<InputRightElement width="fit-content">
						<Button onClick={() => this.loadGame(this.loadGameInput?.value)}>
							Create / Load
						</Button>
					</InputRightElement>
				</InputGroup>
			</VStack>
		</CardBody></Card></Center>;
	}

	private onKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === "Enter") this.loadGame(this.loadGameInput?.value);
	}

	private loadGame(playerName?: string): void {
		if (this.loadGameInput == null) {
		  	throw new Error("load game input field not found");
		}
	
		this.gameApi.getPlayer(playerName!)
			.then(player => this.props.onLoadGame(player));
	  }
}