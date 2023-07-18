import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import F404 from "./Pages/F404/F404";
import Iphone from "./Pages/Iphone.js/Iphone";
import LearnMore from "./Pages/LearnMore/LearnMore";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> 
          <Route path="/" exact element={<Main />}/>
          {/* <Route path="/mac" exact element={<Mac />}></Route> */}
          <Route path="/iphone" exact element={<Iphone />}></Route>
          <Route path="/iphone/:pUrl" exact element={<LearnMore />}></Route>
          <Route path="*" element={<F404 />}></Route>
          {/* </Router> */}
        </Routes>
        <Footer />
      </Router>


    
    </div>
  );
}

export default App;
