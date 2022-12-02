export default class MathExtensions {
    public round(input: number, digits: number = 2): number {
        var multiplier = Math.pow(10, digits);
        return Math.round(input * multiplier) / multiplier;
    }
}