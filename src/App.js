import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './pages/article/Article';
import Bande from './pages/bande/Bande';
import Entreprise from './pages/entreprise/Entreprise';
import Home from "./pages/home/Home";
import Test from './pages/test /Test';
import Error from './pages/error/Error';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/bande" element={<Bande />} />
      <Route path="/entreprise" element={<Entreprise />} />
      <Route path="/article" element={<Article />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}









 

