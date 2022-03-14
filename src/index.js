import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import CrytpoDetails from "./components/CrytpoDetails";




const rootElement = document.getElementById("root");
render( 
  <BrowserRouter>
  
    <Routes>
    
     <Route path="/" element={<App />}>
        <Route index element={<Home />} />      
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="crypto/:coinId" element={<CrytpoDetails />} />
      <Route path="news" element={<News />} />  
      </Route>    
     
    </Routes>
   
  </BrowserRouter>
  ,
  rootElement
);
