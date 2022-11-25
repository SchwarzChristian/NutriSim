import status_figure from "./status_figure.svg"
import "./StatusDisplay.css"

function StatusDisplay() {
	return <div className="status-display">
		<img src={status_figure} className="status-figure" alt="status figure" />
	</div>
}

export { StatusDisplay }