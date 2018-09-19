import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CreateDialog from "../Dialogs/CreateDialog";

export default () => (
	<AppBar position="static" color="primary">
		<Toolbar>
			<Typography variant="title" style={{ flex: 1 }} color="inherit">
				Apartment Damages
			</Typography>
			<Button color="inherit">Login</Button>
			<CreateDialog />
		</Toolbar>
	</AppBar>
);
