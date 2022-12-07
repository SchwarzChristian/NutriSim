# Nutrition Transport (draft)
see also: diagrams.drawio / Nutrition Exchange
## Setup
* `Player`
	* belongs to `Engine`
	* entity holding player data
* `Engine`
	* owns `Player` instance
	* owns `Nutrition` Exchange
	* Manages setup and timing
* `BloodSystem`
	* is a `IOrgan`
	* belongs to `Player`
	* main organ for nutrition exchange
* `IOrgan`
	* ToDo: entity, should not contain methods
	* belongs to `Player`
	* interface for all organs
	* needs to be implemented in order to participate in nutrition exchange
* `NutritionExchange`
	* belongs to `Engine`
	* references `BloodSystem`
	* references multiple `IOrgan`
	* calculates nutrition transportation needs when requested by engine
	* executes nutrition transport when requested by engine
## Tick Update
### Phase 1: Requests
- organs request needed nutritions at blood system
- organs request nutrition deposit at blood system

### Phase 2: Calculations
- blood system distributes nutrition availability to requests
- blood system distributes transport capacity to requests

### Phase 3: Execution
- blood system delivers / receives nutritions according to calculated requests

### Phase 4: Operation
- organs operate according to tasks and available resources
