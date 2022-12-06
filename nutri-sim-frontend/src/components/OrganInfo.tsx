import { AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import BodyPart from "../entities/BodyPart";
import Storage from "../entities/Storage";
import NutritionStorage from "../entities/NutritionStorage";
import StorageFormatter from "../utils/formatter/StorageFormatter";
import StorageDisplay, { StorageType } from "./StorageDisplay";
import iconStatusLow from "../assets/icons/statusLow.svg";
import iconStatusOk from "../assets/icons/statusOk.svg";
import iconStatusGood from "../assets/icons/statusGood.svg";
import iconStatusOversaturated from "../assets/icons/statusOversaturated.svg";

interface Props {
    part: BodyPart;
}

export default class OrganInfo extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        var nutritions: NutritionStorage = this.props.part.nutritions;
        var status: IStatusLevelCounts = {
            low: 0,
            ok: 0,
            good: 0,
            oversaturated: 0,
        };
        
        [
            nutritions.carbohydrate,
            nutritions.fat,
            nutritions.protein,
            nutritions.vitamin,
            nutritions.mineral,
            nutritions.water,
        ].forEach(element => this.countStatus(status, element));
        [
            nutritions.waste,
            nutritions.toxic,
        ].forEach(element => this.countStatus(status, element, true));

        return <>
            <AccordionItem>
                <AccordionButton>
                    <Flex alignItems="center" width="100%" minWidth="300pt">
                        <Heading size="l">{this.props.part.name}</Heading>
                        <Box flexGrow={1} />
                        <HStack>
                            {this.buildStatus(status.low, iconStatusLow)}
                            {this.buildStatus(status.ok, iconStatusOk)}
                            {this.buildStatus(status.good, iconStatusGood)}
                            {this.buildStatus(status.oversaturated, iconStatusOversaturated)}
                        </HStack>
                    </Flex>
                </AccordionButton>
                <AccordionPanel>
                    <SimpleGrid columns={4} spacing="8pt">
                        {this.buildRow("Carbohydrate", nutritions.carbohydrate)}
                        {this.buildRow("Fat", nutritions.fat)}
                        {this.buildRow("Protein", nutritions.protein)}
                        {this.buildRow("Vitamin", nutritions.vitamin)}
                        {this.buildRow("Mineral", nutritions.mineral)}
                        {this.buildRow("Water", nutritions.water)}
                        {this.buildRow("Waste", nutritions.waste, true)}
                        {this.buildRow("Toxic", nutritions.toxic, true)}
                    </SimpleGrid>
                </AccordionPanel>
            </AccordionItem>
        </>;
    }

    private buildStatus(count: number, icon: string) : JSX.Element {
        if (count < 1) return <></>;
        return <Box>
            <Image src={icon} width="16pt" />
            {count}
        </Box>
    }

    private buildRow(name: string, data: Storage, doInvert: boolean = false): JSX.Element {
        var storageType = doInvert ? StorageType.EmptyDesired : StorageType.FullDesired;
        return <Box>
            <StorageDisplay storage={data} storageType={storageType} />
            <Text textAlign="center">{name}</Text>
        </Box>
    }

    private countStatus(status: IStatusLevelCounts, element: Storage, doInvert: boolean = false) {
        var formatter = new StorageFormatter(element, doInvert);
        if (formatter.isLow) status.low += 1;
        if (formatter.isMedium) status.ok += 1;
        if (formatter.isHigh) status.good += 1;
        if (formatter.isOversaturated) status.oversaturated += 1;
    }
}

interface IStatusLevelCounts {
    low: number;
    ok: number;
    good: number;
    oversaturated: number;
}
