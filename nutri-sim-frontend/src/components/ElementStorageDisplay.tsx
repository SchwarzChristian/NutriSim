import React from "react";
import ElementStorage from "../entities/ElementStorage";
import WeightFormatter from "../utils/formatter/WeightFormatter";
import MathExtensions from "../utils/MathExtensions";

interface IProps {
    storage: ElementStorage;
}

interface IState {

}

export default class ElementStorageDisplay extends React.Component<IProps, IState> {
    private math = new MathExtensions();
    private weightFormatter = new WeightFormatter();

    public render(): JSX.Element {
        var data = this.props.storage;
        var percentage = data.stored / data.limit;
        var className = "low";
        
        if (percentage > 0.1) className = "ok";
        if (percentage > 0.8) className = "good";
        if (percentage > 1) className = "oversaturated";

        percentage = this.math.round(percentage);
        var stored = this.weightFormatter.format(data.stored);
        var limit = this.weightFormatter.format(data.limit);
        var valueString = `${stored} / ${limit} (${percentage.toString()}%)`

        return <p className="element-storage">
            {valueString}
        </p>;
    }
}