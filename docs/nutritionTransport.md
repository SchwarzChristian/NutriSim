# Nutrition Transport (draft)
see also: diagrams.drawio / Nutrition Exchange
## Setup
* `Player`
	* belongs to `Engine`
	* has one `BloodSystem`
	* has many `IOrgan`
	* entity holding player data
* `Engine`
	* has one `Player` instance
	* has one `NutritionExchange`
	* Manages setup and timing
* `BloodSystem`
	* is a `IOrgan`
	* main organ for nutrition exchange
* `IOrgan`
	* interface for all organs
	* needs to be implemented in order to participate in nutrition exchange
* `NutritionExchange`
	* references one `BloodSystem`
	* has many `INutritionManager`
	* calculates nutrition transportation needs when requested by `Engine`
	* calculates nutrition transportation as needed by `INutritionManager`s
	* executes nutrition transport when requested by engine
* `INutritionManager`
	* references one `IOrgan`
	* manages resource needs of `IOrgan`
	* communicates resource needs to `NutritionExchange`
	* handles nutrition transport for `IOrgan`
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
