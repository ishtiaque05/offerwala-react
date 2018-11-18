import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import logo from '../../assets/images/jossdeals_logo.png';


const styles = theme => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#EAEAF0', 
        height: '100vh', 
        width: '100vw', 
        fontFamily: theme.typography.fontFamily
    }, 
    wrapper: {
        display: 'flex', 
        height: '60vh', 
        width: '50vw', 
        boxShadow: '0 3px 6px rgba(0, 0, 0, .3)', 
        backgroundColor: '#fff'
    }, 
    leftside: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        flexBasis: '40%', 
        padding: '0 15px'
    }, 
    rightside: {
        flexBasis: '60%', 
        display: 'flex', 
        alignItems: 'center' 
        
    }
});

const Welcome = ({ classes }) => 
    <div className={ classes.root }>
        <div className={ classes.wrapper }>
            <div className={ classes.leftside }>
                <div>
                    <img src={ logo } alt="logo"/>
                </div>
            </div>
            <div className={ classes.rightside }>
                <div style={{ borderLeft: '2px solid #DFDFDF', padding: '0 15px' }}>
                    <h2 style={{ fontSize: '40px', margin: 0, fontWeight: '400' }}>Welcome <br/> to the family <span style={{ color: '#E40000', fontSize: '45px', display: 'block', fontWeight: '700' }} >Rian!</span></h2>
                </div>
            </div>
        </div>
    </div>


  
export default withStyles(styles)(Welcome);