import React from 'react';
import 
{
    IconButton, 
    Typography, 
    withStyles
} 
from '@material-ui/core';

const styles = theme => ({
    root: {
        padding: '0 35px', 
        marginTop: '30px'
    }, 
    heading: {
        fontSize: '25px', 
        color: 'rgba(0, 0, 0, .2)', 
        display: 'inline-block', 
        borderBottom: '1px solid rgba(0, 0, 0, .2)'
    }, 
    anchor: {
        textDecoration: 'none', 
        display: 'inline-block'
    }
});

const SocialIcons = ({ classes }) => 
    <div className={ classes.root }>
        <Typography variant="h6" className={ classes.heading }>Follow Us</Typography>
        <div>
            <a href="void()" className={ classes.anchor }>
                <IconButton>f</IconButton>
            </a>
        </div>
    </div>

export default withStyles(styles)(SocialIcons);