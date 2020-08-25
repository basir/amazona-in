import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className="brand">
            <button
              onClick={() => setSidebarIsOpen(true)}
              className="open-sidebar"
            >
              <i class="fa fa-bars"></i>
            </button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <h2>Shopping Categories</h2>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
              >
                x
              </button>
            </li>
            <li>
              <Link
                to="/category/Pants"
                onClick={() => setSidebarIsOpen(false)}
              >
                Pants
              </Link>
              <span>
                <i className="fa fa-arrow-right"></i>
              </span>
            </li>
            <li>
              <Link
                to="/category/Shirts"
                onClick={() => setSidebarIsOpen(false)}
              >
                Shirts
              </Link>
              <span>
                <i className="fa fa-arrow-right"></i>
              </span>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/category/:id" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact={true} />
        </main>
        <footer>All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
