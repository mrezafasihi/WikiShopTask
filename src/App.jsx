import "./App.css";
import Conditions from "./components/Conditions";
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Instalment from "./components/Instalment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Instalment/>
      <Conditions/>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
