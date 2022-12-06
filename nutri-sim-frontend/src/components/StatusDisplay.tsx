import React from "react"
import BodyPart from "../entities/BodyPart";
import Player from "../entities/Player"
import OrganInfo from "./OrganInfo";
import bladder from "../assets/bladder/bladder.final.webp";
import kidney from "../assets/kidney/kidney.final.webp";
import liver from "../assets/liver/liver.final.webp";
import none from "../assets/liver/liver.initial.webp";
import { Accordion, Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import FoodStorageInfo from "./FoodStorageInfo";

interface Props {
	player?: Player;
}

export default class StatusDisplay extends React.Component<Props> {
	private organInfoRefs: Array<OrganInfo | null> = [];
	private selected?: BodyPart;
	private imageMap = {
		none,
		bladder,
		kidney,
		liver,
	}

	public render(): JSX.Element {
		var player = this.props.player;
		if (player === undefined) return <></>;

		this.organInfoRefs = [];
		var organInfos = player.organs.map((it, key) => <OrganInfo
			part={it}
			key={key}
			ref={ref => this.organInfoRefs[key] = ref}
		/>);

		var foodStorageInfos = player.foodStorages.map((it, key) => <FoodStorageInfo
			foodStorage={it}
			key={key}
		/>);

		return <Flex direction="row" width="100%">
			<VStack>
				<Heading size="xl">Digestive System</Heading>
				<Accordion maxHeight="800px" overflow="auto">
					{foodStorageInfos}
				</Accordion>
			</VStack>
			<Box flexGrow={1} color="transparent" />
			<Image src={this.getImage()} alt="status figure" />
			<Box flexGrow={1} color="transparent" />
			<VStack>
				<Heading size="xl">Organs</Heading>
				<Accordion maxHeight="800px" overflow="auto">
					{organInfos}
				</Accordion>
			</VStack>
		</Flex>
	}

	private getImage(): string {
		if (this.selected === undefined) return this.imageMap.none;
		if (this.selected.name === "Bladder") return this.imageMap.bladder;
		if (this.selected.name === "Kidney") return this.imageMap.kidney;
		if (this.selected.name === "Liver") return this.imageMap.liver;
		return this.imageMap.none;
	}
}
