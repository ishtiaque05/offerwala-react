import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

import LeftPart from './LeftPart';

const styles = theme => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#EAEAF0', 
        height: '100vh', 
        width: '100vw', 
        fontFamily: theme.typography.fontFamily, 
        color: '#4E1D1D'
    }, 
    wrapper: {
        display: 'flex', 
        height: '70vh', 
        width: '60vw', 
        boxShadow: '0 3px 6px rgba(0, 0, 0, .3)'
    }, 
    rightSide: {
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        boxSizing: 'border-box'
    }, 
    heading: {
        paddingBottom: '12px', 
        marginBottom: '12px'
    }, 
    name: {
        fontSize: '18px', 
        display: 'flex'
    }, 
    input: {  
        border: '1px solid #979797', 
        color: '4E1D1D', 
        '&:focus': {
            outline: '0'
        }
    }, 
    submit: {
        width: 'auto', 
        minWidth: '80px', 
        padding: '8px', 
        borderTopLeftRadius: '0', 
        borderBottomLeftRadius: '0', 
        boxShadow: 'none', 
        color: '#4E1D1D', 
        
    }
});

const Name = ({ classes }) => 
    <div className={ classes.root }>
        <div className={ classes.wrapper }>
            <LeftPart />
            <div className={ classes.rightSide }>
                <div style={{ padding: '0 80px',  }}>
                    <div className={ classes.heading }>
                        <h2 style={{ fontSize: '50px', margin: 0, fontWeight: 600 }}>What do we call you?</h2>
                    </div>
                    <div className={ classes.name }>
                        <input style={{ padding: '12px' }} className={ classes.input } type="text" placeholder='Full name' />
                        <Button variant="contained" size="large" className={ classes.submit }>
                            OK
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>


Name.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Name);