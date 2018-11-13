import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

const DealDetails = ({ classes }) => (
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
              image={
                'https://jossdeals-assets-production.s3.amazonaws.com/uploads/deal/picture/1337/Capture.PNG'
              }
              title={'deal.title'}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                BDT 50 Off on Chillox Burgers
              </Typography>
              <Typography> Lorem, ipsum dolor. </Typography>
              <Typography>
                Will open a detail page, where you nd more about the deal, also
                related tags of that deals, and more deals with those related
                tags below, as you can see here this detail says nothing about
                anything related tags of that deals, and more deals with those
                related
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </div>
);

// Shopdeals.propTypes = {
//   classes: PropTypes.object.isRequired,
//   deals: PropTypes.array.isRequired
// };

export default withStyles(styles)(DealDetails);
