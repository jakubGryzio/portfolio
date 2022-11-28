import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import classes from './Footer.module.css';
import Link from 'next/link';
import NAV_LINK from '../../data/navLink';

const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>
        <Container>
            <Row>
                <Col lg='6' className={classes.footer__top}>
                    <div className={classes.nav__menu}>
                        {NAV_LINK.map((item, index) => (
                            <Link href={item.path} key={index}>{item.display}</Link>
                        ))}
                    </div>
                </Col>

                <Col lg='6' className={classes.footer__top}>
                    <div className={classes.footer__creator}>
                        <h6>Created by Jakub Gryzio</h6>
                    </div>
                </Col>

                <Col lg='12' className={classes.footer__to}>
                    <div className={classes.footer__copyright}>
                        <p>&copy; Copyright {year} - developed by Jakub Gryzio</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;