import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      borderRadius: 50, 
      margin: '0 15px', 
      border: '2px solid #000', 
      color: '#000', 
      opacity: '.8', 
      
    }
  });

const FilterButton = ({ classes, children }) => {
    return (
        <Button variant="outlined" className={classes.button}>
            { children }
        </Button>
    );
}
 
export default withStyles(styles)(FilterButton);