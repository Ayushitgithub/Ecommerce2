import React from 'react';
import ReactDOM from 'react-dom/clit';
import './index.css';

import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
);
