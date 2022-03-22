import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ProductDetails } from '../components/Product';

const DATA = {
  id: 1,
  title: 'Tytuł produktu',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim atque, quibusdam ipsa eum voluptas pariatur laudantium ut. Corporis libero laudantium vero a velit suscipit blanditiis facilis quasi consectetur eligendi.',
  imageUrl: 'https://picsum.photos/536/354',
  imageAlt: 'Losowy obrazek',
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductDetails data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
