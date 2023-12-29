import "./App.css";
import FavoriteSeries from "./components/FavoriteSeries";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <main className="px-5 md:px-8 xl:px-0 container mx-auto">
        <Navbar />
      </main>
      <Slider />
      <main className="px-5 xl:px-0 container mx-auto">
        <FavoriteSeries />
      </main>
    </>
  );
}

export default App;
