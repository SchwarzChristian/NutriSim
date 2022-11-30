import NutritionStorage from "./NutritionStorage";

export default class BodyPart {
    public name: string = "<undefined>";
    public nutritions: NutritionStorage = new NutritionStorage;
}
