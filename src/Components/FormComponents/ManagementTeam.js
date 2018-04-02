import React from "react";

class ManagementTeam extends React.Component {
	render() {
		return (
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
			)
	}
}

export default ManagementTeam;