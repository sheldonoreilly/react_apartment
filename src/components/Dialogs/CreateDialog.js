import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class CreateDialog extends Component {
	state = {
		open: false,
		title: ""
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleToggle = () => {
		this.setState({ open: !this.state.open });
	};

	handleChange = name => event => {
		this.setState({ [title]: event.target.value });
	};

	render() {
		const { open, title } = this.state;
		return (
			<Fragment>
				<Button onClick={e => this.handleToggle(e)} variant="fab" color="default" mini>
					<AddIcon />
				</Button>
				<Dialog open={open} onClose={this.handleToggle}>
					<DialogTitle id="form-dialog-title">Damage</DialogTitle>
					<DialogContent>
						<DialogContentText>Enter Damage Info:</DialogContentText>
						<form>
							<TextField
								label="Title"
								value={title}
								onChange={this.handleChange("title")}
								margin="normal"
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleClose} color="primary">
							Submit
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
