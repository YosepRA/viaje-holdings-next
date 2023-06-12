export interface Dictionary {
  mainNavbar: MainNavbar;
  home: Home;
  footer: Footer;
}

/* ======================= Main Navbar ======================= */

export interface MainNavbar {
  menu: Menu;
}

interface Menu {
  home: string;
  about: string;
  services: string;
  contact: string;
}

/* ======================= Home Page ======================= */

export interface Home {
  banner: Banner;
  services: Services;
  about: About;
  partners: Partners;
}

interface ServicesContentItem {
  title: string;
  body: string[];
  pageUrl: string;
  buttonText: string;
}

interface Banner {
  body: string[];
}

interface Services {
  title: string[];
  control: Control;
  content: Content;
}

export interface ServicesContent {
  ev: ServicesContentItem;
  viajePoint: ServicesContentItem;
  metaverse: ServicesContentItem;
}

interface Control {
  ev: string;
  viajePoint: string;
  metaverse: string;
}

interface About {
  title: string;
  body: string[];
  buttonText: string;
}

interface Partners {
  title: string;
  body: string[];
}

/* ======================= Footer ======================= */

export interface Footer {
  introduction: string[];
  navigation: FooterNavigation;
  contact: FooterContact;
  download: FooterDownload;
}

interface FooterNavigation {
  about: string;
  services: string;
}

interface FooterContact {
  title: string;
  placeholder: string;
}

interface FooterDownload {
  title: string;
}
