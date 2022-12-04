export default class PercentageFormatter {
	public format(input: number): string {
		return input.toFixed(2) + " %";
	}
}