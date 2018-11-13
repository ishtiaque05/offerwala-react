import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DefaultImage from 'assets/images/default_deal.jpg';

const styles = theme => ({
  card: {
    width: 375,
    maxHeight: 700,
    margin: theme.spacing.unit * 1.5
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const Deal = ({ classes, deal }) => (
  <Card className={classes.card}>
    <Link to={`/deals/${deal.id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={deal.picture.url !== null ? deal.picture.url : DefaultImage}
          title={deal.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {deal.title}
          </Typography>
          <div className={classes.flex}>
            <Typography>{deal.shop.title}</Typography>
            <Typography>{deal.end_date}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
);

Deal.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired
};

export default withStyles(styles)(Deal);
