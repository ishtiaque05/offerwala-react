import React from 'react';
import Header from './layout/Header/index';

import { withStyles } from '@material-ui/core';


const styles = {
    root: {
        
    }, 
    main: {
        width: '70%', 
        margin: '0 auto 0', 
        paddingTop: '120px'
    }
}


const faq = ({ classes }) => 
    <div className={ classes.root }>
        <Header />
        <main className={ classes.main }>
            <h2>FAQ</h2>
            <section>
                <h4>What is jossdeals.com?</h4>
                <div>
                    <p>JOSSDEALS is a platform dedicated to enlist all available deals, create new deals & promote them. Our Mission is to help you make the best possible online shopping decision by creating a suite of tools that aid discovery & information transparency.</p>
                </div>
            </section>
            <section>
                <h4>Why should I use jossdeals.com?</h4>
                <div>
                    <p>There is a fantastic wealth of information and choice on the internet. We want to help you make practical use of this information to find great products within an acceptable timeframe at a reasonable price. By helping you find what you need in life, you can focus on living a good life chasing enriching experiences and deeper connections.</p>
                </div>
            </section>
            <section>
                <h4>How do I consume offers on jossdeals.com?</h4>
                <div>
                    <p>We are your companion on daily life adventures- get all that you love and more! Just visit our website from your device and your ready to go.</p>
                </div>
            </section>
            <section>
                <h4>How do we do it?</h4>
                <div>
                    <p>We facilitate promotional campaigns of various products & services offered by sellers. We only ensure quality of deals that are exclusive to <a href="https://www.jossdeals.com">jossdeals.com</a>.</p>
                </div>
            </section>
            <section>
                <h4>What’s a JossDeals Campaigns?</h4>
                <div>
                    <p>Campaign is a story of your brand. It’s that single message you want to pass on to your audience. We help to redesign your brand strategy & visualize the core values for efficient marketing.</p>
                </div>
            </section>
            <section>
                <h4>What is influencer marketing?</h4>
                <div>
                    <p>Long gone those days when you used market your product or service by advertising it in between contents. Now you either make your own content or get some one who already makes contents and is related to your audience. </p>
                </div>
            </section>
            <section>
                <h4>How to become an influencer?/ Who are these influencers?</h4>
                <div>
                    <p>Influencers are the independent content makers who you either follow on their FB page or IG/ Tweeter account or Youtube channel or their blog website. How to become one? Start making contents from today, it’s not as easy as you may think it is! </p>
                </div>
            </section>
            <section>
                <h4>How to reach you?</h4>
                <div>
                    <p>Customer Care: <a href="mailto:getdeals@jossdeals.com">getdeals@jossdeals.com</a></p>
                    <p>Marketing Support: <a href="mailto:campaigns@jossdeals.com">campaigns@jossdeals.com</a></p>
                    <p>Human Resource: <a href="mailto:career@jossdeals.com">career@jossdeals.com</a></p>
                    <p>Phone: +8801707597327</p>
                </div>
            </section>
        </main>
    </div>

export default withStyles(styles)(faq);