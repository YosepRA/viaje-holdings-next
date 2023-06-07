'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from 'styles/main-navbar.module.scss';
import 'styles/main-navbar-bs-override.css';

interface LangDropdownTitleProps {
  locale: string;
}

const LangDropdownTitle = function LangDropdownTitleComponent({
  locale,
}: LangDropdownTitleProps) {
  let flag = '';
  let text = '';
  let altText = '';

  switch (locale) {
    case 'en':
      flag = 'en-lang-flag.png';
      text = 'EN';
      altText = 'English';
      break;

    case 'id':
      flag = 'id-lang-flag.png';
      text = 'ID';
      altText = 'Indonesian';
      break;

    case 'ko':
      flag = 'kr-lang-flag.png';
      text = 'KO';
      altText = 'Korean';
      break;

    default:
      flag = 'en-lang-flag.png';
      text = 'EN';
      altText = 'English';
      break;
  }

  return (
    <div className={styles.navbarDropdownTitle}>
      <span>
        <Image
          src={`/img/${flag}`}
          alt={altText}
          width={25}
          height={25}
          className={styles.navbarDropdownImage}
        />
      </span>
      {text}
    </div>
  );
};

const MainNavbar = function MainNavbarComponent() {
  const pathname = usePathname();

  return (
    <header>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="/" as={Link} className={styles.navbarBrand}>
            Viaje Holdings
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className={styles.navbarCollapse}>
            <Nav>
              <Nav.Link href="/" as={Link} className={styles.navbarLink}>
                Home
              </Nav.Link>

              <Nav.Link href="/about" as={Link} className={styles.navbarLink}>
                About
              </Nav.Link>

              <Nav.Link
                href="/services"
                as={Link}
                className={styles.navbarLink}
              >
                Services
              </Nav.Link>

              <Nav.Link href="/contact" as={Link} className={styles.navbarLink}>
                Contact
              </Nav.Link>

              <NavDropdown
                title={<LangDropdownTitle locale="en" />}
                id="lang-dropdown"
                className={styles.navbarDropdown}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className={styles.navbarDropdownItem}
                >
                  <span>
                    <Image
                      src="/img/en-lang-flag.png"
                      alt="English"
                      width={25}
                      height={25}
                      className={styles.navbarDropdownFlag}
                    />
                  </span>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className={styles.navbarDropdownItem}
                >
                  <span>
                    <Image
                      src="/img/id-lang-flag.png"
                      alt="Indonesian"
                      width={25}
                      height={25}
                    />
                  </span>
                  Indonesian
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className={styles.navbarDropdownItem}
                >
                  <span>
                    <Image
                      src="/img/kr-lang-flag.png"
                      alt="Korean"
                      width={25}
                      height={25}
                    />
                  </span>
                  Korean
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavbar;
