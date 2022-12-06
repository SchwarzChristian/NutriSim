import { AccordionButton, AccordionItem, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FoodStorage from "../entities/FoodStorage";
import StorageDisplay from "./StorageDisplay";

interface Props {
	foodStorage: FoodStorage;
}

export default class FoodStorageInfo extends React.Component<Props> {
	public constructor(props: Props) {
		super(props);

		// method bindings...
	}

	public render() {
		return <AccordionItem>
			<AccordionButton>
				<Flex direction="row" width="100%" minWidth="300pt" alignItems="center">
					<Heading size="l" flexGrow="1">{this.props.foodStorage.name}</Heading>
					<StorageDisplay
						storage={this.props.foodStorage}
					/>
				</Flex>
			</AccordionButton>
		</AccordionItem>
	}
}