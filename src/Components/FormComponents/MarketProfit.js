import React from "react";

class MarketProfit extends React.Component {
	render() {
		return (
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
			)
	}
}

export default MarketProfit;