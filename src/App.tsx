import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/home/HomePage';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
