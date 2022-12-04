import ElementStorage from "./ElementStorage";

export default interface NutritionStorage {
    name: string,
    carbohydrate: ElementStorage;
    fat: ElementStorage;
    protein: ElementStorage;
    vitamin: ElementStorage;
    mineral: ElementStorage;
    water: ElementStorage;
}
