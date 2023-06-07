import Image from 'next/image';

import MainNavbar from 'components/MainNavbar';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Partners from './Partners';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <div>
      <MainNavbar />

      <main>
        <Banner />

        <Services />

        <About />

        <Partners />
      </main>

      <Footer />
    </div>
  );
}
