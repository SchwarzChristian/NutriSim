import React from "react";
import BodyPart from "../entities/BodyPart";
import ElementStorage from "../entities/ElementStorage";
import "../styles/BodyPartInfo.css";

interface Props {
    part: BodyPart;
}

interface State {
    isExpanded: boolean;
}

export default class BodyPartInfo extends React.Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            isExpanded: false
        }

        this.toogleIsExpanded = this.toogleIsExpanded.bind(this);
    }

    public render(): JSX.Element {
        var nutritions = this.props.part.nutritions;

        var tag = <></>;

        return <table className="body-part-info" onClick={this.toogleIsExpanded}>
            <thead>
                <tr>
                    <th colSpan={2} className="part-name">
                        {this.props.part.name}
                    </th>
                </tr>
            </thead>
            <tbody hidden={!this.state.isExpanded}>
                {this.buildRow("Carbohydrate", nutritions.Carbohydrate)}
                {this.buildRow("Fat", nutritions.Fat)}
                {this.buildRow("Protein", nutritions.Protein)}
                {this.buildRow("Vitamin", nutritions.Vitamin)}
                {this.buildRow("Mineral", nutritions.Mineral)}
                {this.buildRow("Water", nutritions.Water)}
            </tbody>
        </table>
    }

    public toogleIsExpanded(): void {
        if (this.state.isExpanded) this.hide();
        else this.show();
    }

    public show(): void {
        this.setIsExpanded(true);
    }

    public hide(): void {
        this.setIsExpanded(false);
    }

    public setIsExpanded(value: boolean): void {
        var state = this.state;
        state.isExpanded = value;
        this.setState(state);
    }

    private buildRow(name: string, data: ElementStorage): JSX.Element {
        var percentage = data.stored / data.limit;
        var className = "low";
        
        if (percentage > 0.1) className = "ok";
        if (percentage > 0.8) className = "good";
        if (percentage > 1) className = "oversaturated";

        var valueString = `${data.stored} / ${data.limit} (${percentage.toString(2)}%)`
        return <tr className={"nutrition-element-row nutrition-element-" + className}>
            <th className="nutrition-element-name">{name}</th>
            <td className="nutrition-element-value">
                {valueString}
            </td>
        </tr>

    }
}
