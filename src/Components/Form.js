import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form>
				<form>
					<h5>What does Investment Look Like?</h5>
						<div>
							<label>
								Self-Investor
								<input type="radio" label="Self-Investor" name="investors"/>
							</label>
						</div>
						<div>
							<label>
								Group-Investors
								<input type="radio" value="Group-Investors" name="investors"/>	
							</label>
						</div>
						<div>
							<label>
								Big Player Investors
								<input type="radio" value="Big Player Investors" name="investors"/>

							</label>
						</div>
				</form>
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
						<form>
							<div>
								<label>
								Yes
									<input type="radio" label="yes" name="goodmatch"/>			
								</label>
							</div>
							<div>
								<label>
									No
									<input type="radio" label="no" name="goodmatch"/>			
								</label>
							</div>
					</form>
				</div><br/>
				<button>See Risk Factor</button>
 			</form>
			)
	}
}

export default Form;