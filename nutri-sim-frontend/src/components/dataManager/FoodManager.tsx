import { Button, Input, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import Food from "../../entities/Food";
import FoodApi from "../../utils/backendApi/FoodApi";
import WeightFormatter from "../../utils/formatter/WeightFormatter";

interface Props {
}

export default class FoodManager extends React.Component<Props> {
	private foodApi: FoodApi = new FoodApi();
	private nameInput?: HTMLInputElement | null;
	private carbohydratesInput?: HTMLInputElement | null;
	private fatInput?: HTMLInputElement | null;
	private proteinInput?: HTMLInputElement | null;
	private vitaminInput?: HTMLInputElement | null;
	private mineralInput?: HTMLInputElement | null;
	private waterInput?: HTMLInputElement | null;
	private foodList?: Food[] = undefined;

	public constructor(props: Props) {
		super(props);

		this.createFood = this.createFood.bind(this);
		this.deleteFood = this.deleteFood.bind(this);
		this.buildRow = this.buildRow.bind(this);
	}

	public render() {
		if (this.foodList === undefined) {
			this.updateFoodList();
		}

		return <TableContainer maxHeight="100%" overflow="auto">
			<Table>
				<TableCaption>Food Data</TableCaption>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Carbohydrates</Th>
						<Th>Fat</Th>
						<Th>Protein</Th>
						<Th>Vitamin</Th>
						<Th>Mineral</Th>
						<Th>Water</Th>
						<Th>Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td><Input type="text" ref={ref => this.nameInput = ref} /></Td>
						<Td><Input type="number" ref={ref => this.carbohydratesInput = ref} /></Td>
						<Td><Input type="number" ref={ref => this.fatInput = ref} /></Td>
						<Td><Input type="number" ref={ref => this.proteinInput = ref} /></Td>
						<Td><Input type="number" ref={ref => this.vitaminInput = ref} /></Td>
						<Td><Input type="number" ref={ref => this.mineralInput = ref} /></Td>
						<Td><Input type="number" ref={ref => this.waterInput = ref} /></Td>
						<Td><Button onClick={this.createFood} >Create</Button></Td>
					</Tr>
					{this.foodList?.map(this.buildRow)}
				</Tbody>
			</Table>
		</TableContainer>;
	}

	private buildRow(food: Food) {
		var formatter = new WeightFormatter();
		return <Tr key={food.name}>
			<Td>{food.name}</Td>
			<Td>{formatter.format(food.nutritions.carbohydrate)}</Td>
			<Td>{formatter.format(food.nutritions.fat)}</Td>
			<Td>{formatter.format(food.nutritions.protein)}</Td>
			<Td>{formatter.format(food.nutritions.vitamin)}</Td>
			<Td>{formatter.format(food.nutritions.mineral)}</Td>
			<Td>{formatter.format(food.nutritions.water)}</Td>
			<Td>
				<Button onClick={() => this.deleteFood(food.name)}>
					Delete
				</Button>
			</Td>
		</Tr>;
	}

	private createFood() {
		var food: Food = {
			name: this.nameInput?.value ?? "",
			nutritions: {
				carbohydrate: parseFloat(this.carbohydratesInput?.value ?? "0"),
				fat: parseFloat(this.fatInput?.value ?? "0"),
				protein: parseFloat(this.proteinInput?.value ?? "0"),
				vitamin: parseFloat(this.vitaminInput?.value ?? "0"),
				mineral: parseFloat(this.mineralInput?.value ?? "0"),
				water: parseFloat(this.waterInput?.value ?? "0"),
			}
		};

		this.foodApi.addFood(food).then(this.updateFoodList);
	}

	private deleteFood(foodName: string) {
		this.foodApi.deleteFood(foodName).then(this.updateFoodList);
	}

	private updateFoodList() {
		this.foodApi.getFoodList()
			.then(foodList => this.foodList = foodList)
			.then(() => this.resetInputs())
			.then(() => this.forceUpdate());
	}

	private resetInputs() {
		Array.from(document.querySelectorAll("input")).forEach(
			input => (input.value = "")
		);
	}
}