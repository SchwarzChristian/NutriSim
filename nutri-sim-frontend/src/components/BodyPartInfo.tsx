import React from "react";
import { BodyPart } from "../entities/BodyPart";
import { ElementStorage } from "../entities/ElementStorage";
import "../styles/BodyPartInfo.css";

interface Props {
    part: BodyPart;
}

interface State {
    isExpanded: boolean;
}

export default class BodyPartInfo extends React.Component<Props, State> {
    public render(): JSX.Element {
        var nutritions = this.props.part.nutritions;
        return <>
            <table>
                <tr>
                    <th colSpan={2} className="part-name">
                        {this.props.part.name}
                    </th>
                </tr>
                {this.buildRow("Carbohydrate", nutritions.Carbohydrate)}
                {this.buildRow("Fat", nutritions.Fat)}
                {this.buildRow("Protein", nutritions.Protein)}
                <tr><td colSpan={2}><hr /></td></tr>
                {this.buildRow("Vitamin", nutritions.Vitamin)}
                {this.buildRow("Mineral", nutritions.Mineral)}
                {this.buildRow("Water", nutritions.Water)}
            </table>
        </>
        
    }

    private buildRow(name: string, data: ElementStorage): JSX.Element {
        var percentage = data.stored / data.limit;
        var className = "low";
        
        if (percentage > 0.1) className = "ok";
        if (percentage > 0.8) className = "good";
        if (percentage > 1) className = "oversaturated";

        return <tr className={"nutrition-element-" + className}>
            <th className="nutrition-element-name">{name}</th>
            <td className="nutrition-element-value">
                {data.stored} / {data.limit} ({percentage.toString(2)}%)
            </td>
        </tr>

    }
}
