import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '	#484947', color: '#fff', padding: '20px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', fontSize: '20px' }}>© 2023 Your Company. All rights reserved.</span>
                {/* <span style={{ fontSize: '24px', margin: '0 10px' }}>|</span> */}
                {/* <span style={{ fontSize: '20px' }}>Follow us on <a href="" style={{ color: '#fff', textDecoration: 'underline' }}>Instagram</a></span> */}
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', fontSize: '20px' }}>Company email: carrental@carmail.com</span>
            </div>
            <div style={{ marginTop: '10px' }}>
                <a href="/privacy" style={{ color: '#fff', marginRight: '10px' }}>Privacy Policy</a>
                <a href="/terms" style={{ color: '#fff', marginRight: '10px' }}>Terms of Service</a>
                {/* <a href="/contact" style={{ color: '#fff' }}>Contact Us</a> */}
            </div>
        </footer>
    );
};

export default Footer;