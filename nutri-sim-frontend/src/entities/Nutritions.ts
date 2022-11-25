import { ElementStorage } from "./ElementStorage";

class NutritionStorage {
    public Carbohydrate: ElementStorage = new ElementStorage();
    public Fat: ElementStorage = new ElementStorage();
    public Protein: ElementStorage = new ElementStorage();
    public Vitamin: ElementStorage = new ElementStorage();
    public Mineral: ElementStorage = new ElementStorage();
    public Water: ElementStorage = new ElementStorage();
}

export { NutritionStorage };