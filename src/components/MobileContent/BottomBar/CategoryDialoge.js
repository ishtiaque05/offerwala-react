import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import { 
    Typography, 
    ListItem, 
    List, 
    Dialog } 
    from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';


const styles = theme => ({
    root: {
        backgroundColor: '#fff', 
        top: '45%', 
        bottom: '60px', 
        '&>div': {
            bottom: '60px'
        }
    }, 
    wrapper: {
        padding: '25px 5px'
    }, 
    list: {
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'space-between', 
      position: 'relative', 
      '&:after': {
          position: 'absolute', 
          height: '100%', 
          left: '50%', 
          top: '0', 
          width: '1px', 
          backgroundColor: '#f6f6f6', 
          content: '""'
      }
    },
    selectedListItem: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.primary,
      borderRadius: theme.spacing.unit * 6,
      padding: '5px', 
      flexBasis: '45%', 
      '& p': {
        fontWeight: 'bold', 
        fontSize: '13px'
      }
    },
    listItem: {
      opacity: '.8',
      transition: 'fontWeight .6s ease',
      padding: '5px', 
      margin: '1px 0',
      flexBasis: '45%', 
      '&:hover': {
        borderRadius: theme.spacing.unit * 6,
        fontWeight: 'bold',
        '& p': {
          fontWeight: 'bold'
        }
      }
    },
    icons: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4,
      marginRight: theme.spacing.unit * 1.5
    }, 
    appBar: {
        position: 'relative',
      },
      flex: {
        flex: 1,
    },
});



class CategoryDialoge extends Component {
    state = { 
        selectedIndex: 0
    }

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
        this.props.click(index);
    };

    
    // open={this.state.open}
    // onClose={this.handleClose}

    render() {
        const { classes, open, close, categories, icons } = this.props;

        return (
            <Dialog
                fullScreen
                open={ open }
                onClose={ close }
                className={ classes.root }
                PaperProps={{
                    style: {
                        boxShadow: 'none', 
                        backgroundColor: '#fff', 
                        borderTopLeftRadius: '35px', 
                        borderTopRightRadius: '35px', 
                    }
                }}
                >
                <div className={ classes.wrapper }>
                    <List component="nav" className={classes.list}>
                        {categories.map((item, index) => (
                            <ListItem
                                button
                                className={
                                this.state.selectedIndex === index
                                    ? classes.selectedListItem
                                    : classes.listItem
                                }
                                key={index}
                                selected={this.state.selectedIndex === index}
                                onClick={event => this.handleListItemClick(event, index)}>
                                <img src={icons[index]} alt={ item } className={classes.icons} />
                                <Typography variant="body1">{item}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Dialog>
        );
    }
}

CategoryDialoge.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryDialoge);
