import status_figure from "../assets/status_figure.svg"
import "../styles/StatusDisplay.css"

function StatusDisplay() {
	return <div className="status-display">
		<img src={status_figure} className="status-figure" alt="status figure" />
	</div>
}

export { StatusDisplay }