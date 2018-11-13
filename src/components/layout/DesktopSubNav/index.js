import React from 'react';

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
        textDecoration: 'none', 
        color: '#000', 
        opacity: '.8', 
        fontSize: 34, 
        display: 'inline-block'
    }
}

const DesktopSubNav = () => {
    return ( 
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><a style={styles.a} href="http://" rel="noopener noreferrer">All deals</a></li>
                <li style={styles.li}><a style={styles.a} href="http://" rel="noopener noreferrer">Online deals</a></li>
                <li style={styles.li}><a style={styles.a} href="http://" rel="noopener noreferrer">Shop deals</a></li>
                <li style={styles.li}><a style={styles.a} href="http://" rel="noopener noreferrer">Coupons</a></li>
            </ul>
        </nav>
    );
}
 
export default DesktopSubNav;