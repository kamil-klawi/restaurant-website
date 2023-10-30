import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Cart() {
  return (
    <>
      <Header />
      <div
        className="mx-80 my-24"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <h2 className="text-4xl tracking-wide font-light text-black opacity-75">
          Produkty w koszyku
        </h2>
        <div className="my-8 w-16 h-1 bg-blue-400" />
        <p className="my-16 text-md font-light text-black opacity-75">
          Brak produktów w koszyku.
        </p>
        <a
          className="relative uppercase px-12 py-4 bg-blue-400 text-white tracking-wide"
          href=""
        >
          Przejdź do sklepu
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
