import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
    maxHeight: 700,
    margin: theme.spacing.unit * 1.5
  }
});

const Deal = ({ classes, deal }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        className={classes.media}
        height="140"
        image={deal.imgUrl}
        title={deal.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {deal.title}
        </Typography>
        <Typography>{deal.storeName}</Typography>
        <Typography>{deal.validUntil}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

Deal.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired
};

export default withStyles(styles)(Deal);
