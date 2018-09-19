import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
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
						<List>
							{props.roomDamages.map(damage => (
								<ListItem
									key={damage.id}
									button
									onClick={() => {
										props.onSelectedDamage(damage);
									}}
									// do a check if on selectedDamage and check if its 'this' item
									//if so select this
									selected={damage.id === props.selectedDamage.id}
								>
									<ListItemText primary={damage.name} />
								</ListItem>
							))}
						</List>
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
