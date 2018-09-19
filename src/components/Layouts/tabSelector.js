import React, { Component, Fragment } from "react";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default class TabSelector extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
		const { rooms } = this.props;
		//-1 because of the 'All' room
		const selRoom = rooms[value - 1];
		this.props.roomChange(selRoom);
	};

	render() {
		return (
			<Fragment>
				<div>
					<Paper>
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab label={"All"} />
							{this.props.rooms.map(room => (
								<Tab key={room} label={room} />
							))}
						</Tabs>
					</Paper>
				</div>
			</Fragment>
		);
	}
}
