import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
    nav: {
        padding: '20px 0'
    }, 
    ul: {
        margin: 0, 
        padding: 0, 
        listStyle: 'none', 
        display: 'flex'
    }, 
    li: {
        flex: 1
    }, 
    a: {
        borderBottom: '3px solid transparent',
        textDecoration: 'none', 
        color: '#000', 
        opacity: '.4', 
        fontSize: 30, 
        display: 'inline-block', 
        // transition: 'all .3s'
    }, 
    active: {
        borderBottom: '3px solid #000', 
        textDecoration: 'none', 
        fontSize: 30, 
        opacity: '.8', 
        color: '#000', 
        display: 'inline-block', 
        transition: 'all .3s', 
        lineHeight: '38px'
    }
}

class DesktopSubNav extends Component {
    state = {
        selectedIndex: 0
    }

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };



    render() {
        return ( 
            <nav style={styles.nav}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Link 
                            onClick={event => this.handleListItemClick(event, 0)}
                            style={ this.state.selectedIndex === 0 ? styles.active : styles.a } to="/">
                            All Deals
                        </Link>
                    </li>
                    <li style={styles.li}>
                        <Link 
                            onClick={event => this.handleListItemClick(event, 1)}
                            style={ this.state.selectedIndex === 1 ? styles.active : styles.a } to="/deals/online-deals">
                            Online deals
                        </Link>
                    </li>
                    <li style={styles.li}>
                        <Link 
                            onClick={event => this.handleListItemClick(event, 2)}
                            style={ this.state.selectedIndex === 2 ? styles.active : styles.a } to="/deals/store-deals">
                            Shop deals
                        </Link>
                    </li>
                    <li style={styles.li}>
                        <Link 
                            onClick={event => this.handleListItemClick(event, 3)}
                            style={ this.state.selectedIndex === 3 ? styles.active : styles.a } to='/coupon'>
                            Coupons
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default DesktopSubNav;