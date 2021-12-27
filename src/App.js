import "./App.css";
import Home from "./components/Home";
import Crousel from "./components/Crousel";
import NewCollection from "./components/NewCollection";
import TrandingProduct from "./components/TrandingProduct";
import OurCollection from "./components/OurCollection";
import NewArrivals from "./components/NewArrivals";
import Arrivals from "./components/Arrivals";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <Crousel />
      <NewCollection />
      <TrandingProduct />
      <OurCollection />
      <NewArrivals />
      <Arrivals />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
