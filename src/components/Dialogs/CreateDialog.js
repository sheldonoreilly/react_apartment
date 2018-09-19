import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class CreateDialog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClickOpen.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleClickOpen() {
		this.setState({ open: true });
	}

	handleClose() {
		this.setState({ open: false });
	}

	handleToggle() {
		console.log("handletoggole");
		this.setState({ open: !this.state.open });
	}

	render() {
		const { open } = this.state;
		return (
			<Fragment>
				<Button onClick={this.handleToggle} variant="fab" color="default" mini>
					<AddIcon />
				</Button>
				<Dialog open={open} onClose={this.handleToggle}>
					<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To subscribe to this website, please enter your email address here. We will send updates
							occasionally.
						</DialogContentText>
						<TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleClose} color="primary">
							Subscribe
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
