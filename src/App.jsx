import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";

function App() {
    return (
        <section>
            <Navbar />
            <Hero />
            <Analytics />
            <NewsLetter />
            <CardsSection />
            <Footer />
        </section>
    );
}

export default App;
