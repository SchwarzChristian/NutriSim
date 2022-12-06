import "../styles/StorageDisplay.css"
import React from "react";
import WeightFormatter from "../utils/formatter/WeightFormatter";
import Storage from "../entities/Storage";
import StorageFormatter from "../utils/formatter/StorageFormatter";
import { CircularProgress, CircularProgressLabel, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import PercentageFormatter from "../utils/formatter/percentageFormatter";

interface IProps {
    storage: Storage;
    storageType?: StorageType;
}

export enum StorageType {
    EmptyDesired = -1,
    Neutral = 0,
    FullDesired = 1,
}

export default class ElementStorageDisplay extends React.Component<IProps> {
    private weightFormatter = new WeightFormatter();

    private get lowClass(): string {
        if (this.props.storageType === StorageType.EmptyDesired) return "status-good";
        else if (this.props.storageType === StorageType.FullDesired) return "status-bad";
        else return "status-medium";
    }

    private get mediumClass(): string {
        return "status-medium";
    }

    private get highClass(): string {
        if (this.props.storageType === StorageType.EmptyDesired) return "status-bad";
        else if (this.props.storageType === StorageType.FullDesired) return "status-good";
        else return "status-medium";
    }

    private get oversaturatedClass(): string {
        return "status-oversaturated";
    }

    public render(): JSX.Element {
        var element = this.props.storage;
        var className = "status-undefined";
        var formatter = new StorageFormatter(element);
        var percentage = formatter.percentage;
        var formattedPercentage = new PercentageFormatter().format(percentage);

        if (formatter.isLow) className = this.lowClass;
        else if (formatter.isMedium) className = this.mediumClass;
        else if (formatter.isHigh) className = this.highClass;
        else if (formatter.isOversaturated) {
            className = this.oversaturatedClass;
            percentage = percentage - 100;
        }

        var stored = this.weightFormatter.format(element.stored);
        var limit = this.weightFormatter.format(element.limit);

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