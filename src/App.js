import About from './About';
import './App.css';
import Big from './Big';
import Blog from './Blog';
import Header from './Header';
import Products from './Products';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Big />
      <About />
      <Products />
      <Blog />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;