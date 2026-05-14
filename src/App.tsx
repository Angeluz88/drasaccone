import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Attorneys />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
