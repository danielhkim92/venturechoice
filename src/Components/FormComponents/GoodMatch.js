import React from 'react';

class GoodMatch extends React.Component {
	render() {
		return (
			<div>
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
			</div>
			)
	}
};				

export default GoodMatch;