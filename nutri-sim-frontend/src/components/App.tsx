import "../styles/App.css";
import React from 'react';
import Player from '../entities/Player';
import Login from "./Login";
import MainView from "./MainView";
import { fu } from "../utils/componentUtils";
import { Box, Center, ChakraProvider, CSSReset, Flex, Heading, theme } from "@chakra-ui/react";

interface Props {

}

export default class App extends React.Component<Props> {
    private player?: Player;

    public constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        var content: JSX.Element;
        if (this.player == null) {
            content = <Login onLoadGame={player => this.player = fu(this, player)} />
        } else {
            content = <MainView player={this.player} />
        }

        return <ChakraProvider theme={theme}>
            <CSSReset />
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                height="100vh"
            >
                <Flex direction="column" className="app-title" alignItems="center">
                    <Heading size="xl">NutriSim</Heading>
                    <Heading size="s">{this.player?.name ?? "Select Player"}</Heading>
                </Flex>
                <Box className="app-title-separator" width="100vw" height="20pt" />
                <Center flexGrow={1} className="app-main-content" width="100vw">
                    {content}
                </Center>
            </Flex>
        </ChakraProvider>;
    }
}
