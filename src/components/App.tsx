import { BrowserRouter, Route, Routes } from "react-router";
import NavMenu from "./NavMenu";
import Home from "./Home";
import Apparel from "./Apparel";
import Accessories from "./Accessories";
import PreOrder from "./PreOrder";
import NewDrops from "./NewDrops";
import Contact from "./Contact";
import Donate from "./Donate";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavMenu />
        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apparel" element={<Apparel />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/preorder" element={<PreOrder />} />
              <Route path="/newdrops" element={<NewDrops />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
