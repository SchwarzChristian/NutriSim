import React from "react"
import BodyPart from "../entities/BodyPart";
import Player from "../entities/Player"
import BodyPartInfo from "./BodyPartInfo";
import bladder from "../assets/bladder/bladder.final.webp";
import kidney from "../assets/kidney/kidney.final.webp";
import liver from "../assets/liver/liver.final.webp";
import none from "../assets/liver/liver.initial.webp";
import { Accordion, Box, Flex, Image } from "@chakra-ui/react";

interface Props {
	player?: Player;
}

export default class StatusDisplay extends React.Component<Props> {
	private partInfoRefs: Array<BodyPartInfo | null> = [];
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

		this.partInfoRefs = [];
		var partInfos = player.bodyParts.map((it, key) => <BodyPartInfo
			part={it}
			key={key}
			ref={ref => this.partInfoRefs[key] = ref}
		/>);

		return <Flex direction="row" width="100%">
			<Accordion maxHeight="800px" overflow="auto">
				{partInfos}
			</Accordion>
			<Box flexGrow={1} color="transparent" />
			<Image src={this.getImage()} alt="status figure" />
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
