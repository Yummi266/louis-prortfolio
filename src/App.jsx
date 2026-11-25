import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-dvh w-full bg-[#050505] text-white">
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
