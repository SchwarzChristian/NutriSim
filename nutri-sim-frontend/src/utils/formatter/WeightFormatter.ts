import MathExtensions from "../MathExtensions";

export default class WeightFormatter {
    public format(weight: number): string {
        if (weight <= 0) return "0.00 g";
        var math = new MathExtensions();
        var factor = 1;
        var unit = "g";
        
        if (weight < 0.001) {
            factor = 1_000_000;
            unit = "µg";
        } else if (weight < 1) {
            factor = 1_000;
            unit = "mg";
        } else if (weight > 1_000) {
            factor = 1 / 1_000;
            unit = "kg";
        } else if (weight > 1_000_000) {
            factor = 1 / 1_000_000;
            unit = "t";
        }
        
        return `${math.round(weight * factor)} ${unit}`;
    }


}