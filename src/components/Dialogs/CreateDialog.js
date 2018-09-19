import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap"
	},
	formControl: {
		width: 500
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
});

class CreateDialog extends Component {
	state = {
		open: false,
		damage: {
			title: "",
			description: "",
			rooms: ""
		}
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

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			damage: {
				...this.state.damage,
				[name]: value
			}
		});
	};

	render() {
		// destructure
		const { classes } = this.props;
		const { open } = this.state;
		const {
			damage: { title, description, rooms }
		} = this.state;

		return (
			<Fragment>
				<Button onClick={e => this.handleToggle(e)} variant="fab" color="default" mini>
					<AddIcon />
				</Button>
				<Dialog open={open} onClose={this.handleToggle}>
					<DialogTitle id="form-dialog-title">Enter Damage Info:</DialogTitle>
					<DialogContent>
						<form>
							<TextField
								label="Title"
								value={title}
								onChange={this.handleChange("title")}
								margin="normal"
								className={classes.formControl}
							/>
							<br />
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="rooms">Rooms</InputLabel>
								<Select value={rooms} onChange={this.handleChange("rooms")}>
									{this.props.rooms.map(room => (
										<MenuItem key={room} value={room}>
											{room}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<br />
							<TextField
								label="Description"
								value={description}
								multiline
								rows="4"
								onChange={this.handleChange("description")}
								margin="normal"
								className={classes.formControl}
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

export default withStyles(styles)(CreateDialog);
