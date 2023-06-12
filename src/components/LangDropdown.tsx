import React from 'react';
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';

import type { LangDropdownTitleProps } from 'types/global';

import styles from 'styles/main-navbar.module.scss';
import { locales } from 'data/locales';

function getItemText(locale: string) {
  let flag = '';
  let longText = '';
  let shortText = '';
  let altText = '';

  switch (locale) {
    case 'en':
      flag = 'en-lang-flag.png';
      longText = 'English';
      shortText = 'EN';
      altText = 'English';
      break;

    case 'id':
      flag = 'id-lang-flag.png';
      longText = 'Indonesian';
      shortText = 'ID';
      altText = 'Indonesian';
      break;

    case 'ko':
      flag = 'ko-lang-flag.png';
      longText = 'Korean';
      shortText = 'KO';
      altText = 'Korean';
      break;

    default:
      flag = 'en-lang-flag.png';
      longText = 'English';
      shortText = 'EN';
      altText = 'English';
      break;
  }

  return {
    flag,
    longText,
    shortText,
    altText,
  };
}

const LangDropdownTitle = function LangDropdownTitleComponent({
  locale,
}: LangDropdownTitleProps) {
  const { flag, shortText, altText } = getItemText(locale);

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
      {shortText}
    </div>
  );
};

const LangDropdown = function LangDropdownComponent() {
  const pathname = usePathname();
  const { lang } = useParams();

  const langPath = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <NavDropdown
      title={<LangDropdownTitle locale={lang} />}
      id="lang-dropdown"
      className={styles.navbarDropdown}
    >
      {locales.map((locale) => {
        const { flag, longText, altText } = getItemText(locale);

        return (
          <NavDropdown.Item
            href={langPath(locale)}
            className={styles.navbarDropdownItem}
          >
            <span>
              <Image
                src={`/img/${flag}`}
                alt={altText}
                width={25}
                height={25}
                className={styles.navbarDropdownFlag}
              />
            </span>
            {longText}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default LangDropdown;
