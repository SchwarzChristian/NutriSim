import ElementStorage from "../../entities/ElementStorage";

export default class ElementStorageFormatter {
	private value: ElementStorage;

	constructor(value: ElementStorage) {
		this.value = value;
	}

    public get percentage(): number {
        return this.value.stored / this.value.limit * 100;
    }

    public get isLow(): boolean {
        return this.percentage <= 20;
    }

    public get isOk(): boolean {
        if (this.percentage <= 20) return false;
        if (this.percentage > 80) return false;
        return true;
    }

    public get isGood(): boolean {
        if (this.percentage <= 80) return false;
        if (this.percentage > 100) return false;
        return true;
    }

    public get isOversaturated(): boolean {
        return this.percentage > 100;
    }
}