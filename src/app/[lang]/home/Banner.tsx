'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faInstagram,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import type { BannerProps } from 'types/home';

import styles from 'styles/home.module.scss';

const Banner = function BannerComponent({
  dict: {
    home: { banner },
  },
}: BannerProps) {
  return (
    <section className={styles.banner}>
      <Container className={styles.bannerContainer}>
        <Row className={styles.bannerRow}>
          <Col xs={12} md={8} xl={7}>
            <div className={styles.bannerInfo}>
              <h1>
                <span className={styles.bannerTitleTop}>CARBON FREE</span>
                <span className={styles.bannerTitleBottom}>VIAJE</span>
              </h1>

              <p className={styles.bannerExcerpt}>{banner.body}</p>

              <div className={styles.bannerSocialMedia}>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bannerSocialMediaItem}
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bannerSocialMediaItem}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bannerSocialMediaItem}
                >
                  <FontAwesomeIcon icon={faMedium} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bannerSocialMediaItem}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bannerSocialMediaItem}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} xl={5}>
            <div className={styles.bannerDemoImage}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
