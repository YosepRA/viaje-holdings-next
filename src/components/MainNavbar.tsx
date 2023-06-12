'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import Image from 'next/image';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LangDropdown from './LangDropdown';

import styles from 'styles/main-navbar.module.scss';
import 'styles/main-navbar-bs-override.css';

const MainNavbar = function MainNavbarComponent() {
  const pathname = usePathname();
  const { lang } = useParams();

  return (
    <header>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand
            href={`/${lang}`}
            as={Link}
            className={styles.navbarBrand}
          >
            Viaje Holdings
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className={styles.navbarCollapse}>
            <Nav>
              <Nav.Link
                href={`/${lang}`}
                as={Link}
                className={styles.navbarLink}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href={`/${lang}/about`}
                as={Link}
                className={styles.navbarLink}
              >
                About
              </Nav.Link>

              <Nav.Link
                href={`/${lang}/services`}
                as={Link}
                className={styles.navbarLink}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href={`/${lang}/contact`}
                as={Link}
                className={styles.navbarLink}
              >
                Contact
              </Nav.Link>

              <LangDropdown />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavbar;
