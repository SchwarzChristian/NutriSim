import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Action from "../entities/Action";
import Player from "../entities/Player";
import ActionApi from "../utils/backendApi/ActionApi";
import { fu } from "../utils/componentUtils";

interface IProps {
    player: Player;
}

export default class ActionPanel extends React.Component<IProps> {
    private actions?: Action[];
    private actionsApi: ActionApi = new ActionApi(this.props.player);

    public render() {
        if (this.actions === undefined) {
            this.actionsApi.getActions().then(actions => this.actions = fu(this, actions));
            return;
        }

        return <SimpleGrid columns={2} spacing={10}>
            {}
            <GridItem></GridItem>
        </SimpleGrid>;
    }
}