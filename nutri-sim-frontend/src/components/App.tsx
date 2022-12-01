import React, { createRef, MutableRefObject } from 'react';
import Player from '../entities/Player';
import '../styles/App.css';
import GameApi from '../utils/backendApi/GameApi';
import StatusDisplay from './StatusDisplay';

interface IProps {

}

interface IState {
  playerName?: string;
  player?: Player;
}

export default class App extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {};
  
  private loadGameInputRef = createRef<HTMLInputElement>();
  private statusDisplayRef = createRef<StatusDisplay>();
  private gameApi: GameApi = new GameApi();

  constructor(props: IProps) {
    super(props);

    this.loadGame = this.loadGame.bind(this);
  }

  public render(): JSX.Element {
    var header: JSX.Element;
    if (this.state.player === undefined) {
      header = <>
        <input type="text" ref={this.loadGameInputRef}></input>
        <button onClick={this.loadGame}>Load Game</button>
      </>;
    } else {
      header = <h1>{ this.state.player.name }</h1>
    }

    return (
      <div className="App">
        <header className="App-header">
          {header}
        </header>
        <StatusDisplay player={this.state.player} ref={this.statusDisplayRef} />
      </div>
    );
  }

  private loadGame(): void {
    if (this.loadGameInputRef.current === undefined) {
      throw new Error("load game input field not found");
    }

    var playerName = this.loadGameInputRef.current!.value;
    this.gameApi.loadGame(playerName)
      .then(player => this.setState({ player }));
  }
}
