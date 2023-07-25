import { Navbar, Hero, Overview, Products, Footer, Details} from "./components";
import StarsCanvas from './components/canvas/Ipad'
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <Overview />
      <Products />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
