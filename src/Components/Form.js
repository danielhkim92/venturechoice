import React from "react";
import GoodMatch from "./FormComponents/GoodMatch";
import MarketProfit from "./FormComponents/MarketProfit";
import Investor from "./FormComponents/Investor";
import ManagementTeam from "./FormComponents/ManagementTeam";
import Revenue from "./FormComponents/Revenue";

class Form extends React.Component {
	render() {
		return (
			<form>
				<GoodMatch/>
				<MarketProfit/>
				<Investor/>
				<ManagementTeam/>
				<Revenue/>
				<button>See Risk Factor</button>
 			</form>
			)
	}
}

export default Form;
