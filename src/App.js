import { BrowserRouter, Route, Switch } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Home from "./components/Home";
import Wallet from "./components/Wallet";
import Playlist from "./components/Playlist";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <SubNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/playlist" component={Playlist} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
