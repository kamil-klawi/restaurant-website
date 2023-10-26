import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Newsletter from '../../components/Newsletter/Newsletter';

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Homepage;
