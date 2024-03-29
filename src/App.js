
import './App.css';


import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from './Components/Header/Header';

import Home from './Containers/Home/Home';
import Search from './Containers/Search/Search';
import Movie from './Containers/Movie/Movie';
import Actor from './Containers/Actor/Actor';
import Footer from './Components/Footer/Footer';



function App() {

 


  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/actor/:actorId" element={<Actor />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;