import React from "react";
import BodyPart from "../entities/BodyPart";
import ElementStorage from "../entities/ElementStorage";
import "../styles/BodyPartInfo.css";

interface Props {
    partName: string;
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

        return <table className="body-part-info" onClick={this.toogleIsExpanded}>
            <thead>
                <tr>
                    <th colSpan={2} className="part-name">
                        {this.props.partName}
                    </th>
                </tr>
            </thead>
            <tbody hidden={!this.state.isExpanded}>
                {this.buildRow("Carbohydrate", nutritions.carbohydrate)}
                {this.buildRow("Fat", nutritions.fat)}
                {this.buildRow("Protein", nutritions.protein)}
                {this.buildRow("Vitamin", nutritions.vitamin)}
                {this.buildRow("Mineral", nutritions.mineral)}
                {this.buildRow("Water", nutritions.water)}
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

        percentage = this.round(percentage);
        var valueString = `${this.round(data.stored)} / ${data.limit} (${percentage.toString()}%)`
        return <tr className={"nutrition-element-row nutrition-element-" + className}>
            <th className="nutrition-element-name">{name}</th>
            <td className="nutrition-element-value">
                {valueString}
            </td>
        </tr>
    }

    private round(input: number, digits: number = 2): number {
        var multiplier = Math.pow(10, digits);
        return Math.round(input * multiplier) / multiplier;
    }
}
