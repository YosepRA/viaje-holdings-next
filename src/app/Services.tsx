'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from 'styles/home.module.scss';

const Services = function ServicesComponent() {
  const [activeService, setActiveService] = useState('');

  return (
    <section className={styles.services}>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className={styles.servicesTitle}>
              Our
              <br />
              Product
              <br />
              Services
            </h2>
          </Col>

          <Col xs={12}>
            <div>
              <div className={styles.servicesControl}>
                <button className={styles.servicesControlButton}>
                  Electric Vehicle
                </button>
                <button className={styles.servicesControlButton}>
                  Viaje Point
                </button>
                <button className={styles.servicesControlButton}>
                  Metaverse
                </button>
              </div>

              <div>
                <Row>
                  <Col xs={12}>
                    <div className={styles.servicesInfo}>
                      <h3>Electric Vehicle</h3>

                      <p>
                        An Eco-Friendly company that provides travel and
                        cultural contents, and develop an online and offline
                        streaming service converged with the 4<sup>th</sup>{' '}
                        industry and metaverse service.
                      </p>

                      <Link
                        href="/services"
                        className={styles.servicesLearnMore}
                      >
                        Learn More
                      </Link>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className={styles.servicesDemoImage}></div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
