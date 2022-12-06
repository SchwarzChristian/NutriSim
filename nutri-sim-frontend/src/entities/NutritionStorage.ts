import Storage from "./Storage";

export default interface NutritionStorage {
    name: string,
    carbohydrate: Storage;
    fat: Storage;
    protein: Storage;
    vitamin: Storage;
    mineral: Storage;
    water: Storage;
    waste: Storage;
    toxic: Storage;
}
