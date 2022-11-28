import status_figure from "../assets/bladder/bladder.initial.webp"
import "../styles/StatusDisplay.css"

function StatusDisplay() {
	return <div className="status-display">
		<img src={status_figure} className="status-figure" alt="status figure" />
		<button onClick={animate}>Show Bladder</button>
	</div>
}

function animate() {
	
}

export { StatusDisplay }