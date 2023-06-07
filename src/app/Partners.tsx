'use client';

import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from 'styles/home.module.scss';

const Partners = function PartnersComponent() {
  return (
    <section className={styles.partners}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.partnersTitle}>Partners</h2>

            <p className={styles.partnersBody}>
              Carbon-Free VIAJE collaborated with various local companies in
              Bali and as well as Korean companies to expand the business
              globally and provide the best service to the people in the
              VIAJE&apos;s Eco-system.
            </p>
          </Col>
        </Row>

        <Row className="gx-3 gy-2 gy-xl-3">
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <div className={styles.partnersItem}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
