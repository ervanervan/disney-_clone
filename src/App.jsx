import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <main className="px-5 md:px-0 container mx-auto">
        <Navbar />
      </main>
      <Slider />
    </>
  );
}

export default App;
