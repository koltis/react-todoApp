import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from './routes';
import * as SC from './navbar.style.js';

function App() {
  return (
    <>
      <Router>
        <SC.navbar>
          <div>
            <nav>
              <ul>
                <li>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="addItem">
                    Add Item
                  </Link>
                </li>
                <li>
                  <Link className="link" to="ModifyList">
                    ModifyList
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </SC.navbar>
        <Routes />
      </Router>
    </>
  );
}

export default App;
