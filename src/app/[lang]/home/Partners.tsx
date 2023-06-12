'use client';

import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import type { PartnersProps } from 'types/home';

import styles from 'styles/home.module.scss';

const Partners = function PartnersComponent({
  dict: {
    home: { partners },
  },
}: PartnersProps) {
  return (
    <section className={styles.partners}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.partnersTitle}>{partners.title}</h2>

            <p className={styles.partnersBody}>{partners.body}</p>
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
