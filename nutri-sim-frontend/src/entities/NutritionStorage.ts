import ElementStorage from "./ElementStorage";

export default class NutritionStorage {
    public carbohydrate: ElementStorage = new ElementStorage();
    public fat: ElementStorage = new ElementStorage();
    public protein: ElementStorage = new ElementStorage();
    public vitamin: ElementStorage = new ElementStorage();
    public mineral: ElementStorage = new ElementStorage();
    public water: ElementStorage = new ElementStorage();
}
