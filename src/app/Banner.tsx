'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faInstagram,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import styles from 'styles/home.module.scss';

const Banner = function BannerComponent() {
  return (
    <section className={styles.banner}>
      <Container className={styles.bannerContainer}>
        <div className={styles.bannerInfo}>
          <h1>
            <span className={styles.bannerTitleTop}>CARBON FREE</span>
            <span className={styles.bannerTitleBottom}>VIAJE</span>
          </h1>

          <p>
            An Eco-Friendly company that provides travel and cultural contents,
            and develop an online and offline streaming service converged with
            the 4<sup>th</sup> industry and metaverse service.
          </p>

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

        <div className={styles.bannerDemoImage}></div>
      </Container>
    </section>
  );
};

export default Banner;
