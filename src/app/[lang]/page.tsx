import Image from 'next/image';

import MainNavbar from 'components/MainNavbar';
import Banner from './home/Banner';
import Services from './home/Services';
import About from './home/About';
import Partners from './home/Partners';
import Footer from 'components/Footer';
import { getDictionary } from 'utils/dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div>
      <MainNavbar />

      <main>
        <Banner dict={dict} />

        <Services dict={dict} />

        <About dict={dict} />

        <Partners dict={dict} />
      </main>

      <Footer />
    </div>
  );
}
