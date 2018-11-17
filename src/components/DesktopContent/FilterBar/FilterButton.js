import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    borderRadius: 50,
    margin: '0 15px',
    border: '2px solid #000',
    color: '#000',
    opacity: '.8'
  },
  active: {
    borderRadius: 50,
    margin: '0 15px',
    border: '2px solid #000',
    color: '#FFF',
    background: '#000'
  }
});

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  handleClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, children, selectedIdx } = this.props;
    const { selectedIndex } = this.state;

    return (
      <Button
        variant="outlined"
        onClick={event => this.handleClick(event, selectedIdx)}
        className={
          selectedIndex === selectedIdx ? classes.active : classes.button
        }>
        {children}
      </Button>
    );
  }
}

export default withStyles(styles)(FilterButton);
