import React, { Component } from "react";

import Header from "./Layouts/header";
import TabSelector from "./Layouts/tabSelector";
import Main from "./Layouts/main";

import { rooms } from "./store";
import { damages } from "./store";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rooms: [],
			roomDamages: [],
			selRoom: "",
			selDamages: {}
		};
		this.getDamagesBySelRoom = this.getDamagesBySelRoom.bind(this);
		this.handleSelRoomChange = this.handleSelRoomChange.bind(this);
		this.handleSelectedDamage = this.handleSelectedDamage.bind(this);
	}

	//get the rooms by the tab that the user selected
	getDamagesBySelRoom(room) {
		const roomDamages = damages.filter(damage => {
			return damage.room === room;
		});
		return roomDamages;
	}

	handleSelRoomChange(room) {
		// console.log("room1 :", room);
		const roomDamages = this.getDamagesBySelRoom(room);
		this.setState({ roomDamages: roomDamages });
	}

	handleSelectedDamage(damage) {
		this.setState({ selDamages: damage });
	}

	render() {
		return (
			<div>
				<Header />
				<TabSelector rooms={rooms} roomChange={this.handleSelRoomChange} />
				<Main
					roomDamages={this.state.roomDamages}
					onSelectedDamage={this.handleSelectedDamage}
					selectedDamage={this.state.selDamages}
				/>
			</div>
		);
	}
}
