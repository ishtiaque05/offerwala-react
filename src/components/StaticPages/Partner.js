import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

import Header from './layout/Header';

import icon1 from '../../assets/images/XMLID_15_.png';
import icon2 from '../../assets/images/XMLID_31_.png';
import icon3 from '../../assets/images/XMLID_47_.png';
import icon4 from '../../assets/images/XMLID_63_.png';

const styles = theme => ({
  root: {},
  main: {
    width: '70%',
    margin: '0 auto 0',
    paddingTop: '120px',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      paddingTop: '90px'
    }
  },
  title: {
    fontSize: '50px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    '& span': {
      display: 'block'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  headingPrimary: {
    fontSize: '35px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  headingSecondary: {
    fontSize: '20px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '180px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  },
  headingTertiary: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#C32323'
  },
  // TODO: change name later
  whyitworks: {
    '& p': {
      padding: '0 15px'
    }
  }
});

const PartnerPage = ({ classes }) => (
  <div>
    <Header />
    <main className={classes.main}>
      <h2 className={classes.title}>
        <span>A Campaign with</span>
        <span style={{ color: '#C32323' }}>Jossdeals.com</span>
      </h2>
      <div>
        <Grid container justify="center">
          <Grid item sm={6}>
            <div
              style={{
                textAlign: 'center',
                maxWidth: '270px',
                margin: '40px auto 0'
              }}>
              <img src={icon1} alt="icon" />
              <p>A custom campaign plan specially for your company</p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div
              style={{
                textAlign: 'center',
                maxWidth: '270px',
                margin: '40px auto 0'
              }}>
              <img src={icon2} alt="icon" />
              <p>Uniquely designed for customer acquisition/loyalty group</p>
            </div>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={6}>
            <div
              style={{
                textAlign: 'center',
                maxWidth: '270px',
                margin: '40px auto 0'
              }}>
              <img src={icon3} alt="icon" />
              <p>Co-branded paid promotion from jossdeals.com</p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div
              style={{
                textAlign: 'center',
                maxWidth: '270px',
                margin: '40px auto 0'
              }}>
              <img src={icon4} alt="icon" />
              <p>Curate influencers who suits your brand</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.headingPrimary}>
          What is influencer <span style={{ color: '#C32323' }}>marketing</span>
        </h2>
        <div>
          <h3 className={classes.headingSecondary}>Influencers</h3>
          <p>
            produce engaging content & grow organic dedicate followers. They
            partner up with brands that is relative to them & their followers;
            Makes honest recommendation helping brands to reach their target
            audience in a more organic way
          </p>
          <h3 className={classes.headingSecondary}>Influencer Marketing</h3>
          <p>
            A form of marketing in which advertisers collaborate with online
            influencers to create a non-intrusive and authentic recommendation
            of a product or service through a voice that is admired and trusted
            by the target audience.
          </p>
        </div>
        <h2 className={classes.headingPrimary}>
          Why it <span style={{ color: '#C32323' }}>Works</span>
        </h2>
        <div>
          <Grid container justify="center" className={classes.whyitworks}>
            <Grid style={{ textAlign: 'center' }} item md={4}>
              <h4 className={classes.headingTertiary}>70%</h4>
              <p>
                of subscribers say they <b>relate</b> to <b>influencers</b> more
                than traditional <b>celebrities</b>
              </p>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item md={4}>
              <h4 className={classes.headingTertiary}>6 in 10</h4>
              <p>
                subscribers would follow <b>advice</b> on what to <b>buy</b>{' '}
                from their favorite <b>influencer</b> over their favorite{' '}
                <b>TV</b> or <b>movie personality</b>
              </p>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item md={4}>
              <h4 className={classes.headingTertiary}>4 in 10</h4>
              <p>
                millennials on YouTube say their favorite{' '}
                <b>influencer understands</b> them better than their{' '}
                <b>friends</b>
              </p>
            </Grid>
          </Grid>
        </div>
        <h2 className={classes.headingPrimary}>
          What do we <span style={{ color: '#C32323' }}>provide</span>
        </h2>
        <div>
          <ul>
            <li>Content strategy consultation</li>
            <li>Hashtags/ keywords optimization for organic growth</li>
            <li>Introduce you to brands</li>
            <li>Design campaigns that benefits both you & the brand</li>
            <li>Product placement management</li>
            <li>latforms where brands can directly find you (Coming Soon)</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
);
export default withStyles(styles)(PartnerPage);
