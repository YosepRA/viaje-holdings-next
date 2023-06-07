'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faInstagram,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import styles from 'styles/footer.module.scss';
import googleStore from 'assets/img/google-play-badge.png';
import appleStore from 'assets/img/apple-store-logo.png';

const Footer = function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerRowTop}>
          <Col xs={12} lg={5}>
            <div className={styles.footerInfo}>
              <h2 className={styles.footerInfoTitle}>Viaje Holdings</h2>

              <p>
                The ESG strategy is for future global eco-friendly preservation
                and at the same time. It has become an essential factor as it
                affects future business and investment. Carbon-Free VIAJE
                carries out global eco-friendly business by connecting companies
                and eco-friendliness by introducing the ESG strategy.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className={styles.footerNav}>
              <Link href="/about" className={styles.footerNavLink}>
                About
              </Link>
              <Link href="/services" className={styles.footerNavLink}>
                Services
              </Link>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div>
              <div className={styles.footerContact}>
                <h3 className={styles.footerContactTitle}>Let us know</h3>

                <Form.Control type="text" placeholder="Write an email" />
              </div>

              <div>
                <h3 className={styles.footerDownloadTitle}>
                  Download Viaje App
                </h3>

                <div>
                  <a href="#">
                    <Image
                      src={googleStore}
                      alt="Viaje App - Google Play Store"
                      className={styles.footerDownloadButton}
                    />
                  </a>

                  <a href="#">
                    <Image
                      src={appleStore}
                      alt="Viaje App - Apple Store"
                      className={styles.footerDownloadButton}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className={styles.footerRowBottom}>
          <Col xs={12} lg={6}>
            <div>
              <p className={styles.footerCopyright}>
                Copyright &copy; 2023 Viaje Holdings. All Right Reserved{' '}
              </p>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className={styles.footerSocialMedia}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialMediaItem}
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialMediaItem}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialMediaItem}
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialMediaItem}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialMediaItem}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
