import React from 'react';
import Header from './layout/Header/index';

import { withStyles } from '@material-ui/core';

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
  headingPrimary: {
    fontSize: '50px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  headingSecondary: {
    fontSize: '30px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '180px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  }
});

const About = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <main className={classes.main}>
      <h2 className={classes.headingPrimary}>About Us</h2>
      <div>
        <p>
          Welcome to Jossdeals, the first <b>user</b>-bespoke, savings-inspired
          deal-listing platform.
        </p>
        <p>
          Shoppers today are faced with an overwhelming amount of information
          and choices. Finding amazing products under specific budget is often
          too expensive, time-consuming and frustrating.
        </p>
        <p>
          We want to change this. We aim to cut through the clutter and make the
          products you'll love discover you.
        </p>
        <p>
          We rather you focus on having great experiences and living a good life
          instead.
        </p>
        <p>
          Search & discover the coolest products & services from favorite &
          pre-vetted brands and stores in one place. Experience exclusive
          offers, discounts and sales on the purchase.
        </p>
        <p>
          Our mission is to get you quicker to the products you are looking for
          and would want to buy within your budget parameter.
        </p>
        <p>
          <b>For businesses</b>, our goal is to help clients’ thrive in today’s
          highly competitive& ever changing marketing environment.
        </p>
        <p>
          Jossdeals.com is where online &store deals, offers, coupons are
          enlisted for people to find the best deals they deserve. We believe
          jossdeals.com is your perfect tech marketing partner who not only
          places your promotional activities online but also arrange a complete
          custom deals that will make your brand stand out from the rest.
        </p>
        <p>
          We’ve bolstered our digital marketing capabilities while expanding our
          team with seasoned professionals, influencers & creators to support
          our clients’ digital needs.
        </p>
      </div>
      <h3 className={classes.headingSecondary}>What we do</h3>
      <div>
        <p>
          The most effective marketing happens over time when quality meets
          consistency. The following list describes each primary area of ongoing
          focus:
        </p>
        <ul>
          <li>
            We are a data driven company. We collect & use market insights about
            deals, offers & try to understand their effectiveness
          </li>
          <li>Design Promotions, Social Campaigns & Coupons</li>
          <li>
            Integrate social media activity with Influencer Marketing Campaigns
          </li>
          <li>Create new channels for advertising</li>
        </ul>
      </div>
      <h3 className={classes.headingSecondary}>How it works</h3>
      <div>
        <p>
          We facilitate promotional campaigns of various products & services
          offered by sellers. We only ensure quality of deals that are exclusive
          to <a href="https://www.jossdeals.com/">jossdeals.com</a>
        </p>
      </div>
      <h3 className={classes.headingSecondary} style={{ color: '#C32323' }}>
        Contact Us
      </h3>
      <div>
        <p>
          <b>Customer care:</b>GetDeals@jossdeals.com
        </p>
        <p>
          <b>Marketing support:</b>Campaigns@jossdeals.com
        </p>
        <p>
          <b>Become an influencer/ work with us:</b>Careers@jossdeals.com
        </p>
        <p>
          <b>Call anytime:</b>+8801707597327
        </p>
      </div>
    </main>
  </div>
);

export default withStyles(styles)(About);
