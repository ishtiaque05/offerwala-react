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
        height: '80vh', 
        width: '70vw', 
        boxShadow: '0 3px 6px rgba(0, 0, 0, .3)'
    }, 
    rightSide: {
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff'
    }, 
    heading: {
        borderBottom: '1px solid #F3F3F3', 
        paddingBottom: '12px', 
        marginBottom: '12px'
    }, 
    phone: {
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
    signbutton: {
        width: 'auto', 
        minWidth: '80px', 
        padding: '8px', 
        borderTopLeftRadius: '0', 
        borderBottomLeftRadius: '0', 
        boxShadow: 'none', 
        color: '#4E1D1D', 
        
    }, 
    facebooksignup: {
        textAlign: 'center', 
        color: '#4E1D1D', 
        opacity: '.5',
        position: 'relative',  
        '&:after': {
            position: 'absolute', 
            content: '""', 
            left: 0, 
            top: '50%', 
            height: '1px', 
            width: '100%', 
            backgroundColor: '#F3F3F3', 
            zIndex: '-1'
        }
    }, 
    fbbutton: {
      margin: theme.spacing.unit,
      backgroundColor: '#2B5893', 
      color: '#fff', 
      fontWeight: '600', 
      width: '100%', 
      textAlign: 'cemter', 
      '&:hover': {
        backgroundColor: '#2B5893', 
        color: '#fff'
      }
    },
});

const SignUp = ({ classes }) => 
    <div className={ classes.root }>
        <div className={ classes.wrapper }>
            <LeftPart />
            <div className={ classes.rightSide }>
                <div>
                    <div className={ classes.heading }>
                        <h2 style={{ fontSize: '50px', margin: 0, fontWeight: 600 }}>Sign-up</h2>
                        <h4 style={{ fontSize: '30px', margin: 0, fontWeight: 600 }}>To save your deals</h4>
                    </div>
                    <p style={{ marginBottom: '12px', fontWeight: 300 }}>Don't worry, we won't steal your messages</p>
                    <div className={ classes.phone }>
                        <span style={{ padding: '8px', borderRight: 'none', borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px' }} className={ classes.input }>+880</span>
                        <input style={{ padding: '12px' }} className={ classes.input } type="text" placeholder='Phone' />
                        <Button variant="contained" size="large" className={ classes.signbutton }>
                            Sign-up
                        </Button>
                    </div>
                    <div className={classes.facebooksignup}>
                        <p style={{ display: 'inline-block', backgroundColor: '#fff' }}>or sign-up with</p>
                    </div>
                    <div className="facebook-btn">
                        <Button variant="contained" size="large" className={classes.fbbutton} >
                            Facebook
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>


SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SignUp);