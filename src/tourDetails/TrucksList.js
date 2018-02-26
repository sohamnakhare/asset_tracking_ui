import React from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import TruckDetails from './TruckDetails.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function TrucksList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {
                props.trucks.map((truck) =>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>
                                <strong>Truck no: </strong>{truck.truckId}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <TruckDetails/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            }

        </div>
    );
}

export default withStyles(styles)(TrucksList);