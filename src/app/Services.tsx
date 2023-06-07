'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cn from 'classnames';

import styles from 'styles/home.module.scss';

interface fakeServiceDataType {
  electricVehicle: {
    title: string;
    body: string[];
    pageUrl: string;
  };
  viajePoint: {
    title: string;
    body: string[];
    pageUrl: string;
  };
  metaverse: {
    title: string;
    body: string[];
    pageUrl: string;
  };
}

const fakeServiceData = {
  electricVehicle: {
    title: 'Electric Vehicle',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex doloribus cum quod similique voluptates ea quos ipsa consequuntur ipsam labore?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quis!',
    ],
    pageUrl: '/services',
  },
  viajePoint: {
    title: 'Viaje Point',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex doloribus cum quod similique voluptates ea quos ipsa consequuntur ipsam labore?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quis!',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minus maxime tenetur pariatur tempora corrupti cupiditate quia repellat dolor esse, molestias nostrum quas cum mollitia temporibus accusamus, sint eligendi perferendis.',
    ],
    pageUrl: '/services',
  },
  metaverse: {
    title: 'Metaverse',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex doloribus cum quod similique voluptates ea quos ipsa consequuntur ipsam labore?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quis!',
    ],
    pageUrl: '/services',
  },
};

const Services = function ServicesComponent() {
  const [activeService, setActiveService] = useState('electricVehicle');
  const { title, body, pageUrl } =
    fakeServiceData[activeService as keyof fakeServiceDataType];

  return (
    <section className={styles.services}>
      <Container>
        <Row className={cn(styles.servicesRow)}>
          <Col xs={12} md={3}>
            <h2 className={styles.servicesTitle}>
              Our
              <br />
              Product
              <br />
              Services
            </h2>
          </Col>

          <Col xs={12} md={9}>
            <div>
              <div className={styles.servicesControl}>
                <button
                  className={cn(styles.servicesControlButton, {
                    [styles.servicesControlButtonActive]:
                      activeService === 'electricVehicle',
                  })}
                  onClick={() => setActiveService('electricVehicle')}
                >
                  Electric Vehicle
                </button>
                <button
                  className={cn(styles.servicesControlButton, {
                    [styles.servicesControlButtonActive]:
                      activeService === 'viajePoint',
                  })}
                  onClick={() => setActiveService('viajePoint')}
                >
                  Viaje Point
                </button>
                <button
                  className={cn(styles.servicesControlButton, {
                    [styles.servicesControlButtonActive]:
                      activeService === 'metaverse',
                  })}
                  onClick={() => setActiveService('metaverse')}
                >
                  Metaverse
                </button>
              </div>

              <div>
                <Row className={styles.servicesInfoRow}>
                  <Col xs={12} md={9} xl={8}>
                    <div className={styles.servicesInfo}>
                      <h3>{title}</h3>

                      <div className={styles.servicesInfoBody}>
                        {body.map((content) => (
                          <p>{content}</p>
                        ))}
                      </div>

                      <Link href={pageUrl} className={styles.servicesLearnMore}>
                        Learn More
                      </Link>
                    </div>
                  </Col>

                  <Col xs={12} md={3} xl={4}>
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
