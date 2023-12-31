import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import FavoriteSeries from "./components/FavoriteSeries";
import GenreMovieList from "./components/GenreMovieList";

function App() {
  return (
    <>
      <main>
        <section className="px-5 md:px-8 xl:px-0 container mx-auto">
          <Navbar />
        </section>
        <Slider />
        <section className="px-5 xl:px-0 container mx-auto">
          <FavoriteSeries />
        </section>
        <GenreMovieList />
        <Footer />
      </main>
    </>
  );
}

export default App;
