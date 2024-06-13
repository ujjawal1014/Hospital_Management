import Navbar from "./1.Navbar/Navbar";
import Home from "./2.Home/Home";
import Quick_Action from "./2.1.Quick_Action/Quick_Action";
import Services from "./3.Services/Services";
import Specilisation from "./4.Specilisation/Specilisation";
function App() {
  return (
    <>
      <div className="Html_Page">
        <Navbar />
        <Home />
        <Quick_Action />
        <Services />
        <Specilisation />
      </div>
    </>
  );
}

export default App;
