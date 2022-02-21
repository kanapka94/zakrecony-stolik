import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img src="https://picsum.photos/536/354" alt="Losowy obrazek" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt cupiditate
          sapiente nobis molestiae, nisi libero, magnam obcaecati explicabo dolor corrupti mollitia
          minima sed modi nemo illo odit possimus temporibus!
        </p>
      </main>
      <Footer />
    </main>
  );
};

export default Home;
