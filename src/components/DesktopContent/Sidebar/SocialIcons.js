import React from 'react';
import 
{
    Button, 
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
        borderBottom: '1px solid rgba(0, 0, 0, .2)', 
        marginBottom: '20px'
    }, 
    anchor: {
        textDecoration: 'none', 
        display: 'inline-block', 
        margin: '0 15px 15px 0'
    }, 
    button: {
        minWidth: '40px', 
        height: '40px', 
        width: '40px', 
        borderRadius: '50%', 
        border: '2px solid rgba(0, 0, 0, 1)'
    }
});

const SocialIcons = ({ classes }) => 
    <div className={ classes.root }>
        <Typography variant="h6" className={ classes.heading }>Follow Us</Typography>
        <div>
            <a target="_blank" href="void()" className={ classes.anchor }>
                <Button className={ classes.button }>f</Button>
            </a>
            <a target="_blank" href="void()" className={ classes.anchor }>
                <Button className={ classes.button }>f</Button>
            </a>
            <a target="_blank" href="void()" className={ classes.anchor }>
                <Button className={ classes.button }>f</Button>
            </a>
            <a target="_blank" href="void()" className={ classes.anchor }>
                <Button className={ classes.button }>f</Button>
            </a>
            <a target="_blank" href="void()" className={ classes.anchor }>
                <Button className={ classes.button }>f</Button>
            </a>
        </div>
    </div>

export default withStyles(styles)(SocialIcons);