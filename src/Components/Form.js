import React from "react";
import GoodMatch from "./FormComponents/GoodMatch";

class Form extends React.Component {
	render() {
		return (
			<form>
				<GoodMatch/>
				<form>

					<h5>Is the Market Profitable?</h5>
						<div>
							<label>
							Yes
								<input type="radio" label="yes" name="marketprofit"/>			
							</label>
						</div>
						<div>
							<label>
								No
								<input type="radio" label="no" name="marketprofit"/>			
							</label>
						</div>
				</form>
				<div>
					<h5>Yearly Revenue?</h5>
					<input type="text" placeholder="Yearly Revenue" name="revenue"/>
				</div>
				<div>
					<h5>Management Team?</h5>
						<form>
						<div>
							<label>
							Yes
								<input type="radio" label="yes" name="managementteam"/>			
							</label>
						</div>
						<div>
							<label>
								No
								<input type="radio" label="no" name="managementteam"/>			
							</label>
						</div>
					</form>
				</div>
				<div>
					<h5>Good Match?</h5>

				<button>See Risk Factor</button>
 			</form>
			)
	}
}

export default Form;