import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
	leftpaper: {
		padding: 20,
		height: 500
	},
	rightpaper: {
		color: "red"
	}
};

export default props => {
	return (
		<Fragment>
			<Grid container>
				<Grid item xs={4}>
					<Paper style={styles.leftpaper}>
						<Typography variant="headline">List of Damages</Typography>

						{props.roomDamages.map(damage => (
							<ListItem
								key={damage.id}
								button
								onClick={() => {
									props.onSelectedDamage(damage);
								}}
							>
								<ListItemText primary={damage.name} />
							</ListItem>
						))}
					</Paper>
				</Grid>
				<Grid item xs={8}>
					<Paper style={styles.leftpaper}>
						<Typography variant="headline">Details</Typography>
						<ListItem button>
							<ListItemText primary={props.selectedDamage.description} />
						</ListItem>
					</Paper>
				</Grid>
			</Grid>
		</Fragment>
	);
};
