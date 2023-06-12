'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cn from 'classnames';

import type { ServicesContent, ServicesContentItem } from 'types/dictionary';
import type { ServicesProps } from 'types/home';

import styles from 'styles/home.module.scss';

const Services = function ServicesComponent({
  dict: {
    home: { services },
  },
}: ServicesProps) {
  const [activeService, setActiveService] = useState('ev');
  const { lang } = useParams();
  const { title, body, pageUrl, buttonText } =
    services.content[activeService as keyof ServicesContent];

  return (
    <section className={styles.services}>
      <Container>
        <Row className={cn(styles.servicesRow)}>
          <Col xs={12} md={3}>
            <h2 className={styles.servicesTitle}>
              {/* {home?.services?.title.map((text: string) => (
                <span>
                  {text} <br />
                </span>
              ))} */}
              {services?.title.join(' ')}
            </h2>
          </Col>

          <Col xs={12} md={9}>
            <div>
              <div className={styles.servicesControl}>
                <button
                  className={cn(styles.servicesControlButton, {
                    [styles.servicesControlButtonActive]:
                      activeService === 'ev',
                  })}
                  onClick={() => setActiveService('ev')}
                >
                  {services.control.ev}
                </button>
                <button
                  className={cn(styles.servicesControlButton, {
                    [styles.servicesControlButtonActive]:
                      activeService === 'viajePoint',
                  })}
                  onClick={() => setActiveService('viajePoint')}
                >
                  {services.control.viajePoint}
                </button>
                <button
                  className={cn(styles.servicesControlButton, {
                    [styles.servicesControlButtonActive]:
                      activeService === 'metaverse',
                  })}
                  onClick={() => setActiveService('metaverse')}
                >
                  {services.control.metaverse}
                </button>
              </div>

              <div>
                <Row className={styles.servicesInfoRow}>
                  <Col xs={12} md={9} xl={8}>
                    <div className={styles.servicesInfo}>
                      <h3>{title}</h3>

                      <div className={styles.servicesInfoBody}>
                        {body.map((content: string) => (
                          <p>{content}</p>
                        ))}
                      </div>

                      <Link
                        href={`/${lang}/${pageUrl}`}
                        className={styles.servicesLearnMore}
                      >
                        {buttonText}
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
