import Storage from "./Storage";
import Food from "./Food";

export default interface FoodStorage extends Storage {
	name: string;
	content: Food[];
}
