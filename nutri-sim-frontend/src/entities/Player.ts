import Action from "./Action";
import BodyPart from "./BodyPart";
import FoodStorage from "./FoodStorage";

export default interface Player {
	name: string;
	organs: BodyPart[];
	foodStorages: FoodStorage[];
	currentAction?: Action;
}
