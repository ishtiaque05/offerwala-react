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

const Privacy = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <main className={classes.main}>
      <h2 className={classes.headingPrimary}>
        Terms and <span style={{ color: '#C32323' }}>Conditions</span>
      </h2>
      <p>
        Welcome to the "jossdeals.com". By using the website, you are agreeing
        to the terms of use.Please read them carefully. If you have any
        questions, please contact us.
      </p>
      <h3 className={classes.headingSecondary}>
        Acceptance of Terms and Conditions
      </h3>
      <div>
        <p>
          By using{' '}
          <a href="http://www.joosdeals.com">http://www.joosdeals.com</a> (the
          "Website" or "jossdeals"), you ("you" or the "User")agree to the terms
          and conditions, without restrictions, that we ("jossdeals") have
          provided youherein for use of this website.
        </p>
      </div>
      <h3 className={classes.headingSecondary}>General</h3>
      <p>
        "Jossdeals" provides an interactive online service owned and operated by
        jossdeals through theWebsite on the World Wide Web of the Internet (the
        "Web" or "Internet"), consisting ofinformation services, content and
        transaction capabilities provided by jossdeals, its subsidiariesand its
        associates with whom it has business relationships ("Business
        Associates") including butnot limited to third parties that provide
        services in relation to creation, production or distributionof content
        for the Website ("Third Party Content Providers"), third parties that
        provideadvertising services to jossdeals ("Third Party Advertisers") and
        third parties that performfunction on behalf of jossdeals like sending
        out and distributing our administrative andpromotional emails and text
        messages ("Third Party Service Providers"). This Agreement setsforth the
        terms and conditions that apply to the use of this Website by the User.
        The right to usethis Website is personal to User and is not transferable
        to any other person or entity. User shallbe responsible for protecting
        the confidentiality of User's password(s), if any. User understandsand
        acknowledges that, although the Internet is often a secure environment,
        sometimes there areinterruptions in service or events that are beyond
        the control of jossdeals, and jossdeals shall notbe responsible for any
        data lost while transmitting information on the Internet. While it
        isjossdeals 's objective to make the Website accessible at all times,
        the Website may be unavailablefrom time to time for any reason
        including, without limitation, routine maintenance. Youunderstand and
        acknowledge that due to circumstances both within and outside of the
        control ofjossdeals, access to the Website may be interrupted, suspended
        or terminated from time to time.jossdeals reserves the right, in its
        sole discretion, to terminate the access to any or all jossdealswebsites
        and the related services or any portion thereof at any time, without
        notice. Jossdealsshall have the right at any time to change or
        discontinue any aspect or feature of the Website,including, but not
        limited to, content, graphics, deals, offers, settings, hours of
        availability andequipment needed for access or use. Further, jossdeals
        may discontinue disseminating anyportion of information or category of
        information, may change or eliminate any transmissionmethod and may
        change transmission speeds or other signal characteristics.
      </p>
      <h3 className={classes.headingSecondary}>Use of the Site</h3>
      <p>
        Our services are available only to, and may only be used by individuals
        who can form legallybinding contracts under applicable law. Without
        limiting the foregoing, our services are notavailable to children
        (persons under the age of 18) or to temporarily or indefinitely
        suspendedjossdeals members. If you are a under the age of 18, you can
        use this service only in conjunctionwith, and under the supervision of
        your parents or guardians. If you do not qualify, please do notuse our
        site. Further, your jossdeals account (including feedback) and User ID
        may not betransferred or sold to another party. If you are registering
        as a business entity, you represent thatyou have the authority to bind
        the entity to this Agreement.
      </p>
      <h3 className={classes.headingSecondary}>Access to the Site</h3>
      <p>
        Jossdeals retains the right, at our sole discretion, to deny service or
        use of the Site or an accountto anyone at any time and for any reason.
        While we use reasonable efforts to keep the Site andyour account
        accessible, the Site and/or your account may be unavailable from time to
        time. Youunderstand and agree that there may be interruptions in service
        or events, Site access or access toyour account due to circumstances
        both within our control (e.g., routine maintenance) andoutside of our
        control.
      </p>
      <h3 className={classes.headingSecondary}>Modified Terms</h3>
      <p>
        Jossdeals reserves the right at all times to discontinue or modify any
        of our Terms of Use and/orour Privacy Policy as we deem necessary or
        desirable without prior notification to you. Suchchanges may include,
        among other things, the adding of certain fees or charges. We suggest
        toyou, therefore, that you re-read this important notice containing our
        Terms of Use and PrivacyPolicy from time to time in order that you stay
        informed as to any such changes. If we makechanges to our Terms of Use
        and Privacy Policy and you continue to use our Website, you
        areimplicitly agreeing to the amended Terms of Use and Privacy Policy.
        Unless specified otherwise,any such deletions or modifications shall be
        effective immediately upon Jossdeals 's postingthereof. Any use of the
        Website by User after such notice shall be deemed to
        constituteacceptance by User of such modifications.
      </p>
      <h3 className={classes.headingSecondary}>Equipment</h3>
      <p>
        User shall be responsible for obtaining and maintaining all telephone,
        computer hardware andother equipment needed for access to and use of
        this Website and all charges related thereto.Jossdeals shall not be
        liable for any damages to the User's equipment resulting from the use
        ofthis Website.
      </p>
      <h3 className={classes.headingSecondary}>Registration</h3>
      <p>
        To utilize certain portions of the Website, you may be required to
        complete a registration processand establish an account with "jossdeals"
        ("Account"). You represent and warrant that allinformation provided by
        you to "jossdeals" is current, accurate, and complete, and that you
        willmaintain the accuracy and completeness of this information on a
        prompt, timely basis.
      </p>
      <h3 className={classes.headingSecondary}>
        Account, Password and Security
      </h3>
      <p>
        <span style={{ display: 'block' }}>
          You will receive a password and account designation upon completing
          your registration processon our Website. You would be responsible for
          maintaining the confidentiality of the passwordassigned to you and
          your account details and for all activities that are undertaken
          through youraccount. You agree to (a) immediately notify "jossdeals"
          of any unauthorized use of yourpassword or account or any other breach
          of security, and (b) logout from your account at the endof each
          session
        </span>
        <span style={{ display: 'block' }}>
          "Jossdeals" shall not be liable for any loss or damage arising from
          your failure to maintain youraccount and/or password.
        </span>
        <span style={{ display: 'block' }}>
          You shall not have more than one active account on our Website.
          Additionally, you areprohibited from selling, trading, or transferring
          your Account to another party or otherwisedealing in your account in
          an inappropriate, indecent or illegal manner.
        </span>
      </p>
      <h3 className={classes.headingSecondary}>User Conduct</h3>
      <p>
        All interactions on the Site must comply with these Terms of Use. To the
        extent your conduct, inour sole discretion, restricts or inhibits any
        other user from using or enjoying any part of the Site,we may limit or
        terminate your privileges on the Site and seek other remedies,
        including, withoutlimitation, cancellation of your account or forfeiture
        of any forms of unredeemed value in youraccount.
      </p>
      <p>
        Your information (or any items listed) and your activities on the Site
        shall not:
      </p>
      <ul>
        <li>Be false, inaccurate or misleading;</li>
        <li>
          be fraudulent or involve the sale of counterfeit or stolen items;
        </li>
        <li>
          Infringe any third party's copyright, patent, trademark, trade secret
          or other proprietaryrights or rights of publicity or privacy;
        </li>
        <li>
          violate any law, statute, ordinance or regulation (including, but not
          limited to, thosegoverning export control, consumer protection, unfair
          competition, antidiscrimination orfalse advertising);
        </li>
        <li>
          Be defamatory, trade libelous, unlawfully threatening or unlawfully
          harassing;
        </li>
        <li>be obscene or contain pornography or,</li>
        <li>
          contain any viruses, Trojan horses, worms, time bombs, cancel bots,
          easter eggs or othercomputer programming routines that may damage,
          detrimentally interfere with,surreptitiously intercept or expropriate
          any system, data or personal information;
        </li>
        <li>
          Create liability for us or cause us to lose (in whole or in part) the
          services of our ISPs orother suppliers; and
        </li>
        <ul>
          <li>are prohibited under this Agreement;</li>
          <li>
            are identical to other items you have up for auction but are priced
            lower than youritem's reserve or minimum bid amount;
          </li>
          <li>
            are concurrently listed for sale on a web site other than
            "jossdeals" (this does notprevent linking to or advertising an
            "jossdeals" listing from another web site); or
          </li>
          <li>
            you do not have a right to link to or include. Furthermore, you may
            not list anysale advertisement on the Site (or consummate any
            transaction that was initiatedusing our service) that, by paying to
            us the listing fee or the final value fee, couldcause us to violate
            any applicable law, statute, ordinance or regulation, or
            thatviolates our current Prohibited, Questionable and Infringing
            Items.
          </li>
        </ul>
      </ul>
      <h3 className={classes.headingSecondary}>Pricing/Offers/Discounts</h3>
      <p>
        All prices, offers, discounts and information provided on this Site are
        subject to the relevantRetailers’ conditions of sale. "jossdeals"
        accepts no liability for any loss or damage whatsoeverin relation to any
        information contained within this site nor resulting from any experience
        orpurchase following from any Retailers site.
      </p>
      <h3 className={classes.headingSecondary}>
        Purchase and Redemption of "Jossdeals" Coupons
      </h3>
      <p>
        "jossdeals" provides an opportunity to its Users to avail value deals
        from a number of merchants,including but not limited to restaurants,
        with which jossdeals has an association at discountedprices by issue of
        coupons that can be redeemed up to a certain validity period from
        outlets of theInstitutions. In order to purchase jossdeals coupons, the
        User would be required to create anaccount on the Website. This is
        required so we can provide you with easy access to print yourorders view
        your past purchases and modify your preferences. By placing an order on
        theWebsite, you make an offer to us to purchase "jossdeals" Coupons for
        buying / availing specificproducts and/or services which you have
        selected based on Jossdeals ́s standard terms andconditions,
        institution-specific restrictions and on these Terms of Use. All
        "jossdeals" couponsare promotional coupons and shall be subject to the
        Standard Terms and Conditions and SpecificTerms and Conditions.
        "jossdeals" Coupons are issued on behalf of the Institutions and only
        suchInstitutions, to the exclusion of jossdeals, shall be responsible
        for any and all injuries, illnesses,damages, charges, expenses, claims,
        liabilities and costs suffered by or in respect of a customer,caused in
        whole or in part by the Institutions or which arises out of the goods
        and/or servicesprovided by the Institutions, as well as for any
        unclaimed property liability arising fromunredeemed "jossdeals" Coupons.
        Promotion code & subscription pack are not valid on product,lucky draw &
        select service deals.
      </p>
      <h3 className={classes.headingSecondary}>
        Standard Terms and Conditions (for Restaurant jossdeals Coupons).
      </h3>
      <p>
        For this section, Restaurant shall be defined as an Institution that
        offers food and beverages forsale in its regular business operations,
        and is making such food and beverages available topurchasers of
        jossdeals Coupons. In this respect, the following shall constitute as
        Standard Termsand Conditions for redeeming jossdeals Coupons
      </p>
      <ul>
        <li>
          ossdeals shall not be responsible for the quality of services provided
          by the Restaurant,and the same shall be the sole responsibility of the
          Restaurant.
        </li>
        <li>
          Jossdeals Coupons are redeemable in their entirety only and may not be
          redeemedincrementally.
        </li>
        <li>
          Jossdeals Coupons can be redeemed only after due verification of the
          customer including,without limitation, matching the unique
          identification number provided to the customer atthe time of purchase
          of Jossdeals Coupons.
        </li>
        <li>
          Validity period for redemption of Jossdeals Coupons is determined by
          Restaurants, andshall be mentioned on jossdeals Coupon.
        </li>
        <li>
          Jossdelas Coupons cannot be used for taxes, tips or prior balances,
          unless permitted bythe Restaurant.
        </li>
        <li>
          Reproduction, sale or trade of jossdeals Coupons is strictly
          prohibited.
        </li>
        <li>
          Any attempted redemption not consistent with these terms & conditions
          will render thejossdeals Coupon void and invalid.
        </li>
        <li>The jossdeals Coupon will expire on the date specified on it.</li>
      </ul>
      <h3 className={classes.headingSecondary}>
        Standard Terms and Conditions (for Non-Restaurant Jossdeals Coupons)
      </h3>
      <p>
        The following shall constitute as Standard Terms and Conditions for
        redeeming JossdealsCoupons for purchasing goods and/or services from
        Institutions other than Restaurants:
      </p>
      <ul>
        <li>
          Jossdeals shall not be responsible for the quality of products and/or
          services provided bythe Institution, and the same shall be the sole
          responsibility of the Institution.
        </li>
        <li>No refunds shall be granted for Jossdeals Coupons.</li>
        <li>
          Jossdeals Coupons are redeemable in their entirety only and may not be
          redeemedincrementally.
        </li>
        <li>
          Jossdeals Coupons can be redeemed only after due verification of the
          customer including,without limitation, matching the unique
          identification number provided to the customer atthe time of purchase
          of Jossdeals Coupons.
        </li>
        <li>
          Jossdeals Coupons may be applied only to purchase the merchandise sold
          by theInstitution, and may not be applied to shipping or handling
          charges.
        </li>
        <li>
          Limit one (1) Coupon per redemption. Only one Coupon can be used per
          visit unlessotherwise specified by the Institution.
        </li>
        <li>
          The issuing of credit is at the sole discretion of the Institution.
        </li>
        <li>
          Neither Jossdeals nor the Institution is responsible for lost or
          stolen Jossdeals Coupons orthe reference number mentioned on it.
          Jossdeals Coupons cannot be combined with anyother gift coupons, third
          party coupons, coupons, or promotions, unless otherwisespecified by
          the Institution.
        </li>
        <li>
          Reproduction, sale or trade of Jossdeals Coupons is strictly
          prohibited.
        </li>
        <li>
          Any attempted redemption not consistent with these terms and
          conditions will render theJossdeals Coupon void and invalid.
        </li>
      </ul>
      <p>The Jossdeals Coupon will expire on the date specified on it.</p>
      <h3 className={classes.headingSecondary}>
        Purchase and Sale of Products and/or Services
      </h3>
      <p>
        Jossdeals takes no responsibility for the services and/or products for
        which Jossdeals Couponsmay be redeemed. Further, Jossdeals makes no
        warranty to the Users for the quality, safety,usability, or other aspect
        of the product or service for which the Jossdeals Coupon may beredeemed.
        Some services for which Jossdeals Coupon(s) can be redeemed are
        activities thatinvolve potential bodily harm (such as whitewater rafting
        etc.), and for those activities Jossdealstakes no responsibility for the
        service or activity being offered, and the User takes responsibilityfor
        his or her own actions in utilizing the services for which the Jossdeals
        Coupon can beredeemed. No two marketing promotions on product or
        services can be combined. As a conditionof purchase, Jossdeals requires
        your permission to send you administrative and promotionalemails.
        Periodically, we will send you information regarding your account
        activity andpurchases, as well as updates about our products and
        promotional offers. You can opt out of ourpromotional emails anytime by
        clicking the unsubscribe link at the bottom of any of our
        emailcorrespondences. Please see our Privacy Policy for details.
      </p>
      <h3 className={classes.headingSecondary}>Copyright & Trademark</h3>
      <p>
        Jossdeals expressly reserves all intellectual property rights in all
        text, programs, products,processes, technology, content and other
        materials, which appear on this Website. Access to thisWebsite does not
        confer and shall not be considered as conferring upon anyone any license
        underany of Jossdeals or any third party's intellectual property rights.
        Any use of this Website or itscontents, including copying or storing it
        or them in whole or part, other than for your ownpersonal,
        non-commercial use is prohibited without the permission of Jossdeals.
        You may notmodify, distribute or re-post anything on this Website for
        any purpose. The names and logos andall related product and service
        names, design marks and slogans are the trademarks or servicemarks of
        Jossdeals and/or its affiliates, its partners or its suppliers. No
        trademark or service marklicense is granted in connection with the
        materials contained on this Website. Access to thisWebsite does not
        authorize anyone to use any name, logo or mark in any manner. References
        onthis Website to any names, marks, products or services of third
        parties or hypertext links to thirdparty Websites or information are
        provided solely as a convenience to you and do not in any wayconstitute
        or imply Jossdeals’s endorsement, sponsorship or recommendation of the
        third party,information, product or service. Jossdeals is not
        responsible for the content of any third partyWebsites and does not make
        any representations regarding the content or accuracy of material onsuch
        Websites. If you decide to link to any such third party Websites, you do
        so entirely at yourown risk. All materials, including images, text,
        illustrations, designs, icons, photographs,programs, music clips or
        downloads, video clips and written and other materials that are part
        ofthis Website (collectively, the "Contents") are intended solely for
        personal, non-commercial use.You may download or copy the Contents and
        other downloadable materials displayed on theWebsite for your personal
        use only. No right, title or interest in any downloaded materials
        orsoftware is transferred to you as a result of any such downloading or
        copying. You may notreproduce (except as noted above), publish,
        transmit, distribute, display, modify, createderivative works from, sell
        or participate in any sale of or exploit in any way, in whole or in
        part,any of the Contents, the Website or any related software. All
        software used on this Website is theproperty of Jossdeals and protected
        by Bangladesh and international copyright laws. TheContents and software
        on this Website may be used only as a shopping resource. Any other
        use,including the reproduction, modification, distribution,
        transmission, republication, display, orperformance, of the Contents on
        this Website is strictly prohibited. Unless otherwise noted, allContents
        are copyrights, trademarks, trade dress and/or other intellectual
        property owned,controlled or licensed by Jossdeals , one of its
        affiliates or by third parties who have licensedtheir materials to
        Jossdeals and are protected by Indian and international copyright laws.
      </p>
      <h5>Disclaimer</h5>
      <p>
        The Website is provided on an "as is" and "as available" basis.
        Jossdeals expressly disclaims allwarranties of any kind, whether express
        or implied, including, without limitation, any warrantiesof
        merchantability, fitness for a particular purpose, and non-infringement.
        Jossdeals does notmake any warranty that the Website will meet your
        requirements, or that access to the Websitewill be uninterrupted,
        timely, secure, or error-free, or that defects, if any, will be
        corrected.Jossdeals makes no warranties as to the results that may be
        obtained from the use of the Websiteor as to the accuracy, quality, or
        reliability of any information obtained through the Website.
      </p>
      <h3 className={classes.headingSecondary}>Limitation of Liability</h3>
      <p>
        Nothing in these terms of use (or elsewhere on our website) will exclude
        or limit our liability forfraud, for death or personal injury caused by
        our negligence, or for any other liability whichcannot be excluded or
        limited under applicable law. Subject to this, our liability to you in
        relationto the use of our website or under or in connection with these
        terms of use, whether in contract,tort (including negligence) or
        otherwise, will be limited as follows:
      </p>
      <ul>
        <li>
          To the extent that the website and the information and services on the
          website areprovided free-of-charge, we will not be liable for any loss
          or damage of any nature.
        </li>
        <li>
          We will not be liable for any consequential, indirect or special loss
          or damage
        </li>
        <li>
          We will not be liable for any loss of profit, income, revenue,
          anticipated savings,contracts, business, goodwill, reputation, data,
          or information.
        </li>
        <li>
          We will not be liable for any loss or damage arising out of any event
          or events beyondour reasonable control.
        </li>
      </ul>
      <h3 className={classes.headingSecondary}>Monitoring</h3>
      <p>
        Jossdeals shall have the right, but not the obligation, to monitor the
        content of the Website at alltimes, including any chat rooms and forums
        that may hereinafter be included as part of theWebsite, to determine
        compliance with this Agreement and any operating rules established
        byJossdeals, as well as to satisfy any applicable law, regulation or
        authorized government request.Without limiting the foregoing, Jossdeals
        shall have the right to remove any material thatJossdeals, in its sole
        discretion, finds to be in violation of the provisions hereof or
        otherwiseobjectionable.
      </p>
      <h5>Privacy</h5>
      <p>
        Jossdeals respects the privacy of our users. We do not sell or rent your
        personal information tothird parties for their marketing purposes
        without your explicit consent and we only use yourinformation as
        described in the Privacy Policy.
      </p>
      <h3 className={classes.headingSecondary}>Indemnification</h3>
      <p>
        User agrees to defend, indemnify and hold harmless Jossdeals, its
        subsidiaries and BusinessAssociates, and their respective directors,
        officers, employees and agents from and against allclaims and expenses,
        including attorneys' fees, arising out of the use of this Website and/or
        theMini sites by User.
      </p>
      <h3 className={classes.headingSecondary}>Termination</h3>
      <p>
        Jossdeals disclaims all responsibility and liability for the
        availability, timeliness, security orreliability of the deals provided
        by non partnered vendors. We only ensure quality of deals thatare
        exclusive to jossdeals.com. We reserve the right to modify, suspend, or
        discontinue listing fora brand if we receive official complaints
        regarding scams or baiting or from the brand itself.
      </p>
      <h3 className={classes.headingSecondary}>Trademarks</h3>
      <p>
        Jossdeals is the trademark property of Jossdeals. All rights in respect
        of this trademark arehereby expressly reserved. Unless otherwise
        indicated, all other trademarks appearing on theWebsite are the property
        of their respective owners.
      </p>
      <h3 className={classes.headingSecondary}>Miscellaneous</h3>
      <div>
        <p>
          We reserve the right to change these Terms of Service at any time in
          its discretion and to notifyusers of any such changes solely by
          changing this Terms of Service. Your continued use of theWeb site
          after the posting of any amended Terms of Service shall constitute
          your agreement tobe bound by any such changes. Your use of this site
          prior to the time this Terms of Service wasposted will be governed
          according to the Terms of Service that applied at the time of your
          use.We may modify, suspend, discontinue or restrict the use of any
          portion, including the availabilityof any portion of the Content at
          any time, without notice or liability. We may deny access to anyperson
          or user at any time for any reason. In addition, we may at any time
          transfer rights andobligations under this Agreement to any affiliate,
          subsidiary or business unit, or any of theiraffiliated companies or
          divisions, or any entity that acquires "Jossdeals" or any of their
          assets.We hereby reserve the right to block usage of the Website and
          the App if any breach of theTerms of Service is caused by a User. This
          can in no way be construed as a waiver of any legalright under
          Bangladeshi law to claims any damages or initiate any legal
          proceedings against thehereunder.
        </p>
      </div>
    </main>
  </div>
);

export default withStyles(styles)(Privacy);
