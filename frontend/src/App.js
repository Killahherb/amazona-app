import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
      <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">Amazon Shopping Example</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path='/product/:id' element={<ProductScreen/>} />
                    <Route path="/" element={<HomeScreen />} exact />
                </Routes>
            </main>
            <footer className="row center">
                All Rights Reserved.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;