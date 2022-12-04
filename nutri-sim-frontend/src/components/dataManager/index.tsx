import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FoodManager from "./FoodManager";

interface Props {
	onExit?: () => void;
}

export default class DataManager extends React.Component<Props> {
	public constructor(props: Props) {
		super(props);

		// method bindings...
	}

	public render() {
		return <>
			<Button onClick={this.props.onExit} >Back to App</Button>
            <Flex direction="column" className="app-title" alignItems="center">
				<Heading size="xl">NutriSim - Data Manager</Heading>
            </Flex>
            <Box className="app-title-separator" width="100vw" height="20pt" />
			<Center flexGrow={1} className="app-main-content" width="100vw">
				<FoodManager />
            </Center>
        </>;
	}
}