'use client';

import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from 'styles/home.module.scss';

const About = function AboutComponent() {
  return (
    <section className={styles.about}>
      <Container>
        <Row className={styles.aboutRow}>
          <Col xs={12} md={8}>
            <div className={styles.aboutInfo}>
              <h2 className={styles.aboutTitle}>About Us</h2>

              <p className={styles.aboutBody}>
                Carbon-Free VIAJE is an Eco-Friendly ESG investment and
                management company that provides travel and cultural contents
                and handling a metaverse service fused with the 4<sup>th</sup>{' '}
                industry by developing an online streaming service with both
                online and offline audiences.
              </p>

              <Link href="/about" className={styles.aboutLearnMore}>
                Learn More
              </Link>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className={styles.aboutDemoImage}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
