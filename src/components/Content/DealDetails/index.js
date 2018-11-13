import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { fetchDealWithId } from 'actions';

// import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  gridItem: {
    marginRight: theme.spacing.unit
  }
});

class DealDetails extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchDealWithId(parseInt(this.props.match.params.id, 10))
    );
  }

  render = () => {
    const { classes, loading, error, deal } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  height="140"
                  image={deal.picture !== undefined ? deal.picture.url : ''}
                  title={deal.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {deal.title}
                  </Typography>
                  <Typography>
                    {deal.shop !== undefined ? deal.shop.title : ''}{' '}
                  </Typography>
                  <Typography>{deal.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  };
}

// Shopdeals.propTypes = {
//   classes: PropTypes.object.isRequired,
//   deals: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  deal: state.deal.item,
  loading: state.deal.loading,
  error: state.deal.error
});

export default connect(mapStateToProps)(withStyles(styles)(DealDetails));
