import "./App.css";
import Conditions from "./components/Conditions";
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      
      <Conditions/>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
