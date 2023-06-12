'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import type { AboutProps } from 'types/home';

import styles from 'styles/home.module.scss';

const About = function AboutComponent({
  dict: {
    home: { about },
  },
}: AboutProps) {
  const { lang } = useParams();

  return (
    <section className={styles.about}>
      <Container>
        <Row className={styles.aboutRow}>
          <Col xs={12} md={8}>
            <div className={styles.aboutInfo}>
              <h2 className={styles.aboutTitle}>{about.title}</h2>

              <p className={styles.aboutBody}>{about.body}</p>

              <Link href={`/${lang}/about`} className={styles.aboutLearnMore}>
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
