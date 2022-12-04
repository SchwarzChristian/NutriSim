import "../styles/ElementStorageDisplay.css"
import React from "react";
import ElementStorage from "../entities/ElementStorage";
import WeightFormatter from "../utils/formatter/WeightFormatter";
import ElementStorageFormatter from "../utils/formatter/ElementStorageFormatter";
import { CircularProgress, CircularProgressLabel, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import PercentageFormatter from "../utils/formatter/percentageFormatter";

interface IProps {
    storage: ElementStorage;
}

export default class ElementStorageDisplay extends React.Component<IProps> {
    private weightFormatter = new WeightFormatter();

    public render(): JSX.Element {
        var element = this.props.storage;
        var className = "status-undefined";
        var formatter = new ElementStorageFormatter(element);
        var percentage = formatter.percentage;

        if (formatter.isLow) className = "status-low";
        else if (formatter.isOk) className = "status-ok";
        else if (formatter.isGood) className = "status-good";
        else if (formatter.isOversaturated) {
            className = "status-oversaturated";
            percentage = percentage - 100;
        }

        var stored = this.weightFormatter.format(element.stored);
        var limit = this.weightFormatter.format(element.limit);

        var formattedPercentage = new PercentageFormatter().format(percentage);
        return <CircularProgress
            className={className}
            value={percentage}
            size="70pt"
        >
            <CircularProgressLabel>
                <VStack spacing="0" width="100%">
                    <Text fontSize="8pt">{stored}</Text>
                    <Flex width="100%" alignItems="center">
                        <Divider width="8pt" marginLeft="10pt" />
                        <Text fontSize="8pt" flexGrow="1" noOfLines={1} >{formattedPercentage}</Text>
                        <Divider width="8pt" marginRight="10pt" />
                    </Flex>
                    <Text fontSize="8pt">{limit}</Text>
                </VStack>
            </CircularProgressLabel>
        </CircularProgress>;
    }
}