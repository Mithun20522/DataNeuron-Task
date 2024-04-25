import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App