import React from 'react';
import {
    Button, 
    Typography, 
    withStyles } 
from '@material-ui/core';


import fabookIcon from '../../../../assets/svgs/facebook.svg';
import twitterIcon from '../../../../assets/svgs/twitter.svg';
// import linkedinIcon from '../../../../assets/svgs/linkedin.svg';
import youtubeIcon from '../../../../assets/svgs/youtube.svg';
import instaIcon from '../../../../assets/svgs/insta.svg';


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
        minWidth: '35px', 
        height: '35px', 
        width: '35px', 
        borderRadius: '50%', 
        padding: '0'
    }
});

const SocialIcons = ({ classes }) => 
    <div className={ classes.root }>
        <Typography variant="h6" className={ classes.heading }>Follow Us</Typography>
        <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/JossDeals" className={ classes.anchor }>
                <Button className={ classes.button }>
                    <img width="35" src={ fabookIcon } alt="social icon"/>
                </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jossdeals" className={ classes.anchor }>
                <Button className={ classes.button }>
                    <img width="35" src={ instaIcon } alt="social icon"/>
                </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jossdealsbd" className={ classes.anchor }>
                <Button className={ classes.button }>
                    <img width="35" src={ twitterIcon } alt="social icon"/>
                </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCDm59it6UlSqWtZ3-2sj3Tw" className={ classes.anchor }>
                <Button className={ classes.button }>
                    <img width="35" src={ youtubeIcon } alt="social icon"/>
                </Button>
            </a>
            {/* <a target="_blank" rel="noopener noreferrer" href="void()" className={ classes.anchor }>
                <Button className={ classes.button }>
                    <img width="35" src={ linkedinIcon } alt="social icon"/>
                </Button>
            </a> */}
        </div>
    </div>

export default withStyles(styles)(SocialIcons);