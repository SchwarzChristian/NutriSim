import Storage from "../../entities/Storage";

export default class StorageFormatter {
    private value: Storage;
    private isInverted: boolean;

	constructor(value: Storage, isInverted: boolean = false) {
        this.value = value;
        this.isInverted = isInverted;
	}

    public get percentage(): number {
        return this.value.stored / this.value.limit * 100;
    }

    public get isLow(): boolean {
        if (this.isInverted) return this.percentage > 80 && this.percentage <= 100;
        return this.percentage <= 20;
    }

    public get isMedium(): boolean {
        if (this.percentage <= 20) return false;
        if (this.percentage > 80) return false;
        return true;
    }

    public get isHigh(): boolean {
        if (this.isInverted) return this.percentage <= 20;
        if (this.percentage <= 80) return false;
        if (this.percentage > 100) return false;
        return true;
    }

    public get isOversaturated(): boolean {
        return this.percentage > 100;
    }
}